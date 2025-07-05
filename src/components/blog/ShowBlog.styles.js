import styled from "styled-components";
import { keyframes } from "styled-components";
import painterlyBorder from "../../assets/images/impressionist-bg.png";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const BlogLayout = styled.div`
  animation: ${fadeIn} 0.8s ease-out both;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1000px;
  background: rgba(255, 255, 240, 0.88);
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  border: 2px dashed #d5c3a3;
  overflow: hidden;

  &::before {
    content: "";
    background: url(${painterlyBorder}) center/cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0.3;
    z-index: 1;
  }

  > * {
    z-index: 2;
  }
`;

export const BlogAuthor = styled.div`
  flex: 2;
  text-align: center;
  font-family: "Lora", serif;
  font-size: 1.1rem;
  color: #7d5523;
  background: rgba(255, 248, 225, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-style: italic;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
`;

export const BlogDate = styled.div`
  flex: 2;
  text-align: center;
  font-family: "Lora", serif;
  font-size: 1rem;
  color: #7d5523;
  background: rgba(255, 248, 225, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-style: italic;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
`;

export const BlogTitleWrapper = styled.div`
  flex: 10;

  h1 {
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 2.75rem;
    color: #2c3e50;
    padding: 1rem;
    margin: 0 auto;
    border-bottom: 2px solid #a78b41;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const BlogTextWrapper = styled.div`
  font-family: "Lora", serif;
  font-size: 1.25rem;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  background: rgba(255, 255, 240, 0.95);
  border-radius: 12px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  line-height: 1.8;
  color: #333;

  .first-line {
    font-weight: bold;
  }

  span.dropcap {
    color: #a78b41;
    font-size: 2.5rem;
    vertical-align: middle;
    line-height: 1;
  }
`;

export const VideoWrapper = styled.div`
  text-align: center;
  margin: 3rem auto;
  padding: 2rem;

  iframe {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
    font-family: "Lora", serif;
  }

  @media (max-width: 768px) {
    iframe {
      width: 100%;
      height: 300px;
    }
  }
`;

export const LinkWrapper = styled.div`
  text-align: center;
  margin: 2rem;

  a {
    font-family: "Lora", serif;
    color: #2c3e50;
    font-size: 1.1rem;
    text-decoration: underline;

    &:hover {
      color: #c05c22;
    }
  }
`;

export const ButtonGroup = styled.div`
  text-align: center;
  margin: 2rem;

  button {
    margin: 0.5rem;
    font-family: "Lora", serif;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    border-radius: 6px;
    font-weight: bold;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
