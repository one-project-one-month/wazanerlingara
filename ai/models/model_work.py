import os
from dotenv import load_dotenv
from openai import OpenAI
from langsmith import Client 
from langsmith.run_helpers import traceable
from langsmith.wrappers import wrap_openai

class GenerateModel:
    """
    Attributes:
    model_name (str): The name of the LLM model.
    client (OpenAI): OpenAI-compatible client configured for OpenRouter.
    prompt_template (str): Prompt used to instruct the model.
    """
    def __init__(self, model_name: str):

        """
        Initialize the GenerateModel instance.

        Args:
            model_name (str): The model identifier (e.g., "openai/gpt-4o-mini").

        Raises:
            ValueError: If OPENROUTER_API_KEY is not found in environment variables.
        """

        load_dotenv()
        
        api_key = os.getenv("OPENROUTER_API_KEY")
        if not api_key:
            raise ValueError("OPENROUTER_API_KEY not found in environment variables")

        self.client = wrap_openai(OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=api_key,
        ))

        self.model_name = model_name

        self.prompt_template = (
            "Generate one everyday Burmese word suitable for an imposter game.\n"
            "The word must be:\n"
            "- A single word in Burmese\n"
            "- An object, place, animal, or food\n"
            "- Not abstract\n"
            "Output only the word.\n"
            "No explanation."
        )
    
    @traceable(name="Generate Burmese Word")
    def generating_word(self, temperature: float = 0.9) -> str:
        """
        Generate a Burmese word for the imposter game.

        Args:
            temperature (float, optional): Controls randomness of output.
                                           Higher values increase diversity.
                                           Default is 0.9.

        Returns:
            str: A single Burmese word.
        """
        try:
            completion = self.client.chat.completions.create(
                model=self.model_name,
                messages=[
                    {"role": "user", "content": self.prompt_template}
                ],
                temperature=temperature,
            )

            return completion.choices[0].message.content.strip()

        except Exception as e:
            raise RuntimeError(f"Word generation failed: {e}")
