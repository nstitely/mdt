from pydantic import BaseModel
from typing import Optional

class MediaItem(BaseModel):
    id: int
    title: str
    type: str # book, movie, game, album, other
    status: str # in progress, complete, not started
    notes: Optional[str] = None # free-form text for reviews / thoughts
    rating: Optional[int] = None # 1-5, allowed to be blank if not finished 