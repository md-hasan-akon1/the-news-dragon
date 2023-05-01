/* eslint-disable react/jsx-key */
 // eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Header from '../../Sheared/Header/Header';
import Footer from '../../Sheared/Footer/Footer';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const [allData,setAllData]=useState([]);
    useEffect(()=>{
        fetch('https://the-dragon-news-server-md-hasan-akon1.vercel.app/news')
        .then(res=>res.json())
        .then(data=>setAllData(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
          

{
    allData.map(news=><NewsCard key={news._id}
    news={news}
    ></NewsCard>)
}
      
        </div>
    );
};

export default Home;