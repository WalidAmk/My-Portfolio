
import { Menu, Close } from '../icons/icons'
import { useState } from 'react'
import '../css/navbar.css'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <nav>
            <div>
                <h3>Walid.dev</h3>
                <div className='navlinks'>
                    <div
                        className={activeMenu ? 'active' : 'deactive'}
                    >
                        <a onClick={() => setActiveMenu(!activeMenu)} href='#home'>Home</a>
                        <a onClick={() => setActiveMenu(!activeMenu)} href='#about'>About</a>
                        <a onClick={() => setActiveMenu(!activeMenu)} href='#portfolio'>Projects</a>
                        <a onClick={() => setActiveMenu(!activeMenu)} href='#contact'>Contact</a>
                    </div>
                    <div
                        className='menuBtn'
                        onClick={() => setActiveMenu(!activeMenu)}
                    >
                        {activeMenu ? <Close height={'1.5rem'}/> : <Menu height={'1.5rem'}/>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

