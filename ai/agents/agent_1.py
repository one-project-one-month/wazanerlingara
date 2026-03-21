import psycopg
from typing import TypedDict
from langchain.agents import create_agent
from langgraph.checkpoint.postgres import PostgresSaver
import sys
import os
from models.groq_llm import get_model
from prompts.agent1_prompt import round_agent1_prompt
from config.database import DB_URI

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))


class Context(TypedDict):
    user_role: str


def create_agent1():
    model = get_model()

    conn = psycopg.connect(DB_URI, autocommit=True)
    checkpointer = PostgresSaver(conn)
    checkpointer.setup()

    agent = create_agent(
        model=model,
        middleware=[round_agent1_prompt],
        context_schema=Context,
        name="agent_1",
        checkpointer=checkpointer,
    )

    return agent