from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_core.messages import HumanMessage
from fastapi.responses import JSONResponse

from agents.agent_1 import create_agent1
from agents.agent_2 import create_agent2
from agents.imposter_agent import create_imposter_agent
from agents.player_agent import create_player_agent
from schema.schema import PlayRequest, ImposterRequest, HumanRequest, DeleteThread
from config.database import delete_thread, history_thread
from fastapi.middleware.cors import CORSMiddleware

agents = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    agents["agent_1"] = create_agent1()
    agents["agent_2"] = create_agent2()
    agents["agent_3"] = create_imposter_agent()
    agents["player"] = create_player_agent()
    yield
    agents.clear()

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"],
    allow_credentials = True, 
    allow_methods = ["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    expected_agents = ["agent_1", "agent_2", "agent_3", "player"]
    missing = [a for a in expected_agents if a not in agents]
    
    if missing:
        raise HTTPException(
            status_code=503,
            detail={"status": "unhealthy", "missing_agents": missing}
        )
    
    return {
        "status": "healthy",
        "agents_loaded": list(agents.keys())
    }

@app.post("/agent_1")
async def play_with_ai_agent(request: PlayRequest):
    try:
        agent1_result = agents['agent_1'].invoke({"messages": [{"role": "user", "content": request.content}]},
    context={"count_round": request.count_round},
    config={"configurable": {"thread_id": "share_thread"}})
        return {
            "agent_1": agent1_result['messages'][-1].content            
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/agent_2")
async def play_with_ai_agent(request: PlayRequest):
    try: 
        agent2_result = agents['agent_2'].invoke({"messages": [{"role": "user", "content": request.content}]},
    context={"count_round": request.count_round},
    config={"configurable": {"thread_id": "share_thread"}})        
        return {
            "agent_2": agent2_result['messages'][-1].content
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/agent_3")
async def imposter_ai(request: ImposterRequest):
    try: 
        agent3_result = agents['agent_3'].invoke({"messages": [{"role": "user", "content": request.content}]},
    context={"count_round": request.count_round},
    config={"configurable": {"thread_id": "share_thread"}})    
        return {
            "agent_3": agent3_result['messages'][-1].content
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/human_player")
async def human_player_ai(request: HumanRequest):
    try: 
        human_player = agents["player"].update_state(
            {"configurable": {"thread_id": "share_thread"}},

            {"messages": [HumanMessage(content=request.content, name="agent_4")]},
        )

        return {"human_player": request.content} 
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/clear_db")
def ckpt_delete_thread():
    del_thread = delete_thread("share_thread")
    return del_thread

@app.get("/history_thread")
def check_history():
    check_thread = history_thread("share_thread")
    return JSONResponse(content=check_thread)

@app.get("/imposter_guess")
def imposter_guesses():
    check_thread = history_thread("share_thread")
    agent_1 = check_thread["agent_1"][-1]
    agent_2 = check_thread['agent_2'][-1]
    agent_3 = check_thread['agent_3'][-1]
    agent_4 = check_thread['agent_4'][-1]
    imp_list = [agent_1, agent_2, agent_3, agent_4]
    counts = {p: imp_list.count(p) for p in set(imp_list)}
    major_vote = max(counts, key=counts.get)
    return major_vote