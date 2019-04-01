import React from 'react'
import Article_List from './Article_List'
import articles from '../content'
import 'bootstrap/dist/css/bootstrap.css'
function App(){

    return(
        <div className="container">
            <Article_List articles = {articles}/>
        </div>
    )
}

export default App