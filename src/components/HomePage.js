// import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { API_KEY } from '../config'
import DataCard from './DataCard';
const HomePage = () => {
    const [state, setState] = useState([]); 
    const fetchTrending = async () => {
      const data = await fetch(`
    https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
      const dataJ = await data.json();
      console.log(dataJ);
      setState(dataJ.results); 
    };
     
    useEffect(() => {
      fetchTrending(); 
    }, [state]);
  return (
    <>
    {
     state.map((item) => (
        <DataCard key={item.id} movie={item} />
      ))}
    </>
    
  )
}

export default HomePage