# AI Component - Multi-Agent Interaction

A multi-agent interaction system powered by LangChain, designed for a social deduction game. It features multiple AI agents and a human player interacting within a shared memory space.

## Features
- **Multi-Agent Architecture**: Includes Agent 1, Agent 2, and an Imposter Agent.
- **Shared Memory**: Persistent state management using PostgreSQL and LangChain.
- **Role-Based Prompts**: Dynamic prompts based on the game round.
- **FastAPI Backend**: RESTful APIs using FastAPI for interaction and control.

## API Endpoints

### Agent Interaction (`agent_api.py`)

#### **AI Agents** (`POST /agent_1`, `POST /agent_2`, `POST /agent_3`)
Interact with Agent 1, Agent 2, or the Imposter Agent.
- **Request Body**:
  ```json
  {
    "content": "your clue or message here",
    "count_round": "round_1"
  }
  ```
- **Round Options**: The `count_round` must be one of:
  - `"round_1"`
  - `"round_2"`
  - `"round_3"`
  - `"guess_imposter"`

- **Response Body**:
  ```json
  {
    "agent_1": "your response here"
  }
  ```
  *(Similarly for `agent_2` and `agent_3`)*

#### **Human Player** (`POST /human_player`)
Record a message from the human player into the shared game thread.
- **Request Body**:
  ```json
  {
    "content": "your clue or message here"
  }
  ```

#### **Utilities**
- `GET /history_thread`: Fetch full thread history.
- `GET /imposter_guess`: Calculate majority vote for the imposter based on the last round.
- `GET /clear_db`: Reset the shared memory thread for a new game.

## How To Run

The system consists of two separate FastAPI services: a word generator and an agent interaction API.

### 1. Prerequisites
- Python 3.11+
- A running PostgreSQL instance
- API keys for Groq (and optionally LangSmith)

### 2. Environment Setup
Create a `.env` file from the example:
```bash
cp .env.example .env
```
Fill in your `DB_URI` (e.g., `postgresql://user:pass@localhost:5432/dbname`) and `GROQ_API_KEY`.

### 3. Install Dependencies
```bash
pip install -r requirements.txt
# or using uv
uv sync
```

### 4. Running the Services

#### **Word Generation Service** (`main.py`)
This service generates the secret words for the game.
```bash
uv run uvicorn main:app --reload --port 8000
```
- **Port**: 8000
- **URL**: `http://localhost:8000`
- **Interactive Docs**: `http://localhost:8001/docs`

#### **Agent Interaction API** (`agent_api.py`)
This is the core service that manages AI agents and game state.
```bash
uv run uvicorn agent_api:app --reload --port 8001
```
- **Port**: 8001
- **URL**: `http://localhost:8001`
- **Interactive Docs**: `http://localhost:8001/docs`
---
