import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const RegistrationContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
`;

export const RegisterForm = styled.form`
    height: 80%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
`;

export const RegistrationHeader = styled.h2`
    text-align: center;
    font-size: 2rem;
    &:after {
        content: url('../../images/decoration.png');
        display: block;
        transform: scale(.7);
    }
`;

export const DataInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #696969;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 300;
`;

export const RegistrationLinks = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const LoginLink = styled(Link)`
    text-decoration: none;
    color: #696969;
    padding: 10px;
`;

export const RegisterButton = styled.input`
    border: 1px solid #696969;
    outline: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: 300;
`;
