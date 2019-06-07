import React, {Component} from 'react';
import styled from 'styled-components';

const RegisterForm = styled.form``;

const InputName = styled.input``;


class Register extends Component {
    render() {
        return (
            <RegisterForm>
                <label>
                    Name:
                    <InputName />
                </label>
            </RegisterForm>
        );
    }
}

export default Register;