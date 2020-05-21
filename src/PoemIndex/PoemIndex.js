import React, { useState, useEffect } from 'react';
import { PoemCard } from './PoemCard';
import { useHistory } from 'react-router'

export function PoemIndex(){
    let [ poems, setPoem ] = useState([])
    let history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:3000/poems`)
            .then( res => res.json())
            .then( poems => setPoem(poems) )
    }, [])

    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
            {poems.map( poem => (
                <PoemCard
                    key={poem.id}
                    poem={poem}
                />
            ))}
            <button 
            onClick={() => history.push('/new')}
            className="ui button green"
            >Add New Poem</button>
        </div>
    )
}