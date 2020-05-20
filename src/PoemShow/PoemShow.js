import React, { useState, useEffect } from 'react';

export function PoemShow(){
    let [ poem, setPoem ] = useState(null)

    let selectedPoemId = 1 // How can we get this from params instead of hard coding?

    useEffect(() => {
        fetch(`http://localhost:3000/poems/${selectedPoemId}`)
            .then( res => res.json())
            .then( poem => setPoem(poem) )
    }, [])

    if(poem === null){
        return <h1>Loading Poem...</h1>
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/poems/${selectedPoemId}`, {
            method: "DELETE"
        })
            .then( () => {
                // How could we send the user to the PoemIndex page?
            })
    }

    return (
        <div className="ui card fluid">
            <div className="content">
                <div className="header">{poem.name}</div>
            </div>
            <div className="content">
                {poem.content}
            </div>
            <div className="content">
                <button className="ui red button" onClick={handleDelete}>Delete</button>
                <button className="ui green button">Edit</button>
            </div>
        </div>
    )
}