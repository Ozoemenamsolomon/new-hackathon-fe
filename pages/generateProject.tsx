import { Title } from '../components/sharedstyles';
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
import RoundedIcon from '../components/roundedIcon';
import CompLabelSmall from '../components/compLableSmall';


export default function About() {

    const industries = [[CarB, CarW], [ChartB, ChartW], [AdobeB, AdobeW], [AppleB, AppleW]]
    
    

    function changeIndustry(index : number){
        currentindex = index
        console.log(index === currentindex, currentindex) 
    }
    var currentindex = 1

	return (
		<div style={{paddingLeft : "25px"}}>
            <div style={{fontSize : "30px"}}>
                Employee Suggenstions for Project 
            </div>
            <div style={{display : "flex", paddingTop : "20px"}}>
                <div style={{fontSize : "17px"}}>
                Industry:
                </div>
                { industries.map((key, index) => (
                    
                        <div>
                        <button onClick={() =>changeIndustry(index)} style={{background : "none", border : "none"}}>
                            <RoundedIcon index={index} currentindex={currentindex}></RoundedIcon>

                        </button>
                        {/* {currentindex === 2 &&
                        <div>
                            test
                        </div>

                        } */}
                        </div>
                    
                ))}
               
            </div>
            <div style={{display : "flex", paddingTop : "20px"}}>
            <div style={{fontSize : "17px"}}>
            Time Frame 
                </div>
                <div style={{paddingLeft : "20px"}}>
                <Image  src={Calendar} alt="User Image" width={25} height={25} />
                </div>
              
                <div style={{fontSize : "17px", paddingLeft : "20px"}}>
                18.11.2022 - 30.01.2023
                                </div>
            </div>
            <div style={{fontSize : "17px", paddingTop : "20px"}}>
            Employee Roles Needed           
            </div>
            <div>
                <CompLabel name={'1 Front-End-Developer'} icon1={Edit} icon2={Trash} ></CompLabel>       
            </div>
            <div>
                <CompLabel name={'2 Back-End-Developer'} icon1={Edit} icon2={Trash} ></CompLabel>       
            </div>

            <CompLabelSmall textLeft={'+ add Employee'} textRight={'generate Team >'}></CompLabelSmall>

        </div>
	);
}