import profileTuro from '../assets/profileTuro.png'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [unlocked, toggleLocked] = useState(false)
    const [seconds, setSeconds] = useState(0)
    function handleLockClick() {
        toggleLocked(!unlocked)
    }

    useEffect(() => {
        const interval = setInterval(() => { //TODO understand the setInterval function
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a><img src={profileTuro} alt="Profile" style={{ width: '20px', height: 'auto' }} /></a>
                <a>About Turo</a>
                <a>Tech Stack</a>
                <a>Projects</a>
                <a>Contact</a>
                <a>Interests</a>
                <a>Coursework</a>
                <a>Resume</a>
                <a>Recommendations</a>
                <span onClick={handleLockClick}>Click here</span>
                <span>{unlocked ? 'Unlocked' : 'Locked'}</span>
                <span>You have been here for {seconds} seconds</span>
            </div>
        </nav>
    )
}
