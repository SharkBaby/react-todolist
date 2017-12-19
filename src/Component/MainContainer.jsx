import React, {Component} from 'react'
import ContentRouter from './Routers/ContentRouter'
import Navigation from './Navigation'

export default class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            <header id="home-header">
                <Navigation />
            </header>
            <main id="home-content">
                <ContentRouter />
            </main>
            </div>
        )
    }
}