import React, {Component} from 'react'
import ContentRouter from './Routers/ContentRouter'
import Navigation from './Navigation'

export default class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){

        //////////////////////////////////////////////
        //                                          //
        //         | Nav1 | Nav2 | Nav3 |           //
        //__________________________________________//
        //                                          //
        //                                          //
        //               Content                    //
        //                                          //
        //////////////////////////////////////////////


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