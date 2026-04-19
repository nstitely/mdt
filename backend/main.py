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

@app.post("/api/media", response_model=List[MediaItem])
def add_media(item: MediaItem):
    """accept incoming json data, append it to the database, and save the file"""
    # 1. read existing data
    with open("media_log.json", "r") as file:
        data = json.load(file)

    # 2. append the new item 
    data.append(item.model_dump())

    # 3. write the updated list back to the file
    with open("media_log.json", "w") as file:
        json.dump(data, file, indent=4)

    return data
