import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Shell = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(5)};
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: ${({ theme }) => theme.spacing(6)};
  min-height: calc(100vh - 120px);

  @media (max-width: ${({ theme }) => theme.bp.lg}px) {
    gap: ${({ theme }) => theme.spacing(5)};
    padding: ${({ theme }) => theme.spacing(4)};
  }
  @media (max-width: ${({ theme }) => theme.bp.md}px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => theme.spacing(3)};
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

  @media (max-width: ${({ theme }) => theme.bp.md}px) {
    display: none; /* hide full sidebar on small screens */
  }
`;

export const MobileTabs = styled.nav`
  display: none;

  @media (max-width: ${({ theme }) => theme.bp.md}px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(2)};
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const ChipLink = styled(NavLink)`
  white-space: nowrap;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  flex: 0 0 auto;

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    border-color: ${({ theme }) => theme.colors.primary};
  }
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

  @media (max-width: ${({ theme }) => theme.bp.sm}px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const H1 = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing(3)};
  font-size: clamp(22px, 5vw, 34px);
  line-height: 1.2;
`;

export const H2 = styled.h2`
  margin: ${({ theme }) => theme.spacing(5)} 0 ${({ theme }) => theme.spacing(2)};
  font-size: clamp(18px, 3.8vw, 22px);
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  margin: 0 0 ${({ theme }) => theme.spacing(3)};
  font-size: clamp(14px, 3.2vw, 16px);
`;

export const List = styled.ul`
  padding-left: ${({ theme }) => theme.spacing(5)};
  margin: 0 0 ${({ theme }) => theme.spacing(3)};
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
