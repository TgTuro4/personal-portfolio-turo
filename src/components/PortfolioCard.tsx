export default function PortfolioCard({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
    return (
        <span className="portfolio-card">
            <img src={imageUrl} alt={title} className="portfolio-card-image" />
            <h3 className="portfolio-card-title">{title}</h3>
            <p className="portfolio-card-description">{description}</p>
        </span>
    )
}