import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LoginContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 70%;
width: 60%;
`;

export const LoginHeader = styled.h2`
text-align: center;
font-size: 2rem;
&:after {
    content: url('../../images/decoration.png');
    display: block;
    width: 100%;
    transform: scale(.7);
    margin-top: 10px;
}
`;

export const EmailInput = styled.input`
outline: none;
border: none;
border-bottom: 1px solid #696969;
padding: 10px;
font-size: 1.1rem;
font-weight: 300;`;

export const PasswordInput = styled.input`
outline: none;
border: none;
border-bottom: 1px solid #696969;
padding: 10px;
font-size: 1.1rem;
font-weight: 300;`;

export const LoginLinks = styled.section`
display: flex;
justify-content: space-between;
`;

export const RegisterLink = styled(Link)`
text-decoration: none;
color: #696969;
padding: 10px;
`;

export const LogIn = styled.input`
outline: none;
border: 1px solid #696969;
padding: 10px;
font-size: 1rem;
font-weight: 300;
`;

