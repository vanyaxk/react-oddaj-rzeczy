import styled from 'styled-components';

export const MainFormContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainFormTag = styled.form`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const MainFormButtons = styled.section`
    display: flex;
    justify-content: space-between;
    width: 40%;
`;

export const PrevButton = styled.button`
    appearance: none;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #696969;
`;

export const NextButton = styled.button`
    appearance: none;
    border: none;
    font-size: 1rem;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #696969;
`;