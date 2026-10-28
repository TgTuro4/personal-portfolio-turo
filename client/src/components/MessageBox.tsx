import { useState } from 'react'

export default function MessageBox() {
    const [message, setMessage] = useState("No message Input Yet");
    const [fetchedMessage, setFetchedMessage] = useState("No message fetched yet");

    async function fetchMessage() {
        try {
            const response = await fetch('http://localhost:8000/api/message');
            const data = await response.json();
            setFetchedMessage(`Fetched message: ${JSON.stringify(data)}`);
        } catch (error) {
            setFetchedMessage(`Error fetching message: ${error}`);
        }
    }

    // need to change so function is parameterless, message change is already handled by input tag onChange event
    async function sendMessage(message: string) { 
        try {
            const response = await fetch('http://localhost:8000/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            setMessage(`Sent message: ${JSON.stringify(data)}`);
        } catch (error) {
            setMessage(`Error sending message: ${error}`);
        }
    }

    async function changeMessage() {
        try {
            const response = await fetch('http://localhost:8000/api/message', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            setFetchedMessage(`Changed message: ${JSON.stringify(data)}`);
        } catch (error) {
            setFetchedMessage(`Error changing message: ${error}`);
        }
    }

    return (
        <div className="message-box">
            <div>Message Input: {message}</div>
            <div>Fetched Message: {fetchedMessage}</div>
            <input 
                type="text" 
                placeholder="Enter a message..." 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <div>
                <button onClick={fetchMessage}>Fetch Message</button>
            </div>
            <div>
                <button onClick={() => sendMessage(message)}>Send Message</button>
            </div>
            <div>
                <button onClick={changeMessage}>Change Message</button>
            </div>
        </div>
    )
}