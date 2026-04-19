from fastapi import FastAPI

# initialize the app
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "MDT Backend is alive."}
