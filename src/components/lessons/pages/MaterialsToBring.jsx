// src/components/lessons/pages/MaterialsToBring.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Panel, H1, H2, P } from "../lessons.styles"; // <= lowercase path

// Responsive helpers local to this page
const Hero = styled.img`
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

const Row = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.bp.md}px) {
    flex-direction: column;
  }
`;

const MiniImg = styled.img`
  height: 70px;
  flex: 0 0 auto;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const List = styled.ul`
  padding-left: ${({ theme }) => theme.spacing(5)};
  margin: 0 0 ${({ theme }) => theme.spacing(3)};
  li { margin: ${({ theme }) => theme.spacing(1)} 0; }
`;

export default function MaterialsToBring() {
  return (
    <Panel>
      <H1>Essential Materials & Resources</H1>

      <H2>Choosing the right piano or keyboard</H2>
      <Hero
        src="https://cdn.regent.edu/wp-content/uploads/2022/03/steinway-sons-showcases-piano-spirior-regent-university-1760x990.png"
        alt="Grand piano on stage"
      />

      <H2>Advantages of a traditional piano</H2>
      <List>
        <li><strong>Authentic sound:</strong>  Acoustic pianos produce a rich, authentic sound that many musicians cherish. The complexity and warmth of the tone add depth to classical music interpretations.</li>
        <li><strong>Tactile experience:</strong> Playing a traditional piano offers a tactile experience as you feel the weight of the keys and the vibration of the strings. This touch sensitivity allows for nuanced playing techniques, crucial for classical pianists.</li>
        <li><strong>Stability:</strong> High-quality acoustic pianos are built to last for generations, making them enduring family heirlooms and investments in musical tradition.</li>
      </List>

      <H2>Advantages of digital keyboards</H2>
      <List>
        <li><strong>Portability:</strong>  Digital keyboards are portable and can be easily moved. Their lightweight design is perfect for musicians on the go.</li>
        <li><strong>Variety of sounds:</strong> You can access a wide range of sounds, from piano to synthesizers, on a digital keyboard.</li>
        <li><strong>Headphones:</strong> Digital keyboards allow for silent practice with headphones, ideal for quiet environments or late-night practicing without disturbing others.</li>
      </List>

      <H2>Disadvantages</H2>
      <List>
        <li><strong>Cost:</strong> pianos can vary in cost depending on quality and durability </li>
        <li><strong>Size:</strong> acoustic and grand pianos need dedicated space; digitals and upright pianos are more compact.</li>
      </List>

      <P>
        <em>Choose based on budget, space, and preferences.</em>
      </P>

      <H2>Exploring sheet music</H2>
      <P>For steady progress, assemble a mix of:</P>
      <List>
        <li><strong>Method books</strong> for structure (<Link to="../books">see recommendations</Link>).</li>
        <li><strong>Classical repertoire</strong> (e.g., Beethoven, Mozart, Chopin).</li>
        <li><strong>Contemporary pieces</strong> (pop, jazz, film, and more).</li>
      </List>
      <P>Buy locally or use reputable online shops and apps for PDFs.</P>

      <H2>The metronome: a rhythmic necessity</H2>
      <Row>
        <div style={{flex: "1 1 30px"}}>
          <P>
            A metronome is a vital tool for every pianist. It helps you maintain proper timing and rhythm during practice sessions. Today, metronomes come in various forms, from traditional mechanical ones to digital apps that you can install on your smartphone or computer.
          </P>
        </div>
        <MiniImg
          src="https://d1aeri3ty3izns.cloudfront.net/media/27/279420/600/preview_1.jpg"
          alt="Mechanical metronome"
        />
      </Row>
      <P>
        Invented by <em>Johann Nepomuk Maelzel</em>, it enabled precise tempo practice long before digital tools.
      </P>

      <H2>Keeping a notebook for success</H2>
      <P>Keeping a notebook can significantly aid your piano learning journey. Here are some materials and options for taking notes:</P>
      <List>
        <li><strong>Pen & paper</strong> The classic method for jotting down notes, practice assignments, and progress.</li>
        <li><strong>Digital notes</strong> (OneNote, Notion, Evernote) for searchability.</li>
        <li><strong>Lesson recordings</strong> (with permission) to review details.</li>
      </List>

      <H2>Helpful apps</H2>
      <List>
        <li>
          <strong><a href="https://apps.apple.com/us/app/piano-adventures-player/id991354392" target="_blank" rel="noreferrer">
            Piano Adventures Player
          </a>:</strong> interactive accompaniments for method books.
        </li>
        <li><strong>Sheet-music scanners</strong> to digitize printed scores.</li>
        <li>
          <strong>Metronome apps</strong> like{" "}
          <a href="https://apps.apple.com/us/app/metronome-%CF%9F/id416443133" target="_blank" rel="noreferrer">
            MetroTimer
          </a>.
        </li>
      </List>

      <P>
       In conclusion, whether you choose a traditional piano or a digital keyboard, access to sheet music, a metronome, and a notebook can significantly enhance your piano learning journey. Explore various options and use technology to your advantage by incorporating apps into your practice routine. Remember, the key to success is dedication, practice, and a love for the music you create. Happy playing!
      </P>
    </Panel>
  );
}
