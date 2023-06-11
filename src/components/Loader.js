import React from 'react';
import Styles from "./Loader.module.css";

//gif
import Snipper from "../gif/snipper.gif" ;

const Loader = () => {
    return (
        <div>
            <img  className={Styles.image} src={Snipper} alt="loader"/>
            <h1 >Loading ...</h1>
        </div>
    );
};

export default Loader;