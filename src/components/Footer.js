import React from 'react'
import { Location, Email, Phone, LinkedIn, Github, Instagram } from '../icons/icons'
import '../css/footer.css'


const Footer = () => {
    return (
        <footer>
            <div className='contactContainer' id='contact'>
                <h2>Contact</h2>
                <h3>Don't be shy! Hit me up! 👇</h3>
                <div>
                    <div>
                        <div>
                            <Location height={"2rem"}/>
                        </div>
                        <div>
                            <p>Location</p>
                            <p>Sale, Morocco</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Email height={"2rem"}/>
                        </div>
                        <div>
                            <p>Mail</p>
                            <p><a href="mailto:walidamkor@gmail.com" target='_blank'>walidamkor@gmail.com</a></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Phone height={"2rem"}/>
                        </div>
                        <div>
                            <p>Whatsapp</p>
                            <p><a href="https://wa.me/212682813146" target='_blank'>+212682813146</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyrightSection'>
                <p>Copyright &copy; 2023. All rights are reserved</p>
            </div>
        </footer>
    )
}

export default Footer