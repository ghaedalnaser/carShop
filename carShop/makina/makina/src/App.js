import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import './App.css';


//      ******  For Delete   ******    

//import NavBar from "./components/Components/NavBar/NavBar.js";
//import EditProfile from "./components/Components/EditProfile/EditProfile.js";
//import Security from "./components/Components/Security/Security.js";
//import BeSeller from "./components/Components/BeSeller/BeSeller.js";
//import PostCarOrPart from "./components/Components/PostCarOrPart/PostCarOrPart.js";
//import Favorites from "./components/Components/Favorites/Favorites.js";


//    *****    FOR TESTING     *****
//import InputPhoto from './components/Components/InputPhoto/InputPhoto'


//   *****   THE INTERFACES ***** 

import MainInterface from './components/Components/MainInterface/MainInterface'
import { AuthProvider, AuthContext } from './components/Components/AuthContext';
import { useContext } from 'react';


function App() {

    const authContext =useContext(AuthContext);

    return (
        
            <div className = "App" >
                <MainInterface />
            </div>
        
    );
}

function AppWithStore(){
    return(
        <AuthProvider>
        <App/>
        </AuthProvider>
    )
}
export default App;
