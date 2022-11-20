import Home1 from '../assets/home1.png';
import Home2 from '../assets/home2.png';
import Image from 'next/image';

const Home = () => {
	return (
		<div style={{ paddingLeft: '15px' }}>
			<div style={{ margin: '0 auto', display: 'table' }}>
				<div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
					In focus
				</div>

				<Image
					src={Home1}
					alt="User Image"
					style={{
						maxWidth: '95%',
						objectFit: 'contain',
						aspectRatio: '2.8',
						width: '100%',
						height: 'fit-content',
					}}
				/>
			</div>
			<div
				style={{
					margin: '0 auto',
					display: 'table',
					paddingTop: '60px',
					textAlign: 'center',
				}}>
				<Image
					src={Home2}
					alt="User Image"
					style={{ width: '80%', height: 'auto' }}
				/>
			</div>
		</div>
	);
};

export default Home;
