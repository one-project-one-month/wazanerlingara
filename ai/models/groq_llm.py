from langchain_groq import ChatGroq
from dotenv import load_dotenv 

load_dotenv()

def get_model():
    model = ChatGroq(
        model="openai/gpt-oss-120b",
        reasoning_format="hidden"
    )
    return model 

#if __name__ == "__main__":
#    model = get_model()
#    result = model.invoke("Hi")
#    print(result)