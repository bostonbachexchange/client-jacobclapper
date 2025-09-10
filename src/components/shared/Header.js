import React, { memo } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "@mdi/react";
import { mdiGoogle, mdiFacebook, mdiYoutube, mdiInstagram } from "@mdi/js";

// Inline styles kept (you can move these to CSS/styled-components later)
const linkStyle = {
  color: "whitesmoke",
  textDecoration: "none",
  fontSize: "24px",
  justifyContent: "space-between",
  marginLeft: 12,
  marginRight: 12,
};

const authStyle = {
  color: "black",
  textDecoration: "none",
  fontSize: "24px",
  justifyContent: "space-between",
  marginLeft: 12,
  marginRight: 12,
};

const brandStyle = {
  color: "white",
  padding: 0,
  textDecoration: "none",
  justifyContent: "center",
  fontSize: "28px",
  fontWeight: 700,
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/media", label: "Media" },
  { to: "/blog", label: "Blog" },
  { to: "/lessons", label: "Lessons" },
  { to: "/contact", label: "Contact" },
  // { to: "/calendar", label: "Calendar" }, // keep for later if needed
];

const authLinks = [
  { to: "update-blog", label: "Update Blog" },
  { to: "update-calendar", label: "Update Calendar" },
  { to: "change-password", label: "Change Password" },
  { to: "sign-out", label: "Log Out" },
];

const socialLinks = [
  { href: "https://www.facebook.com/jacobrclapper", icon: mdiFacebook, color: "#3b5998", label: "Facebook" },
  { href: "mailto:clapperpianist@gmail.com", icon: mdiGoogle, color: "rgb(80,199,199)", label: "Email" },
  { href: "https://www.instagram.com/clapperpianist/", icon: mdiInstagram, color: "#cd486b", label: "Instagram" },
  { href: "https://www.youtube.com/channel/UCZdJrUGgra3dvMQdsDrOJ0g", icon: mdiYoutube, color: "#c4302b", label: "YouTube" },
];

const Header = ({ user }) => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        className="border-bottom border-3 mb-0 p-2"
      >
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="m-auto align-items-center">
            {/* Left links */}
            {navLinks.slice(0, 2).map(({ to, label }) => (
              <Nav.Item key={to} className="m-auto">
                <Link to={to} style={linkStyle}>
                  <span className="HoverClass1">{label}</span>
                </Link>
              </Nav.Item>
            ))}

            {/* Center brand */}
            <Navbar.Brand className="m-auto">
              <Link to="/" style={brandStyle}>
                Jacob Clapper
              </Link>
            </Navbar.Brand>

            {/* Right links */}
            {navLinks.slice(2).map(({ to, label }) => (
              <Nav.Item key={to} className="m-auto">
                <Link to={to} style={linkStyle}>
                  <span className="HoverClass1">{label}</span>
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>

        {/* Social icons (top-right) */}
        <div
          className="m-3 d-flex gap-2"
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          {socialLinks.map(({ href, icon, color, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon path={icon} title={label} size={1} color={color} style={{ marginRight: 11 }} />
            </a>
          ))}
        </div>
      </Navbar>

      {user && (
        <Navbar bg="light" expand="md" className="border-bottom border-3">
          <Nav className="m-auto">
            {authLinks.map(({ to, label }) => (
              <Nav.Item key={to} className="m-2">
                <Link to={to} style={authStyle}>
                  <span className="hoverClass1">{label}</span>
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar>
      )}
    </>
  );
};

export default memo(Header);
