import React from "react";
import { Outlet } from "react-router-dom";
import {
  Shell, Sidebar, SideNav, SideLink, Brand,
  Content, Panel, H1, P, MobileTabs, ChipLink
} from "./lessons.styles";

const links = [
  { to: "first-lesson", label: "Lesson Overview" },
  { to: "books",        label: "Books" },
  { to: "materials",    label: "Materials" },
  { to: "practice",     label: "Practice" },
  { to: "resources",    label: "Resources" },
  { to: "scaletable",   label: "Scale Table" }
];

const Lessons = () => (
  <Shell>
    {/* Mobile chips */}
    <MobileTabs aria-label="Lessons navigation">
      {links.map(l => (
        <ChipLink key={l.to} to={l.to} end={l.to === "first-lesson"}>
          {l.label}
        </ChipLink>
      ))}
    </MobileTabs>

    {/* Desktop sidebar */}
    <Sidebar>
      <Brand>
        <b>Jacob Clapper</b>
        <em>Piano Studio</em>
      </Brand>
      <SideNav>
        {links.map(l => (
          <SideLink key={l.to} to={l.to} end={l.to === "first-lesson"}>
            {l.label}
          </SideLink>
        ))}
      </SideNav>
      <Panel as="div" style={{ marginTop: 16 }}>
        <H1 as="h3" style={{ marginBottom: 8 }}>Private Lessons</H1>
        <P>Clear, goal-driven study for pianists of all levels. Learn musicality, theory, and technique in a supportive studio.</P>
      </Panel>
    </Sidebar>

    <Content>
      <Outlet />
    </Content>
  </Shell>
);

export default Lessons;

// const Lessons = () => (
//   <Shell>
//     <Sidebar>
//       <Brand>
//         <b>Jacob Clapper</b>
//         <em>Piano Studio</em>
//       </Brand>

//       <SideNav>
//         <SideLink end to="first-lesson">Lesson Overview</SideLink>
//         <SideLink to="books">Books</SideLink>
//         <SideLink to="materials">Materials</SideLink>
//         <SideLink to="practice">Practice</SideLink>
//         <SideLink to="resources">Resources</SideLink>
//         <SideLink to="scaletable">Scale Table</SideLink>
//       </SideNav>

//       <Panel as="div" style={{marginTop: 16}}>
//         <H1 as="h3" style={{marginBottom: 8}}>Private Lessons</H1>
//         <P></P>
//       </Panel>
//     </Sidebar>

//     <Content>
//       <Outlet />
//     </Content>
//   </Shell>
// );

// export default Lessons;
