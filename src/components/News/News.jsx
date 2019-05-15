import React, {Component} from 'react'
import Classes from './News.module.css'

class News extends Component {
    render() {
        return (
            <div>
                <div className={Classes.item}>News</div>
            </div>
        )
    }
}

export default News