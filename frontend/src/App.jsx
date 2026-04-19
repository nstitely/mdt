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
      {/* loop through our data and print a list item for each one */}
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
