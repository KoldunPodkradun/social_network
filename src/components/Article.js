import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {articles} = this.props;
        const btn_close = <div className={'btn_close'} onClick={this.closeArticle}>{this.state.isOpen ? 'close' : 'open'}</div>;
        const title = <h1>{articles.title}{btn_close}</h1>;
        const txt = this.state.isOpen && <p>{articles.txt}</p>;
        return (
            <div>
                {title}
                {txt}
            </div>
        )
    }

    closeArticle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article