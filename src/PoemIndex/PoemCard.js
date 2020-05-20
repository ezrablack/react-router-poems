import React from 'react';

export function PoemCard(props){
    const { poem } = props
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{poem.name}</div>
                <button className="button ui green">See Details</button>
            </div>
        </div>
    )
}