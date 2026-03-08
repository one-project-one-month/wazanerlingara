from agents.agent_1 import create_agent1
from agents.agent_2 import create_agent2
from agents.imposter_agent import create_imposter_agent

agent1 = create_agent1()

agent1_result = agent1.invoke(
    {"messages": [{"role": "user", "content": "Valorant"}]},
    context={"count_round": "round_2"},
    config={"configurable": {"thread_id": "share_thread"}}
)

agent2 = create_agent2()

agent2_result = agent2.invoke(
    {"messages": [{"role": "user", "content": "Valorant"}]},
    context={"count_round": "round_2"},
    config={"configurable": {"thread_id": "share_thread"}}
)

imposter_agent = create_imposter_agent()

imposter_agent_result = imposter_agent.invoke(
    {"messages": [{"role": "user", "content": "you are imposter"}]},
    context={"count_round": "round_2"},
    config={"configurable": {"thread_id": "share_thread"}}
)
