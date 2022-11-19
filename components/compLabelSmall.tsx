import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import edit from '../assets/edit.svg'
import Image from 'next/image';
import styled from 'styled-components';
import MoreButton from './MoreButton';

interface ILabelSmall {
    textLeft: string;
    textRight: string;
}


const CompLabelSmall = (props: ILabelSmall) => {
    const router = useRouter();

    return (
        <div>
            
            <button  style={{border : "none",
                backgroundColor: "#841439", width: "300px", height: "100px", borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px", paddingLeft: "20px", lineHeight: "100px", marginTop: "20px", color: "white", display: "flex", float: "left"
            }}>
                <div style={{ fontSize: "25px", paddingLeft: "20px" }}>
                    {props.textLeft}
                </div>
            </button>
            

            <button style={{
                cursor:"pointer",
                border : "none",
                borderTopRightRadius: "15px", borderBottomRightRadius: "15px",
                marginLeft: "30px", backgroundColor: "#841439", width: "300px", height: "100px", paddingLeft: "20px", lineHeight: "100px", marginTop: "20px", color: "white", display: "flex", float: "right"
            }}>
                <div style={{
                    width: "50%",
                    margin: "0 auto", fontSize: "25px", paddingLeft: "20px"
                }}>
                    {props.textRight}
                </div>
            </button>
        </div>
    );
};

export default CompLabelSmall;

