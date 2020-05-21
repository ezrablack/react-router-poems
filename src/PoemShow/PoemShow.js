import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router'

export function PoemShow(){
    let [ poem, setPoem ] = useState(null) //this sets the state of 'poem to null
    let history = useHistory()

    let params = useParams()
    let selectedPoemId = params.id// How can we get this from params instead of hard coding?

    useEffect(() => {
        fetch(`http://localhost:3000/poems/${selectedPoemId}`)
            .then( res => res.json())
            .then( poem => setPoem(poem) )
    }, [selectedPoemId])

    if(poem === null){
        return <h1>Loading Poem...</h1>
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/poems/${selectedPoemId}`, {
            method: "DELETE"
        })
            .then( () => {
                history.push('/index')// How could we send the user to the PoemIndex page?
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
                <button 
                onClick={() => history.push(`/edit/${params.id}`)}
                className="ui green button"
                >Edit</button>
                <button 
                onClick={() => history.push('/index')}
                className='ui green button'
                >Home</button>
            </div>
        </div>
    )
}