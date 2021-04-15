import authImg from 'assets/auth-img.jpg';
import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export const AuthImage = styled.img`
    width: 50%;
    height: 100%;
    background-image: url(${authImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const AuthContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
