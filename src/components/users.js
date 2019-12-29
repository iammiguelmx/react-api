import React from 'react'

const Users = ( {users }) => {
    return (
        <div>
            <center><h1>Repos List Github ✨</h1></center>
            {users.map((user) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{user.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{user.description}</h6>
                        <p class="card-text">{user.html_url}</p>
                        <p class="card-text">{user.created_at}</p>
                        <p class="card-text">{user.updated_at}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Users