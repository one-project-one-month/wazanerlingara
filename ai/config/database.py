import os 
from langgraph.checkpoint.postgres import PostgresSaver
import psycopg

DB_URI = os.getenv("DB_URI")

def delete_thread(thread_id):

    with PostgresSaver.from_conn_string(DB_URI) as checkpointer:
        checkpointer.setup()

        checkpointer.delete_thread(thread_id)

def history_thread(thread_id):

    conn = psycopg.connect(DB_URI)
    checkpointer = PostgresSaver(conn)

    config = {
        "configurable": {
            "thread_id": thread_id
        }
    }

    history = checkpointer.get_tuple(config)

    if not history:
        return {
            "agent_1": [],
            "agent_2": [],
            "agent_3": [],
            "agent_4": []
        }

    
    agent1 = [take_name_agent.content for take_name_agent in history[1]['channel_values']['messages'] if take_name_agent.name == "agent_1"]
    agent2 = [take_name_agent.content for take_name_agent in history[1]['channel_values']['messages'] if take_name_agent.name == "agent_2"]
    agent3 = [take_name_agent.content for take_name_agent in history[1]['channel_values']['messages'] if take_name_agent.name == "agent_3"]
    agent4 = [take_name_agent.content for take_name_agent in history[1]['channel_values']['messages'] if take_name_agent.name == "agent_4"]

    return {"agent_1": agent1, 
            "agent_2": agent2,
            "agent_3": agent3,
            "agent_4": agent4}