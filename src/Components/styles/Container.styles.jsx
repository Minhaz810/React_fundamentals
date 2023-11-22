import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    background: ${(props)=>props.theme.wrapperColor};
    width: 100%;
    height: 100vh;
`
export const StyledCard=styled.div`
    position: relative;
    background: ${(props)=>props.theme.cardColor};
    height: 350px;
    width: 550px;
    overflow: hidden;
    display: flex;
    align-items: center;
`
export const Content=styled.div`
    width: 215px;
    position: absolute;
    left: 20px;
    z-index: 3;
`
export const Tag=styled.span`
    display: inline-block;
    color: #fff;
    background: ${(props)=>props.color};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`

export const H1=styled.h1`
    color: #ffffff;
`
export const P=styled.p`
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    color: ${(props)=>props.theme.paragraphColor};
    margin: 20px 0;
`
export const ButtonContainer=styled.div`
    width: fit-content;
    height: fit-content;
    margin-top: 20px;

    & a{
        display: inline-block;
        overflow: hidden;
        position: relative;
        font-size: 11px;
        color:${(props)=>props.theme.buttonColor};
        text-decoration: none;
        padding: 10px 15px;
        border: 1px solid #333;
        font-weight: bold;

        &:after{
            content: "";
            position: absolute;
            top: 0;
            right: -10px;
            width: 0%;
            background: #262626;
            height: 100%;
            z-index: -1;
            transition: width 0.3s ease-in-out;
            transform: skew(-25deg);
            transform-origin: right;
        }
        &:hover{
            color: ${(props)=>props.theme.buttonHoverColor};
            transition: all 0.5s ease;
            &:after{
                width: 150%;
                left: -10px;
                transform-origin: left;
            }
        }
        &:nth-of-type(1){
            border-radius: 50px 0 0 50px;
            border-right: none;
        }
        &:nth-of-type(2) {
        border-radius: 0px 50px 50px 0;
        }
    }
`
export const Image=styled.img`
    position: absolute;
    top: 30px;
    right: -30px;
    z-index: 0;
`