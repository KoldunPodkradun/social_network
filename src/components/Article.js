import React, {Component} from 'react'

class Article extends Component {
    constructor(props){

    }

    render() {
        const {articles} = this.props;
        const btn_close = <div className={'btn_close'} onClick={closeArticle}>Close</div>;
        const title = <h1>{articles.title}{btn_close}</h1>;
        const txt = <p>{articles.txt}</p>;
        return (
            <div>
                {title}
                {txt}
            </div>
        )
    }
}

function closeArticle() {
    console.log('click');
}

export default Article