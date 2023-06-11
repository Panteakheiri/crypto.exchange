import React from 'react';
import Styles from "./Coin.module.css";

const Coin = ({name ,image , price , symbol ,priceChange , marketCap}) => {
    return (
        <div  className={Styles.container}>
            <img  className={Styles.image}src={image} alt={name}/>
            <span className={Styles.name}>{name}</span>
            <span className={Styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={Styles.price}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? Styles.greenpricechange : Styles.redpricechange}>{priceChange} %</span>
            <span className={Styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;