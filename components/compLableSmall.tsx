import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import Image from 'next/image';
import styled from 'styled-components';
import MoreButton from './MoreButton';
import React from 'react';

interface ILabelSmall {
    textLeft: string;
    textRight: string;
}


const CompLabelSmall = (props: ILabelSmall) => {
    const router = useRouter();

    return (
        <div style={{width : "450px"}}>
            
            <button  style={{
                cursor:"pointer",
                border : "none",
                backgroundColor: "#841439", width: "200px", height: "100px", borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px", lineHeight: "100px", marginTop: "20px", color: "white", display: "flex", float: "left", paddingRight : "100px" 
            }}>
                <div style={{ fontSize: "25px", paddingLeft: "20px" }}>
                    {props.textLeft}
                </div>
            </button>
            

            <button style={{
                cursor:"pointer",
                border : "none",
                borderTopRightRadius: "15px", borderBottomRightRadius: "15px",
                marginLeft: "30px", backgroundColor: "#841439", width: "200px", height: "100px", paddingLeft: "20px", lineHeight: "100px", marginTop: "20px", color: "white", display: "flex", float: "right", paddingRight : "60px"
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

