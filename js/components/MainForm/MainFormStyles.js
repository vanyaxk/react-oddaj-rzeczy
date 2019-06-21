import styled from 'styled-components';

export const MainFormContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const MainFormBoldMessage = styled.span`
    display: block;
    font-weight: 700;
    padding: 10px 0;
`;
export const MainFormMessage = styled.p`
    padding: 20px 15px;
    width: 100%;
    background-color: #ffcc66;
`;
export const MainFormStepCounter = styled.h1`
    text-align: left;
    padding: 25px 20px;
`;


export const MainFormTag = styled.form`
    height: 70%;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MainFormButtons = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const PrevButton = styled.button`
    appearance: none;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #696969;
    margin-bottom: 10px;
`;

export const NextButton = styled.button`
    appearance: none;
    border: none;
    font-size: 1rem;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #696969;
    margin-bottom: 10px;
`;

export const SubmitButton = styled.input.attrs({type: 'submit', value: 'Wyślij'})`
    appearance: none;
    border: none;
    font-size: 1rem;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #696969;
    margin-bottom: 10px;
`;