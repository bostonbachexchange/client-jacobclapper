import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Panel, H1, H2, P, List, Badge } from "../lessons.styles";
import styled from "styled-components";

const HeroImg = styled.img`
  width: 100%;
  max-height: 360px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: ${({ theme }) => theme.bp.sm}px) {
    max-height: 240px;
  }
`;

const CheckButton = styled.button`
  margin-left: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 2px 8px;
  cursor: pointer;
  font-size: 14px;

  &[aria-pressed="true"] {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default function LessonIntro() {
  const [done, setDone] = useState({});

  const toggle = (k) => setDone((d) => ({ ...d, [k]: !d[k] }));

  return (
    <Panel>
      <H1>How to Prepare for Your First Piano Lesson</H1>
      <P>
        Welcome! A few simple steps will make your first lesson comfortable and
        productive.
      </P>
      <HeroImg
        src={require("../../../assets/images/hands-on-piano.png")}
        alt="Hands at a piano keyboard"
      />
      <H2>
        1) Acquire the necessary materials <Badge>5–10 min</Badge>
      </H2>
      <List>
        <P>
          Find out from your instructor what materials you'll need for your
          lessons. Typically, you'll require the following:
        </P>
        <li>
          <strong>Piano/Keyboard</strong> for home practice
          <CheckButton
            aria-pressed={!!done.piano}
            onClick={() => toggle("piano")}
          >
            {done.piano ? "Done" : "Mark done"}
          </CheckButton>
        </li>
        <li>
          <strong>Sheet Music</strong> / <Link to="books">method books</Link>
          <CheckButton
            aria-pressed={!!done.sheet}
            onClick={() => toggle("sheet")}
          >
            {done.sheet ? "Done" : "Mark done"}
          </CheckButton>
        </li>
        <li>
          <strong>Metronome</strong> (app is fine)
          <CheckButton
            aria-pressed={!!done.metro}
            onClick={() => toggle("metro")}
          >
            {done.metro ? "Done" : "Mark done"}
          </CheckButton>
        </li>
        <li>
          <strong>Notebook</strong> for assignments & notes
          <CheckButton
            aria-pressed={!!done.note}
            onClick={() => toggle("note")}
          >
            {done.note ? "Done" : "Mark done"}
          </CheckButton>
        </li>
      </List>
      <H2>2) Prepare your practice space</H2>
      <P>
        Ensure you have access to a piano or keyboard for practice at home.Set
        up a designated practice area at home where you can focus on your piano
        playing. Ensure good lighting and a comfortable chair. Make sure your
        piano or keyboard is properly positioned at the right height.
      </P>
      <H2>3) Set realistic goals</H2>
      <P>
        Discuss your goals and expectations with your instructor during your
        first lesson. Whether you want to play classical compositions, pop
        songs, or simply improve your musical skills, setting clear and
        achievable goals will help you stay motivated.
      </P>
      <H2>4) Listen to Piano Music</H2>
      <P>
        Start listening to piano music across different genres. This will not
        only inspire you but also help you develop an ear for the nuances of
        piano playing.
      </P>
      <H2>5) Prepare Questions</H2>
      <P>
        Don't hesitate to ask questions during your first lesson. Be curious and
        eager to learn. Your instructor is there to guide you, so seek
        clarification on anything you find challenging or confusing.
      </P>
      <H2>6) Arrive Early and Be Punctual</H2>
      <P>
        On the day of your first lesson, arrive a little early to ensure you
        have time to settle in and get comfortable. Punctuality shows respect
        for your instructor's time and demonstrates your commitment to learning.
      </P>
      <H2>7) Stay Open-Minded and Patient</H2>
      <P>
        Learning to play the piano is a journey that requires time and effort.
        Be patient with yourself, and embrace the learning process with an open
        mind. Mistakes are a natural part of learning, so don't be discouraged
        by them. Instead, use them as opportunities to improve.
      </P>
      <H2>Conclusion</H2>
      <P>
        Preparing for your first piano lesson is an exciting step toward achieving your musical aspirations. By gathering the necessary materials, and adopting a positive and patient mindset, you'll be well on your way to making beautiful music on the piano. Remember, the
        journey of learning is as valuable as the destination, so savor each moment and enjoy the process of becoming a pianist.
      </P>
    </Panel>
  );
}


