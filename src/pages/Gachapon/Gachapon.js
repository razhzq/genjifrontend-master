import './Gachapon.css'
import Discord from './Discord';
import Footer from './GachaFooter';

const Gachapon = () => {
	return (
		<div className="gachapon">
			<div className='gachapon-content'>
			{/* 
				<h1 >Gachapon:</h1>
				<p1>COMING </p1>
				<p2>SOON</p2>
			*/}
			</div>
			<div className="discord-join">
				<Discord />
			</div>
			<div className="gacha-footer">
				<Footer />
			</div>
		</div>
	);
}

export default Gachapon;