import React, { useState, useEffect } from 'react';
import { PoemForm } from './PoemForm'
import { useParams, useHistory} from 'react-router'

export const PoemEdit = (props) => {

    let [ poem, setPoem ] = useState(null)

    let history = useHistory()

    let params = useParams()
    let selectedPoemId = params.id // How can we get this from params instead of hard coding?

    useEffect(() => {
        fetch(`http://localhost:3000/poems/${selectedPoemId}`)
            .then( res => res.json())
            .then( poem => setPoem(poem) )
            
    }, ()=>history.push(`/show/${selectedPoemId}`))

    if(poem === null){
        return <h1>Loading Poem...</h1>
    }

    return <PoemForm poem={poem} />
}