import styled, { keyframes } from "styled-components";
import impressionistContactBg from "../assets/images/impressionistContactBg.png";
// === Animations === //
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Fade and slide in from below
export const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const blinkCaret = keyframes`
  0% { border-color: transparent }
  50% { border-color: black }
  100% { border-color: transparent }
`;
export const ContactSection = styled.div`
  min-height: 100vh;
  padding: 3rem 1.5rem;
  background-image: url(${impressionistContactBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  animation: ${fadeIn} 0.8s ease-out both;
  animation: ${fadeSlideUp} 1s ease-out;
  color: #2c3e50;
`;

export const ContactHeader = styled.h2`
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

export const Description = styled.p`
  font-family: "Courier New", monospace;
  font-size: 1.2rem;
  color: #212121;
  max-width: 700px;
  margin: 2rem auto;
  line-height: 1.6;
  white-space: pre-wrap; /* allows line breaks */
  word-wrap: break-word;

  .blinking-caret {
    display: inline-block;
    width: 1px;
    background-color: black;
    animation: ${blinkCaret} 1s step-end infinite;
    margin-left: 2px;
  }
`;





export const StyledForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  background: rgba(255, 255, 240, 0.9);
  border-radius: 14px;
  padding: 2rem 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  border: 1px solid #e0d3b8;
  animation: ${fadeIn} 1s ease-out 0.3s both;
`;

export const Label = styled.label`
  font-family: "Lora", serif;
  display: block;
  margin-bottom: 0.4rem;
  font-size: 1rem;
  color: #a6783a;
`;

export const Textarea = styled.textarea`
  background-color: #fefdf9;
  color: #333;
  font-family: "Lora", serif;
  border: 1px solid #d8c59a;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #d4af37;
    border-color: #d4af37;
  }
`;

export const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

export const SocialIcon = styled.a`
  margin: 0 1rem;
  font-size: 1.8rem;
  color: #212121;
  transition: color 0.3s;
  animation: ${float} 3s ease-in-out infinite;

  &:hover {
    color: #d4af37;
  }
`;

export const SubmitButton = styled.button`
  background-color: #d4af37;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeSlideUp} 0.7s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  font-size: 1.8rem;

  a {
    color: #a6783a;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #c2945b;
      transform: scale(1.2);
    }
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  margin-bottom: 1rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #d4af37;
    border-color: #d4af37;
  }
`;
