
import './Tnc.css'
import Discord from './Discord';
import Footer from './TncFooter';




const TNC = () => {
	return (
		<div className='tnc'>
			<div className='tnc--container'>
				<div className='h1--container'>
					<h1>TERMS & CONDITIONS</h1>
				</div>

				<div className='h2--container'>
					<h1>OWNERSHIP</h1>
				</div>

				<div className='h3--container'>
					<h1>PERSONAL USAGE</h1>
				</div>

				<div className='h4--container'>
					<h1>COMERCIAL USAGE</h1>

				</div>

				<div className='h5--container'>
					<h1> FEEDBACK </h1>

				</div>

				<div className='h6--container'>
					<h1> CREDITS </h1>

				</div>

			</div>
			<div className="tnc-discord">
				<Discord />
			</div>
			<div className="tnc-footer">
				<Footer />
			</div>

		</div>
	);
}

export default TNC;