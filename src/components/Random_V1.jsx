import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random_V1 = () => {
  const [gif, setGif] = useState('')
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

	useEffect(() => {
		fetchGif();
	}, []);

  const handleClick = () => {
    fetchGif();
  }
  
  return (
    <div>
      <h1>Random Gif</h1>
      <img width="450" src={gif} alt=''/>
      <button onClick={handleClick}>CLICK ME FOR NEW</button>
    </div>
  )
}

export default Random_V1