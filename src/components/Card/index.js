import React from 'react'
import { FiGlobe, FiGithub } from 'react-icons/fi'

import './styles.css'

const Card = (props) => {
    return (
        <article className="user-card">
            <header>
                {props.avatar_url 
                    ? <img src={props.avatar_url} alt={props.name} />
                    : <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" alt={props.name} />
                }
                <div>
                    {props.name 
                        ? <strong>{props.name}</strong>
                        : <strong>Nome: não informado</strong>
                    }
                    {props.location 
                        ? <p>{props.location}</p>
                        : <p>Localização: não informada</p> 
                    }
                </div>
            </header>

            <div className="user-card-container">
                <div className="user-card-content">
                    <FiGithub size={20} />
                    {props.login 
                        ? <p>{props.login}</p>
                        : <p>Login: não informado</p>
                    }
                </div>

                <div className="user-card-content">
                    <FiGlobe size={20} />
                    {props.blog 
                        ? <a href="h" target="_blank" rel="noopener noreferrer">{props.blog}</a>
                        : <p>Blog: não informado</p>   
                    }
                </div>

                <div className="user-card-content">
                    {props.bio 
                        ? <p className="bio">{props.bio}</p> 
                        : <p className="bio">Bio: não informada</p>   
                    }
                </div>
            </div>

            <footer>
                {props.html_url 
                    ? <a href={props.html_url} target="_blank" rel="noopener noreferrer"> Visualizar perfil</a>
                    : <a href="#disabled" disabled> Visualizar perfil</a>
                }
            </footer>

        </article>
    )
}

export default Card