import styled from 'styled-components';

export const FormStepFour = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const StepFourHeader = styled.h4`
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 25px;
`;

export const AddressLabel = styled.label`
    margin: 10px 0;
`;

export const AddressHeader = styled.h5`
    font-size: .7rem;
    font-weight: 700;
`;

export const AddressInputs = styled.section`
    display: flex;
    flex-direction: column;
    width: 45%;
    
`;

export const AddressInput = styled.input.attrs({type: 'text'})`
    display: block;
    width: 100%;
    margin-top: 5px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 300;
`;


export const DeadlineLabel = styled.label`
    margin: 10px 0;
`;

export const DeadlineHeader = styled.h5`
    font-size: .7rem;
    font-weight: 700;
    `;

export const DeadlineInputs = styled.section`
    display: flex;
    flex-direction: column;
    width: 45%;
`;


export const  DeadlineInput = styled.input.attrs({type: 'text'})`
    display: block;
    width: 100%;
    margin-top: 5px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 300;
`;

export const DeadlineMessage = styled.textarea.attrs({wrap: 'hard', rows: '6'})`
    resize: none;
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid grey;
    &:focus {
        outline: none;
    }
`;