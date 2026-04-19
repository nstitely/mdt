import {useState, useEffect} from 'react'

function App(){
  // 1. setup a 'state' to hold our data once it arrives from python
  const [mediaItems, setMediaItems] = useState([])

  // 2. the fetch request: this runs once when the page loads
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/media')
    .then(response => response.json())
    .then(data => {
      console.log("Data received from Python:", data)
      setMediaItems(data) // save the data to our state
    })
    .catch(error => console.error("Error fetching data:", error))
  }, [])

  // 3. the HTML (JSX) that actually gets rendered to the screen
  return (
    <div>
      <h1>Media Tracking Dashboard</h1>

      {/*data entry form layout*/}
      <div style={{ marginBottom: '40px', padding: '20px', borderTop: '2px solid #333', borderBottom: '2px solid #333'}}>
        <h2>Log New Media</h2>
        <form>
          <div style={{ marginBottom: '10px'}}>
            <label>Title: </label>
            <input type="text" name="title" required />
          </div>
          <div style={{ marginBottom: '10px'}}>
            <label>Type: </label>
            <input type="text" name="type" placeholder="book, video game (pc), etc." required />
          </div>
          <div style={{ marginBottom: '10px'}}>
            <label>Status: </label>
            <input type="text" name="status" placeholder="finished, in progress, not started..." required />
          </div>
          <div style={{ marginBottom: '10px'}}>
            <label style={{ display: 'block'}}>Notes: </label>
            <textarea name="notes" rows="4" style={{ width: '100%', maxWidth: '400px'}} ></textarea>
          </div>
          <button type="submit">Save Entry</button>
        </form>
      </div>

      {/* display fetched (saved) media list */}
      <ul>
        {mediaItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '20px'}}>
            <strong>{item.title}</strong> - {item.type}
            <br />
            <em>Status: {item.status}</em>
            <br />
            Notes: {item.notes}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
