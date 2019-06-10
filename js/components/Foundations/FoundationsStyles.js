import styled from 'styled-components';

export const FoundationHeader = styled.h4`
font-size: 1.5em;
margin-top: 20px;
text-align: center;

&:after {
    content: url('./../../images/decoration.png');
    display: block;
    width: 100%;
    transform: scale(.5);
}
`;
export const Container = styled.section`
max-width: 1024px;
margin: 0 auto;
display: flex;
flex-direction: column;
`;

export const Buttons = styled.div`
margin: 0 auto;
max-width: 600px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center
`;

export const FoundationList = styled.ul`
height: ${props => props.height + 'px'};
list-style: none;
`;

export const FoundationPurpose = styled.p`
max-width: 600px;
padding: 20px;
margin: 0 auto;
text-align: center;
`;

export const FoundationItem = styled.li`
display: flex;
justify-content: space-between;
align-items: flex-end;
`;

export const FoundationInfo = styled.section`
padding: 10px 20px;
&:after {
    content: '';
    display: block;
    height: 1px;
    min-width: 400px;
    background-color: #a9a9a9;
    margin-top: 30px;
}
`;

export const FoundationName = styled.p`
font-size: 1.1em;
`;

export const FoundationMission = styled.p`
margin-top: 20px;
font-style: italic;
font-size: .9em;
`;


export const FoundationNeeds = styled.p`
padding: 10px 20px;

&:after {
    content: '';
    display: block;
    height: 1px;
    min-width: 400px;
    background-color: #a9a9a9;
    margin-top: 30px;
}
`;

export const PageList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
`;

export const PageNumber = styled.li`
padding: 10px;
margin-bottom: 20px;
cursor: pointer
`;