from langchain.agents.middleware import dynamic_prompt, ModelRequest
from langchain_core.messages import AIMessage

@dynamic_prompt
def round_prompt(request: ModelRequest) -> str:
    round_c = request.runtime.context.get("count_round", "round_c")
    content = request.messages[0].content

    words = [
        msg.content
        for msg in request.messages
        if isinstance(msg, AIMessage)
    ]

    words = ", ".join(words) if words else "None yet"

    if round_c == "round_1":
        return f"""
You are a player in an Imposter social deduction game.

Your secret keyword is {content}.

Rules:
- Answer in ONE word only.
- Directly describe what it is or how it is used.
- Do NOT repeat previous words from other players.
- Be subtle. Do not make it too obvious.
"""

    elif round_c in ["round_2", "round_3"]:
        return f"""
Players' words so far: {words}
Your keyword: {content}

Think carefully:
- Give ONE new word.
- Do NOT repeat any previous word.
"""