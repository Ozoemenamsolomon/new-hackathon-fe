import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import edit from '../assets/edit.svg'
import Image from 'next/image';

interface ILabel {
    name: string;
    icon1: string;
    icon2: string;
}

const CompLabel = (props : ILabel) => {
	const router = useRouter();

	return (
		<div>
			
            <div style={{backgroundColor : "#841439", width : "450px", height : "100px", borderRadius : "15px", paddingLeft : "20px", lineHeight : "100px", marginTop: "20px", color : "white", display : "flex"}}>
                <div style={{fontSize : "25px"}}>
                  {props.name}

                </div>
                <div style={{paddingTop : "10px", paddingRight : "20px",  marginLeft : "auto", marginRight : "0", display : "flex"}}>
                    { props.icon1 != '' &&
                    <div >
                    <Image src={props.icon1} alt="" width={30} height={30} />
                    </div>
                }

                { props.icon2 != '' &&
                    <div style={{paddingLeft : "10px"}}>
                    <Image src={props.icon2} alt="" width={30} height={30} />
                    </div>
                }
                </div>
                
                
                
            </div>
		</div>
	);
};

export default CompLabel;