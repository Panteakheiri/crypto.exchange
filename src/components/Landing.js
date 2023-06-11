import React , {useEffect , useState} from 'react';
import Styles from "./Landing.module.css";

//api
import { getcoin } from '../services/Api';

//components
import Loader from './Loader';
import Coin from './Coin';


import Logo from "../images/bitcoin.png";


const Landing = () => {

    const [coins,setCoins] = useState([]);
    const [search ,setSearch] = useState("");

    useEffect(() => {
         const fetchApi = async() => {
             const result = await getcoin()
             console.log(result.data);
             setCoins(result.data)
         }
         fetchApi();
    }, [])

    const searchHandler = event => {
          setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>

            <div className={Styles.blackpart}></div>
            <div className={Styles.titlecontainer}>
                <h1>CRYPTO PROFIT</h1>
                <img src={Logo} alt='logo'/>
            </div>
            <input className={Styles.input} type='text' placeholder='Search' value={search} onChange={searchHandler}/>
            {
                coins.length ? 
                <div className={Styles.coincontainer}>
                {
                    searchedCoins.map(coin => <Coin
                    key={coin.id}
                    image={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    marketCap={coin.market_cap}
                    />)
                }
                </div> : <Loader/>
            }
           
            
        </div>
    );
};

export default Landing;