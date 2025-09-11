import React from "react";
import { Panel, H1, H2, P } from "../lessons.styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const Card = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: ${({ theme }) => theme.colors.muted};
    text-decoration: none;
  }

  h3 { margin-top: 0; margin-bottom: 8px; font-size: 18px; }
  p  { margin: 0; color: ${({ theme }) => theme.colors.subtext}; }
`;

export default function Resources() {
  return (
    <Panel>
      <H1>Piano Learning Resources</H1>

      <H2>Studio Tools</H2>
      <Grid>
        <Card as={Link} to="../scaletable">
          <h3>Scale Chart</h3>
          <p>Major & minor scales with standard fingerings.</p>
        </Card>
      </Grid>

      <H2>Sheet Music & Method Books</H2>
      <Grid>
        <Card href="https://imslp.org/" target="_blank" rel="noreferrer">
          <h3>IMSLP</h3><p>Free public-domain classical scores.</p>
        </Card>
        <Card href="https://pianoadventures.com" target="_blank" rel="noreferrer">
          <h3>Faber & Faber</h3><p>Method books for all levels.</p>
        </Card>
        <Card href="https://www.sheetmusicplus.com/" target="_blank" rel="noreferrer">
          <h3>Sheet Music Plus</h3><p>Large catalog + digital options.</p>
        </Card>
        <Card href="https://www.pianostreet.com/" target="_blank" rel="noreferrer">
          <h3>Piano Street</h3><p>Scores, practice tools, community.</p>
        </Card>
      </Grid>
      <H2>Music Learning and Practice Apps</H2>
      <Grid>
        <Card href="https://www.musictheory.net/"
        target="_blank" rel="noreferrer"
        >
            <h3>MusicTheory.net</h3><p>MusicTheory.net offers free lessons and interactive exercises to improve your music theory knowledge and skills.</p>
        </Card>
        <Card href="https://irealpro.com/"
        target="_blank" rel="noreferrer"
        >
            <h3>iReal Pro</h3><p>iReal Pro is an app for creating and practicing with customizable backing tracks in various styles and genres.</p>
        </Card>
      </Grid>
      <H2>Online Piano Communities and Forums</H2>
      <Grid>
        <Card href="https://www.pianoworld.com/"
        target="_blank" rel="noreferrer"
        >
            <h3>Piano World Forums</h3><p>Piano World is a vibrant online community for piano enthusiasts to discuss various topics, share experiences, and seek advice.</p>
        </Card>
        <Card href="https://www.pianostreet.com/smf/"
        target="_blank" rel="noreferrer"
        >
            <h3>Piano Street Forum</h3><p>The Piano Street Forum is a place for pianists to connect, exchange ideas, and discuss all things related to the piano.</p>
        </Card>
      </Grid>
    </Panel>
  );
}
