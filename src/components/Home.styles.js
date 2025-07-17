// === Home.styles.js ===
import styled, { keyframes } from "styled-components";
import nmbkg from "../assets/images/homebackground.png";

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeSection = styled.div`
  background: url(${nmbkg}) no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  animation: ${fadeSlideUp} 1s ease-out both;
`;

export const Header = styled.h2`
  font-family: "Playfair Display", serif;
  text-align: center;
  font-size: 2.5rem;
  color: #a6783a;
  text-transform: uppercase;
  margin-bottom: 2rem;
  border-bottom: 2px dashed #d5c3a3;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const BioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const HeadshotImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 2px solid white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const BioText = styled.div`
  flex: 1;
  color: #212121;
  background: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  font-family: "Lora", serif;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  animation: ${fadeSlideUp} 1.2s ease-out both;

  p {
    margin-bottom: 1.25rem;
  }

  a {
    color: #a6783a;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 1rem;
  background-color: #eaeaea;
  color: #212121;
  border-top: 2px solid #c5b89f;
  animation: ${fadeSlideUp} 1.5s ease-out both;

  address {
    margin: 0;
    font-style: normal;
    font-size: 1rem;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;