import styled from 'styled-components';

export const StuffSection = styled.section`
    height: calc(100vh - 25px);
    background: url('../../images/header_logged_img.jpg') no-repeat top left / contain;
    position: relative;
    z-index: -1;
`;

export const StuffHeader = styled.h3`
    font-size: 1.5rem;

    &::after {
        text-align: center;
        content: url('../../images/decoration.png');
        display: block;
        width: 100%;
        transform: scale(.7);
    }
`;

export const Container = styled.div`
    position: absolute;
    top: -7%;
    right: 5%;
    height: 100%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const StuffHint = styled.h4`
    text-align: center;
    font-size: 1.2rem;
`;

export const StuffList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const StuffElement = styled.li`
    display: inline-block;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid #696969;
    width: 110px;
    height: 110px;
    transform: rotate(-45deg);
    position: relative;
`;

export const StuffBoldMessage = styled.span`
    display: block;
    font-weight: 700;
    margin: 10px 0;
`;
export const StuffMessage = styled.p`
    padding: 20px 15px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #ffcc66;
`;

export const StepNumber = styled.span`
    transform: rotate(45deg);
    position: absolute;
    top: 20%;
    left: 68%;
`;

export const StepDesc = styled.span`
    transform: rotate(45deg);
    font-size: 1rem;
    color: #696969;
`;

