import styled from "styled-components";
import { Link } from "react-router-dom";
import impressionist from "../assets/images/impressionist-bg.png";

export const BlogContainer = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
  background-image: url(${impressionist});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

export const BlogHeader = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.75rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BlogGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const BlogCard = styled.article`
  background: rgba(255, 255, 240, 0.92);
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BlogCardHeader = styled.div`
  margin-bottom: 1rem;
`;

export const BlogTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  color: #2c3e50;
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
`;

export const BlogDate = styled.p`
  font-family: 'Lora', serif;
  color: #b56136;
  font-size: 1rem;
  margin: 0;
`;

export const BlogText = styled.p`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ReadMoreButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  font-family: 'Lora', serif;
  background-color: #c05c22;
  color: #fffaf3;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #a44917;
  }
`;
