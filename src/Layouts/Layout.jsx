import React from 'react';
import Main from './Main';
import Header from './Header';
import './Layout.css'

const HomeContainer =()=>{
    ///////////////////////////////////////
    //                                   //
    //              Header               // 
    //___________________________________//
    //                                   //
    //                                   //
    //              Main                 //
    //                                   //
    ///////////////////////////////////////
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default HomeContainer;