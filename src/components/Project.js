
import React from 'react'
import { Github2, LiveDemo } from '../icons/icons'
import '../css/project.css'

const Project = ({imageName, projectName, description, gitRepo, liveDemo}) => {

    return (
        <div className='projectBox'>
            <div className='projectImage'>
                <img src={require(`../images/${imageName}.png`)} alt="Project"/>
            </div>
            <div>
                <h2>{projectName}</h2>
                <p>{description}</p>
                <div>
                    <a href={gitRepo} target='_blank'>
                        <div>
                            <p>Code</p>
                            <Github2/>
                        </div>
                    </a>
                    <a href={liveDemo} target='_blank'>
                        <div>
                            <p>Live Demo</p>
                            <LiveDemo/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
