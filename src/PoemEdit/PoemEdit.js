import React, { useState, useEffect } from 'react';
import { PoemForm } from './PoemForm'

export const PoemEdit = (props) => {

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

    return <PoemForm poem={poem} />
}