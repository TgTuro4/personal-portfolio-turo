from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

# Configure CORS to allow your React app to make requests
origins = [
    "http://localhost:5173",  # Vite default port
    "http://localhost:3000",  # Create React App default port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

last_message = None  # variable to store the last message

# Test route
@app.get("/")
def read_root():
    return {"status": "Server is running"}

class Message(BaseModel):
    message: str

# this needs to work only when there is no message available.
@app.post("/api/message")
def post_message(message: Message):
    global last_message
    last_message = message
    return [{"message": "Message sent to Turo successfully!"}] 

@app.get("/api/message")
def get_message():
    global last_message
    # retrieve/handle message here
    return [{"message": last_message.message}] if last_message else [{"message": "No message available"}]

@app.put("/api/message")
def update_last_message(message: Message):
    global last_message
    # update/handle message here
    last_message = message
    return [{"message": "Message updated to Turo successfully! Changed last message to " + last_message.message}] if last_message else [{"message": "No message available to update"}]