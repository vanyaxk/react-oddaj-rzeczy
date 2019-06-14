import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const WelcomeSection = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    `;

export const WelcomeLink = styled(Link)`
    margin-left: 5px;
    padding: 10px 20px;
    text-decoration: none;
    color: #696969;
`;