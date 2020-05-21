import React, { useState } from 'react'
import { useHistory } from 'react-router'

export const PoemForm = (props) => {
    
    const { poem } = props

    let history = useHistory()

    const [formValues, setFormValues] = useState({
        name: poem.name,
        content: poem.content
    })

    let setName = e => setFormValues({ ...formValues, name: e.target.value })

    let setContent = e => setFormValues({ ...formValues, content: e.target.value })

    let handleSubmit = () => {
        fetch(`http://localhost:3000/poems/${poem.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
        .then(() => history.push(`/show/${poem.id}`))
    }

    return (
        <div>
            <div className="ui header">
                {formValues.name}
            </div>
            <div className="ui form content">
                <div className="field">
                    <label>Name: </label>
                    <textarea value={formValues.name} onChange={setName} />
                </div>
                <div className="field">
                    <label>Content: </label>
                    <textarea value={formValues.content} onChange={setContent} />
                </div>
            </div>
            <div className="actions">
                <button className="ui green button" onClick={handleSubmit}>Submit</button>
                <button 
                className="ui red button"
                onClick={() => history.push(`/show/${poem.id}`)}
                >Cancel</button>
            </div>
        </div>
    )
}