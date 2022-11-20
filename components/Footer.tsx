import { useState, useEffect } from 'react';

const Footer: React.FC<{}> = () => {
	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		console.log("i")
		const isMobile = window.innerWidth <= 1300;
		if(isMobile){
			console.log("mobile")
		}else {
			console.log("desktop", window.innerWidth)
		}
		return {
		  width
		};
	  }

	return (
		<footer style={{width : "max-content"}}>
			<div style={{padding : "30px", background : "#AEAEAE", display : "flex", marginTop : "20px"}}>
				<div style={{paddingRight : "220px"}}>
					<div style={{color : "#841439"}}>
						Kontakt
					</div>
					<button onClick={() => getWindowDimensions()}>
						d
					</button>
					<div  style={ {paddingRight : "220px", paddingTop : "12px"}  }>
						<div>
						msg systems ag
						</div>
						<div>
						Robert-​Bürkle-Straße 1
						</div>
						<div>
						85737 Ismaning
						</div>
					</div>
				</div>
				<div style={{paddingRight : "220px"} }>
					<div style={{color : "#841439"}}>
					Branchen
					</div>
					<div style={{fontSize : "12px", paddingTop : "12px"}}>
						<div>
							{'>>'} Automotive
						</div>
						<div>
						{'>>'} Banking
						</div>
						<div>
						{'>>'} Food
						</div>
					</div>
					
				</div>
				<div  style={ {paddingRight : "220px"}}>
					<div style={{color : "#841439"}}>
					msg-Gruppe

					</div>
					<div style={{fontSize : "12px", paddingTop : "12px"}}>
						<div>
							{'>>'} About Us
						</div>
						<div>
						{'>>'} Newsroom
						</div>
						<div>
						{'>>'} Carrier
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
