import styled from 'styled-components';

export const FormStepThree = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HelpSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

export const Select = styled.select`
  width: 50%;
  height:35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border-radius: none;
  border: 1px solid #696969;
  padding: 10px;
  margin: 1em 0 1em;
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

export const InputOrg = styled.input.attrs({type: 'text'})`
  width: 50%;
  border-radius: 3px;
  border: 1px solid #696969;
  display: block;
  margin: 1em 0 1em;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 300;
`;

export const HelpButtons = styled.article`
  margin-top: 10px;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
`;

export const HelpButton = styled.button`
  padding: 10px 15px;
  margin: 5px 10px;
  border: 1px solid #696969;
  font: inherit;
  color: inherit;
  text-shadow: ${props => props.clicked ? '0px 0px 5px rgba(255, 255, 255, 0.7)' : 'none'};
  background-color: ${props => props.clicked ? '#f8d113' : 'transprent'};
  cursor: pointer;

  &:focus {
    outline: none; 
  }
`;


export const ErrorSpan = styled.span`
  font-size: .7rem;
  color: red;
`;