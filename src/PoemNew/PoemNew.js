import React, { useState } from 'react';
import { useHistory } from 'react-router';

export const PoemNew = function () {

    let [formValues, setState] = useState({
        name: '',
        content: ''
    })

    let history = useHistory()

    let setName = e => setState({ ...formValues, name: e.target.value })

    let setContent = e => setState({ ...formValues, content: e.target.value })

    let handleSubmit = () => {
        fetch('http://localhost:3000/poems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
        .then(()=> history.push('/index'))
    }

    return (
        <div className="ui form">
            <h1>Create Poem</h1>
            <div className="field">
                <label>Name:</label>
                <input type="text" value={formValues.name} onChange={setName} />
            </div>
            <div className="field">
                <label>Content:</label>
                <textarea value={formValues.content} onChange={setContent} />
            </div>
            <button className="ui green button" onClick={handleSubmit} >Create</button>
            <button className="ui red button" onClick={() => history.push('/index')}>Cancel</button>
        </div>
    )
}