import React from 'react'
import '../css/portfolio.css'
import Project from './Project'

const Portfolio = () => {
    return (
        <div className='portfolioContainer' id='portfolio'>
            <h2>Portfolio</h2>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className='projectsContainer'>
                <Project 
                    imageName = 'technico'
                    projectName = 'Technico'
                    description = "Technico is a visually stunning and modern landing page for a creative agency or digital marketing firm. With captivating graphics and a clean layout, it effectively showcases the agency's services and expertise while encouraging user engagement."
                    gitRepo = 'https://github.com/WalidAmk/agency-landing-page-v2'
                    liveDemo = "https://agency-landing-page-v2.vercel.app"
                />
                <Project 
                    imageName = 'tech'
                    projectName = 'Techna'
                    description = "Techna is a stylish and modern landing page for an agency. It captivates visitors with its visually appealing design, concise content, and easy navigation, effectively presenting the agency's services and professionalism to potential clients."
                    gitRepo = 'https://github.com/WalidAmk/IT-adency-landing-page'
                    liveDemo = "https://agency-landing-page-two.vercel.app/"
                />
                <Project 
                    imageName = 'construction'
                    projectName = 'Builda'
                    description = "Builda is a sleek and informative landing page for a construction company. With rich visuals, clear content, and smooth navigation, it showcases their expertise in residential and commercial projects, leaving a strong impression on visitors."
                    gitRepo = 'https://github.com/WalidAmk/construction-landing-page'
                    liveDemo = "https://construction-landing-page-ten.vercel.app/"
                />
            </div>
        </div>
    )
}

export default Portfolio