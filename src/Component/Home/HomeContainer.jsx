import React, {Component} from 'react'
import ContentRouter from './ContentRouter'
import Navigation from './Navigation'

const HomeContainer =()=>{
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

export default HomeContainer;