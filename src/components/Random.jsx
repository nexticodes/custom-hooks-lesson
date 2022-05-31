
import useGif from '../hooks/useGif';

const Random = () => {
  const {gif, fetchGif} = useGif();

  return (
		<div className="container">
			<h1>Random Gif</h1>
			<img width="450" src={gif} alt="" />
			<button onClick={fetchGif}>CLICK ME FOR NEW</button>
		</div>
	);
}

export default Random;