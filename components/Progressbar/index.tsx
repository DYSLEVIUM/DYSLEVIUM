import { useState, useEffect } from 'react';
import { ProgressBarContainer } from './styles';

const Progressbar = () => {
	const [progress, setProgress] = useState(0);

	const onScroll = () => {
		let totalHeight = document.body.scrollHeight - window.innerHeight;
		setProgress((window.pageYOffset / totalHeight) * 100);
	};

	useEffect(() => {
		onScroll(); //  initial call on component load

		document.addEventListener('scroll', onScroll);

		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<ProgressBarContainer
			style={{ width: `${progress}%` }}
		></ProgressBarContainer>
	);
};

export default Progressbar;
