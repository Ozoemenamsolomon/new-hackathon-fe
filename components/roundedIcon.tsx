import { useRouter } from 'next/router';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import CarB from '../assets/carblack.svg'
import CarW from '../assets/car.svg'
import ChartB from '../assets/chart-lineblack.svg'
import ChartW from '../assets/chart-line.svg'
import AdobeB from '../assets/adobe-altblack.svg'
import AdobeW from '../assets/adobe-altwhite.svg'
import AppleB from '../assets/apple-altblacksvg.svg'
import AppleW from '../assets/apple-altwhite.svg'
import Calendar from '../assets/calendar.svg'
import Edit from '../assets/edit-white.svg'
import Trash from '../assets/glass-tea.svg'

import Image from 'next/image';
import CompLabel from '../components/compLabel';

interface Iindex {
    index: number;
    currentindex: number
    
}

const RoundedIcon = (index : Iindex) => {
    const industries = [[CarB, CarW], [ChartB, ChartW], [AdobeB, AdobeW], [AppleB, AppleW]]
	const router = useRouter();
    
	return (
        <div style={index.index === index.currentindex ? {background : "#841439", paddingLeft : "3px", width: "30px", height: "30px", borderRadius : "20px" } : {paddingLeft : "15px"}}>
        <Image  src={index.index === index.currentindex ? industries[index.index][1] : industries[index.index][0]} alt="User Image" width={25} height={25} />
        </div>
	);
};

export default RoundedIcon;

const Main = styled.main`
	min-height: 80vh;
`;
