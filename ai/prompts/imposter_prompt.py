from langchain.agents.middleware import dynamic_prompt, ModelRequest
from langchain_core.messages import AIMessage,HumanMessage

@dynamic_prompt
def round_imposter_agent_prompt(request: ModelRequest) -> str:
    round_c = request.runtime.context.get("count_round", "round_c")
    
    words = [
        msg.content
        for msg in request.messages
        if isinstance(msg, AIMessage)
    ]
    
    agent1_words = [
        msg.content for msg in request.messages
        if isinstance(msg, AIMessage) and getattr(msg, "name", None) == "agent_1"
    ]

    agent2_words = [
        msg.content for msg in request.messages
        if isinstance(msg, AIMessage) and getattr(msg, "name", None) == "agent_2"
    ]

    agent4_words = [
        msg.content for msg in request.messages
        if isinstance(msg, HumanMessage) and getattr(msg, "name", None) == "agent_4"
    ]

    words = ", ".join(words) if words else "None yet"
    
    if round_c == "round_1":
        return f"""You are an Imposter in a social deduction game.
            Players' words so far: {words}

            You DO NOT know the secret word.

            Rules:
            - Carefully analyze other players' responses.
            - Give ONE word only.
            - Describe what it is or how it is used
            - Do NOT repeat previous words.
            - Blend in naturally.
            - Try to guess what the keyword might be.
            """

    elif round_c in ["round_2", "round_3"]:
        return f"""
        Players' words so far:
        {words}

        You are the Imposter.
        Instructions:
        - Carefully analyze all previous clues given by other players.
        - Try to infer what the secret word might be.
        - Even if you think you know the secret word, DO NOT say the word directly.
        - Instead, give a natural clue related to the word so you blend in with the other players.
        - Your clue should be vague enough to avoid suspicion.
        - Do NOT repeat any previous words.
        - Respond with ONE word only.

        Strategy:
        - If you are unsure about the word, give a broad or safe word that could relate to many possibilities.
        - If you think you know the word, give a subtle related clue instead of revealing it.
                """

    elif round_c in ['guess_imposter']:
        return f"""
            Player_1's responses:
            {agent1_words}

            Player_2's responses:
            {agent2_words}

            Player_4's responses:
            {agent4_words}

            Based on these responses:
            - Guess who is the imposter (Player_1 or Player_3 or Player_4).
            - Return only the player name.
            """