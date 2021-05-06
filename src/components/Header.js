import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"></img>
          <span>home</span>
        </a>

        <a>
          <img src="/images/search-icon.svg"></img>
          <span>search</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg"></img>
          <span>watchlist</span>
        </a>

        <a>
          <img src="/images/original-icon.svg"></img>
          <span>originals</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg"></img>
          <span>movies</span>
        </a>

        <a>
          <img src="/images/series-icon.svg"></img>
          <span>series</span>
        </a>
      </NavMenu>

      <UserImg src="\extra\descarga.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 4em;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 2em;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 5em;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 1em;
    cursor: pointer;

    img {
      height: 1.6em;
    }

    span {
      font-size: 0.9rem;
      letter-spacing: 0.2rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-left: 0.3em;
      position: relative;
      display: flex;

      &:after {
        content: "";
        height: 0.2em;
        width: 98%;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.5em;
        opacity: 0;
        transform: scaleX(0);
        transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;
