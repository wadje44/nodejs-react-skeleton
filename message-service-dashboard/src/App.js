import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Messages from './components/ListMessage'
import AddMessage from './components/AddMessage'
import Popup from "./components/Popup";


const baseUrl = process.env.API_URL ? process.env.API_URL : 'http://localhost:3003';

const App = () => {
  const [showAddMessage, setShowAddMessage] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getMessages = async () => {
      const messagesFromServer = await fetchMessages()
      setMessages(messagesFromServer)
    }

    getMessages().then(r => console.log("Fetched all messages on component load!"))
  }, [])

  // Fetch Messages
  const fetchMessages = async () => {
    const res = await fetch(`${baseUrl}/palindrome`)
    const data = await res.json()

    return data.items
  }

  // Fetch Message
  const fetchMessage = async (id) => {
    const res = await fetch(`${baseUrl}/palindrome/${id}`)
    const data = await res.json()
    return data
  }

  // Add Message
  const addMessage = async (message) => {
    const res = await fetch(`${baseUrl}/palindrome`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(message),
    })

    const data = await res.json()

    setMessages([...messages, data])
  }

  // Delete Message
  const deleteMessage = async (id) => {
    const res = await fetch(`${baseUrl}/palindrome/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setMessages(messages.filter((message) => message.id !== id))
      : alert('Error Deleting This Message')
  }

  // Check if Palindrome Message
  const checkIfPalindrome = async (id) => {
    const res = await fetch(`${baseUrl}/palindrome/check/${id}`, {
      method: 'GET',
    });
    
    if(res.status === 200) {
      return (await res.json()).isPalindrome;
    } else {
      alert('Error fetching palindrome status!');
    }
  }

  const showIfPalindrome = async (id) => {
    const checkMessage = messages.filter((message) => message.id === id)[0];
    const isPalindrome = await checkIfPalindrome(checkMessage.id);
    if(isPalindrome) {
      alert(`${checkMessage.message} is Palindrome`);
    } else {
      alert(`${checkMessage.message} is not Palindrome`);
    }
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddMessage(!showAddMessage)}
          showAdd={showAddMessage}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddMessage && <AddMessage onAdd={addMessage} />}
                {messages.length > 0 ? (
                  <Messages
                    messages={messages}
                    onDelete={deleteMessage}
                    showInfo={showIfPalindrome}
                  />
                ) : (
                  'No Messages To Show'
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
