import profileTuro from '../assets/profileTuro.png'

export default function Navbar() {
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
            </div>
        </nav>
    )
}
