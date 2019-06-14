import styled from 'styled-components';


export const WelcomeSection = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    position: relative;
    `;

export const WelcomeButton = styled.button`
    outline: none;
    border: none;
    margin-left: 5px;
    min-width: 130px;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 300;
    color: #696969;
    display: flex;
    justify-content: space-between;
`;

export const WelcomeSettings = styled.ul`
    display: block;
    max-width: 300px;
    border: 1px solid #696969;
    position: absolute;
    z-index: 2;
    top: 90%;
    right: 1%;
    background-color: #fff;
`;

export const WelcomeSetting = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    text-align: right;
`;

