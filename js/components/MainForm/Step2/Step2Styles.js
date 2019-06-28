import styled from 'styled-components';

export const FormStepTwo = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
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

export const ErrorSpan = styled.span`
  font-size: .7rem;
  color: red;
`;