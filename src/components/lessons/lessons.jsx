import React from "react";
import { Outlet } from "react-router-dom";
import { Shell, Sidebar, SideNav, SideLink, Brand, Content, Panel, H1, P } from "./lessons.styles";

const Lessons = () => (
  <Shell>
    <Sidebar>
      <Brand>
        <b>Jacob Clapper</b>
        <em>Piano Studio</em>
      </Brand>

      <SideNav>
        <SideLink end to="first-lesson">Lesson Overview</SideLink>
        <SideLink to="books">Books</SideLink>
        <SideLink to="materials">Materials</SideLink>
        <SideLink to="practice">Practice</SideLink>
        <SideLink to="resources">Resources</SideLink>
        {/* <SideLink to="comparison">Digital or Paper?</SideLink> */}
        <SideLink to="scaletable">Scale Table</SideLink>
      </SideNav>

      <Panel as="div" style={{marginTop: 16}}>
        <H1 as="h3" style={{marginBottom: 8}}>Private Lessons</H1>
        <P>Clear, goal-driven study for pianists of all levels. Learn musicality, theory, and technique in a supportive studio.</P>
      </Panel>
    </Sidebar>

    <Content>
      <Outlet />
    </Content>
  </Shell>
);

export default Lessons;
