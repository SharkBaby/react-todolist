import React,{Fragment} from 'react';
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
        <Fragment>
            <Header />
            <Main />
        </Fragment>
    )
}

export default HomeContainer;