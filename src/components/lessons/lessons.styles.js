import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Shell = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(6)};
  min-height: calc(100vh - 120px);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: ${({ theme }) => theme.spacing(4)};
  position: sticky;
  top: ${({ theme }) => theme.spacing(4)};
  height: fit-content;
`;

export const Brand = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  line-height: 1.2;
  b { display:block; }
  em { font-style: normal; font-weight: 500; color: ${({ theme }) => theme.colors.subtext}; }
`;

export const SideNav = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const SideLink = styled(NavLink)`
  display: block;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  text-decoration: none;
  font-weight: 500;

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.muted};
    text-decoration: none;
  }
`;

export const Content = styled.main`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Panel = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};
  padding: ${({ theme }) => theme.spacing(5)};
`;

export const H1 = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing(3)} 0;
  font-size: clamp(24px, 2.2vw, 34px);
  line-height: 1.2;
`;

export const H2 = styled.h2`
  margin: ${({ theme }) => theme.spacing(5)} 0 ${({ theme }) => theme.spacing(2)} 0;
  font-size: clamp(18px, 1.6vw, 22px);
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  margin: 0 0 ${({ theme }) => theme.spacing(3)} 0;
`;

export const List = styled.ul`
  padding-left: ${({ theme }) => theme.spacing(5)};
  margin: 0 0 ${({ theme }) => theme.spacing(3)} 0;
  li { margin: ${({ theme }) => theme.spacing(1)} 0; }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 12px;
`;
