import React from 'react'
import '../css/about.css'

const About = () => {
    return (
        <div className='aboutContainer' id='about'>
            <div className='about_pic'>
                <div>
                    <img src={require('../images/profile.jpg')} alt="Profile"/>
                </div>
            </div>
            <div className='about_info'>
                <div>
                    <h2>About Me</h2>
                    <p>I am Walid Amkor, a Junior React Developer. Proficient in HTML, CSS, JavaScript, and React.js. I am enthusiastic about creating user-friendly interfaces and enhancing web experiences. A collaborative team player with a focus on continuous learning and delivering quality solutions. I am eager to contribute my skills to meaningful projects and further develop in the front-end development field.</p>
                    <h3>Tech Stack</h3>
                    <div className='skillsTeck'>
                        <div>
                            <img src={require('../icons/html.png')} alt="HTML"/>
                        </div>
                        <div>
                            <img src={require('../icons/css.png')} alt="CSS"/>
                        </div>
                        <div>
                            <img src={require('../icons/js.png')} alt="JavaScript"/>
                        </div>
                        <div>
                            <img src={require('../icons/reactjs.png')} alt="React"/>
                        </div>
                        <div>
                            <img src={require('../icons/sass.png')} alt="Sass"/>
                        </div>
                        <div>
                            <img src={require('../icons/bootstrap.png')} alt="Bootstrap"/>
                        </div>
                        <div>
                            <img src={require('../icons/tailwindcss.png')} alt="TailwindCss"/>
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default About
