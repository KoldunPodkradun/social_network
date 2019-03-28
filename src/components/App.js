import React from 'react'
import Article from './Article'
import articles from '../content'

function App(){

    return(
        <div>
            <Article articles={articles[0]}/>
        </div>
    )
}

export default App