import React, {Component} from 'react'
import Test from '../components/test'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12"><Test/></div>
                </div>
            </div>
        )
    }
}

export default App