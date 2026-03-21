from fastapi import FastAPI
import uvicorn 
from schema.schema import RevealWord
from models.model_work import GenerateModel
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os 


model = {}

@asynccontextmanager
async def start_lifespan(app: FastAPI):
    gen_model = GenerateModel(model_name="openai/gpt-4o-mini")
    model['GeneratingWordModel'] = gen_model
    yield 

    model.clear()

app = FastAPI(lifespan=start_lifespan)

origins = [
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generatewords", response_model=RevealWord)
def generate_single_word():
    word = model['GeneratingWordModel'].generating_word()
    return RevealWord(revealWordResponse=word)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)