import React from 'react'
import { FiArrowRight, FiGlobe, FiGithub } from 'react-icons/fi'

import './styles.css'

const Card = (props) => {
    return (
        <article className="user-card">
            <header>
                <img src={props.avatar_url} alt={props.name} />
                <div>
                    <strong>{props.name}</strong>
                    <p>{props.location}</p>
                </div>
            </header>

            <div className="user-card-container">
                <div className="user-card-content">
                    <FiGithub size={20} />
                    <p>{props.login}</p>
                </div>

                <div className="user-card-content">
                    <FiGlobe size={20} />
                    <a
                        href="h"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.blog}
                </a>
                </div>

                <div className="user-card-content">
                    <p className="bio">
                        {props.bio}
                    </p>
                </div>
            </div>

            <footer>
                <a
                    href={props.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visualizar perfil
                </a>
            </footer>

        </article>
    )
}

export default Card