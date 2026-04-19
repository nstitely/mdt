import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from models import MediaItem

# initialize the app
app = FastAPI()

# configure CORS for local frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/media", response_model=List[MediaItem])
def get_media():
    """Retrieve all media items from the JSON data store."""
    with open("media_log.json", "r") as file:
        data = json.load(file)
    return data
