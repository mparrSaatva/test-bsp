import React, { Component } from 'react' 
import './scss/styles.scss'
import HelloWorld from './components/HelloWorld'


class App extends Component {
    render() {
        const helloMessage = 'Developers... this is aligned left!'

        return (
            <div className="App">
                <header>
                    <p>All of the patterns, coming soon!</p>
                </header>

                <HelloWorld cssClass="u-textLeft" message={helloMessage} />

            </div>
        )
    }
}



export default App
