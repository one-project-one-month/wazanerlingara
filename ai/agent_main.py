from agents.agent_1 import create_agent1
from agents.agent_2 import create_agent2
from agents.imposter_agent import create_imposter_agent
from agents.player_agent import create_player_agent
from langchain_core.messages import AIMessage,HumanMessage

agent1 = create_agent1()

agent1_result = agent1.invoke(
    {"messages": [{"role": "user", "content": "Valorant"}]},
    context={"count_round": "round_1"},
    config={"configurable": {"thread_id": "share_thread"}}
)

agent2 = create_agent2()

agent2_result = agent2.invoke(
    {"messages": [{"role": "user", "content": "Valorant"}]},
    context={"count_round": "round_1"},
    config={"configurable": {"thread_id": "share_thread"}}
)

imposter_agent = create_imposter_agent()

imposter_agent_result = imposter_agent.invoke(
    {"messages": [{"role": "user", "content": "you are imposter"}]},
    context={"count_round": "round_1"},
    config={"configurable": {"thread_id": "share_thread"}}
)

create_player_agent1 = create_player_agent()

config1 = {"configurable": {"thread_id": "share_thread"}}

create_player_agent1_result = create_player_agent1.update_state(
    config1,
    {"messages": [HumanMessage(content="morning", name="agent_4")]}
)