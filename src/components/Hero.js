import React from 'react'
import { LinkedIn, Github, Instagram } from '../icons/icons'
import '../css/hero.css'

const Hero = () => {
    return (
        <main id='home'>
            <div>
                <div className='profile_info' >
                    <h1>Front-End React <br/>Developer 👋</h1>
                    <p>Hi, I'm Walid Amkor. A passionate Front-end React<br/>Developer based in Sale, Morocco 📍</p>
                    <div>
                        <a target='_blank' href="https://www.linkedin.com/in/walid-amkor-474697285"><LinkedIn height={"2rem"}/></a>
                        <a target='_blank' href="https://github.com/WalidAmk"><Github height={"2rem"}/></a>
                    </div>
                </div>
                <div className='profile_pic' >
                    <div>
                        <div>
                            <img src={require('../images/profile.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero