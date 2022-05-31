import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag_V1 = () => {
	const [tag, setTag] = useState('cats');
	const [gif, setGif] = useState('');

	const fetchGif = async (tag) => {
		const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
		const { data } = await axios.get(url);
		const imageSrc = data.data.images.downsized_large.url;
		setGif(imageSrc);
	};

	useEffect(() => {
		fetchGif(tag);
	}, [tag]);

	const handleClick = () => {
		fetchGif();
	};

	return (
		<div className="container">
			<h1>Random {tag} Gif</h1>
			<img width="450" src={gif} alt="" />
			<input value={tag} onChange={e => setTag(e.target.value)} />
			<button onClick={handleClick}>CLICK ME FOR NEW</button>
		</div>
	);
};

export default Tag_V1;
