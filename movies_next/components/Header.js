import React from 'react';
import styled from "@emotion/styled"
import Image from "next/image";
import {rem} from "polished"

const Header = ({isDark}) => {
    return (
        <HeaderStyled isDark={isDark}>
            <div className='container'>
                <div className='logo'>
                    <Image src="/images/logo.svg" width="50px;" height="40px"/>
                    <span className='logo-text'>Next Movies</span>
                </div>
            </div>
        </HeaderStyled>
    );
};

//background:${props=>props.isPink? props.theme.colors.primary : "#000000"};

const HeaderStyled = styled.header`
    background:${props=>props.isDark==true?"#000000":props.theme.colors.primary };
    padding:20px;

        .logo {
            display:flex;
            align-items:center;
            .logo-text{
                color:#333333;
                font-weight:bold;
                margin-left:20px;
                text-decoration:none;
                font-size:${rem(20)};
    
            }

    }
    
`


export default Header;