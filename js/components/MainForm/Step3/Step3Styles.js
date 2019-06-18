import styled from 'styled-components';

export const FormStepThree = styled.section`

`;

export const Label = styled.label`

`;

export const Select = styled.select`
  width: 100%;
  height:35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border-radius: none;
  border: 1px solid #696969;
  padding: 10px;
  margin-left: 10px;
`;

export const Option = styled.option`
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
`;

export const InputOrg = styled.input.attrs({type: 'text', placeholder: 'Imię organizacji'})`
  border-radius: 3px;
  border: 1px solid #696969;
  display: block;
  margin: 0 0 1em;
  padding: 10px 15px;
  

  ::placeholder {
    color: palevioletred;
  }
`;