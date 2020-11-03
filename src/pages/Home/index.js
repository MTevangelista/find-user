import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

import './styles.css'

const Home = () => {
    const [user, setUser] = useState('')

    function clearInput() {
        document.getElementById('input-username').value='';
    }

    async function searchUser(event) {
        event.preventDefault()

       axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            setUser(response.data)
            clearInput()
        })
        .catch(() => {
            clearInput()
            Swal.fire({
                icon: 'info',
                title: 'Usuário não encontrado!',
                showConfirmButton: false,
                timer: 1700
            })
        })
    }

    return (
        <div id="page-home">
            <Navbar description="Usuários encontrados" />
            <form className="search-users" onSubmit={searchUser}>
                <input
                    id="input-username"
                    type="text"
                    required
                    placeholder="Buscar usuário por username"
                    name={user}
                    value={user}
                    onChange={event => setUser(event.target.value)}
                />
                <button type="submit">
                    Buscar
                </button>
            </form>

            <main>
                <Card
                    key={user.id}
                    avatar_url={user.avatar_url}
                    name={user.name}
                    location={user.location}
                    login={user.login}
                    blog={user.blog}
                    bio={user.bio}
                    html_url={user.html_url}
                />
            </main>
        </div>
    )
}

export default Home