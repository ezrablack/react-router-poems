import React, { useState, useEffect } from 'react';
import { PoemCard } from './PoemCard';

export function PoemIndex(){
    let [ poems, setPoem ] = useState([])

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
            <button className="ui button green">Add New Poem</button>
        </div>
    )
}