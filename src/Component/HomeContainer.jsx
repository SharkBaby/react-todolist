import React, {Component} from 'react'
import ContentRouter from './Routers/ContentRouter'
import Navigation from './Navigation'

export default class HomeContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){

        //////////////////////////////////////////////
        //                                          //
        //         | Nav1 | Nav2 | <-- <Navation/>  //
        //__________________________________________//
        //                                          //
        //                                          //
        //             Content  <--<ContentRoutet/> //
        //                                          //
        //////////////////////////////////////////////


        return (
            <div>
                <header className="home-header">
                    <Navigation />
                </header>
                <main className="home-content">
                    <ContentRouter />
                </main>
            </div>
        )
    }
}