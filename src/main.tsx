import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import PortfolioCard from './components/PortfolioCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <h1>Turo's Portfolio</h1>
    <div className="portfolio-bar">
      <PortfolioCard title="Project 1" description="Description for Project 1" imageUrl="/path/to/image1.jpg" />
      <PortfolioCard title="Project 2" description="Description for Project 2" imageUrl="/path/to/image2.jpg" />
    </div>
  </StrictMode>,
)
