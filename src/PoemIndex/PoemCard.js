import React from 'react';
import { useHistory } from 'react-router'

export function PoemCard(props){
    let history = useHistory()
    const { poem } = props
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{poem.name}</div>
                <button 
                onClick={() => 
                    history.push(`/show/${poem.id}`)
                }
                className="button ui green"
                >See Details</button>
            </div>
        </div>
    )
}



