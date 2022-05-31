import React, {useState} from 'react';

import useGif from '../hooks/useGif';

const Tag = () => {
	const [tag, setTag] = useState('cats');
  const {gif, fetchGif} = useGif(tag);

  return (
		<div className="container">
			<h1>Random {tag} Gif</h1>
			<img width="450" src={gif} alt="" />
			<input value={tag} onChange={e => setTag(e.target.value)} />
			<button onClick={() => fetchGif(tag)}>CLICK ME FOR NEW</button>
		</div>
	);
}

export default Tag;