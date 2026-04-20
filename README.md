# Media Diet Tracker (MDT)

A simple full-stack implementation of a dashboard to keep track of the media (tv shows, movies, books, music, video games, etc) you consume (watch, read, other). Inspiration from reading Jason Kottke's media diet blog posts on https://kottke.org/

## Technology Used

Frontend: React, Vite, CSS
Backend: Python, FastAPI
Database: Local JSON file ('media_log.json')

Features:
* Sample list of media entries.
* Form for adding new entries.
* New entries will be saved to the local JSON file

## How to Run (locally)

### Prerequisites

Python 3.13.5
Node.js v24.15.0


### Running the Project

#### 1. Clone the Repository 
Open your terminal and clone the repository by running `git clone https://github.com/nstitely/mdt.git`

#### 2. Start the Backend

Open a terminal and navigate to the backend directory - `backend`

##### On Windows:

1. Run `py -m venv .venv` in your terminal to create a virtual environment
2. Run `.\.venv\Scripts\activate` to start your virtual environment
3. Run `pip install -r requirements.txt` to install project dependencies
4. Run `uvicorn main:app --reload` to start the FastAPI server

##### On Mac / Linux:

1. Run `python3 -m venv .venv` in your terminal to create a virtual environment
2. Run `source .venv/bin/activate` to start your virtual environment
3. Run `pip install -r requirements.txt` to install backend dependencies
4. Run `uvicorn main:app --reload` to start the FastAPI server

#### 3. Start the Frontend

Open a second terminal and navigate to the frontend directory - `frontend`

1. Run `npm install` to install frontend dependencies 
2. Run `npm run dev` to start the application

Navigate to the local host URL displayed in your frontend terminal. You should see a media tracking dashboard with a form at the top page to add new entries and a running list of entries below it.
