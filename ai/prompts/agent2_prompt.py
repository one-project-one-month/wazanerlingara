from langchain.agents.middleware import dynamic_prompt, ModelRequest
from langchain_core.messages import AIMessage, HumanMessage

@dynamic_prompt
def round_agent2_prompt(request: ModelRequest) -> str:
    round_c = request.runtime.context.get("count_round", "round_c")
    content = request.messages[0].content
    
    words = [
        msg.content
        for msg in request.messages
        if isinstance(msg, AIMessage)
    ]
    

    agent1_words = [
        msg.content for msg in request.messages
        if isinstance(msg, AIMessage) and getattr(msg, "name", None) == "agent_1"
    ]

    agent3_words = [
        msg.content for msg in request.messages
        if isinstance(msg, AIMessage) and getattr(msg, "name", None) == "agent_3"
    ]

    agent4_words = [
        msg.content for msg in request.messages
        if isinstance(msg, HumanMessage) and getattr(msg, "name", None) == "agent_4"
    ]

    words = ", ".join(words) if words else "None yet"
    if round_c == "round_1":
        return f"""You are a player in an Imposter social deduction game.
                    Players' words so far: {words}
                    Your secret keyword is {content}: 

                    Rules:
                    - Answer in ONE word only.
                    - Directly describe what it is or how it is used.
                    - Do NOT repeat previous words from other players.
                    - Be subtle. Do not make it too obvious.
                    - In Burmese Language
                    """

    elif round_c in ["round_2", "round_3"]:
        return f"""
                Players' words so far: {words}
                Your keyword: {content}
                Think carefully:
                - Then give ONE new word.
                - Do NOT repeat any previous word.
                - In Burmese Language
                """

    elif round_c in ['guess_imposter']:
        return f"""
            Player_1's responses:
            {agent1_words}

            Player_3's responses:
            {agent3_words}

            Player_4's responses:
            {agent4_words}

            Based on these responses:
            - Guess who is the imposter (Player_1 or Player_3 or Player_4).
            - Return only the player name.
            """