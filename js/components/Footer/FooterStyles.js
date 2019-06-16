import styled from 'styled-components';

export const PageFooter = styled.footer`
    background: url('./../../images/footer_bg_img.jpg') no-repeat bottom right / cover;
    background-attachment: fixed;
    height: 100vh;
`;

export const Container = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
`;

export const Copyright = styled.p`
    color: black;
    position: absolute;
    top: 95vh;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const SocialMedia = styled.section`
    position: absolute;
    top: 95vh;
    right: 5%;
    transform: translate(-50%, -50%);

     &> * {
         cursor: pointer;

         &:last-of-type {
            margin-left: 10px;
        }
     }
`;
