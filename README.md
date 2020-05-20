# React Poems II: The Router & Hooks Strike Back

_Because Melike prefers to read poems one at a time_ <br/><br/>
_And Aidan's Meme Shall Not Deter Me_


### Setup
* Run `npm install`
* Run `json-server --watch db.json`
* In a new terminal, run `npm start`

### Discussion
Discuss these questions with your table

#### PoemIndex
* In App.js, uncomment line 10
* What do you see?
* In what component are these poem cards being rendered?
* How does PoemIndex get the poems array from the server?
* How does it keep the `poems` in state?
* When does it send the fetch request?
* Comment out line 10

#### PoemShow
* In App.js, uncomment line 11
* How does PoemShow get the poem object from the server?
* How does it keep the `poem` object in state?
* When does it send the fetch request?
* Comment out line 11

#### PoemNew
* In App.js, uncomment line 12
* How does PoemNew keep the `formValues` in state?
* When does it send the fetch request?
* Fill out the form and click submit
* Comment out line 12
* Uncomment line 10
* Was the poem added?
* Comment out line 10

#### PoemEdit
* In App.js, uncomment line 13
* How is PoemEdit similar to PoemNew and PoemShow?
* How is it different?
* Change the poem name and content and click submit
* Comment out line 13
* Uncomment line 11
* Was the poem edited?


### Deliverables
Complete these solo (feel free to reach out to other for help, but this should not be a full-on group activity)

To complete these deliverables, you will need to install React Router by running `npm install react-router react-router-dom` 

> Use the React Router lecture (linked in learn.co) and React Router's documentation (https://reacttraining.com/react-router/web/guides/quick-start) as a guide to add routing to tie these pages together.

> You will need to define `Route`'s in App, and then use `useParams` and `history.push` where applicable to connect each of the App's components to those `Route`s.

#### PoemIndex
* When a user clicks on "Create New Poem", they should be redirected to the PoemNew component
* When a user clicks on the "See Details" button of a specific poem, they should be routed to the PoemShow component, which should show the details for the specific poem clicked
> Hint: you will need to use a param in the route to accomplish this

#### PoemNew
* After the fetch request to make a new poem, the user should be redirected to the PoemIndex component

#### PoemShow
* When a user clicks on the "Edit" button, they should be routed to the PoemEdit component, which should allow the user to edit the specific poem clicked
> Hint: you will need to use a param in the route to accomplish this
* After the fetch request to delete the poem, the user should be redirected to the PoemIndex component


#### PoemEdit
* After the fetch request to update the poem, the user should be redirected to the PoemShow component, which should show the details for the specific poem clicked
> Hint: you will need to use a param in the route to accomplish this