import React from 'react'

const UserCard = props => {
    return (
        <>
            {props.data.map(user => (
                <div key={user.id} className="card">
                    <div className="card-info">

                        <p className="username">Name: {user.name}</p>
                        <p>Country: {user.country}</p>
                        <p>Searches: {user.searches}</p>
                    </div>
                </div>

            ))}
        </>
    )
}

export default UserCard;
