import styled from 'styled-components';
import React from 'react';

export const FormStepOne = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    height: 60%;
`;

export const CheckboxLabel = styled.label`
  display: flex;
`;

export const CheckboxName = styled.span`
  display: block;
`;

//checkbox checked styles
const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  background: ${props => props.checked === true ? 'salmon' : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  };

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`;



const CheckboxContainer = styled.div`
  display: block;
  vertical-align: middle;
`;

export const Checkbox = props => (
  <CheckboxContainer>
    <HiddenCheckbox  {...props} />
    <StyledCheckbox checked={props.checked}>
      <Icon viewBox="0 0 24 24" checked={props.checked}>
          <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
    
);

export const ErrorSpan = styled.span`
  font-size: .7rem;
  color: red;
`;