import styled from 'styled-components';

export const FormContainer = styled.section`
    width: 500px;
    min-height: 400px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
`;


export const ContactHeader = styled.h4`
    font-size: 2rem;
    text-align: center;

    &:after {
        content: url('./../../images/decoration.png');
        display: block;
        width: 100%;
        margin-top: 20px;
        transform: scale(.8);
    }
`;

export const ContactData = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    padding: 10px;
    justify-content: center;
`;

export const ContactInput = styled.input`
    width: 48%;
    border: none;
    background: transparent;
    outline: none;
    font-size: 1rem;
    padding: 10px 5px;
    border-bottom: .5px solid #696969;

    &::-webkit-input-placeholder {
        padding-left: 10px;
        font-size: 1rem;
        font-weight: 300;
    }

    &:first-of-type {
        margin-right: 5px;
    }
`;

export const ContactMessage = styled.textarea`
    resize: none;
    width: 100%;
    border: none;
    background: transparent;
    padding: 15px 0 0 10px;
    line-height: 15px;
    border-bottom: 1px solid #696969;
    font-size: 1rem;

    &::-webkit-input-placeholder {
        font-size: 1rem;
        font-weight: 300;
    }

    &:focus {
        outline: none;
    }
`;

export const SubmitMessage = styled.input`
    width: 100px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    padding: 10px 20px;
    margin: 40px auto 0;
    border: 1px solid #696969;
    border-radius: 5px;
    transition: all .3s;

    &:hover {
        background-color: #fff;
        border: 1px solid transparent;
    }
`;