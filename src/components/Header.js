import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      } else {
        dispatch(
          setUserLogin({
            name: null,
            email: null,
            photo: null,
          })
        );
        history.push("/login");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        (history.push("/login"),
        (
          <LoginContainer>
            <Login onClick={signIn}>Login</Login>
          </LoginContainer>
        ))
      ) : (
        <>
          <NavMenu>
            <a>
              <Link to="/">
                <img src="/images/home-icon.svg"></img>
                <span>home</span>
              </Link>
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

          <UserImg onClick={signOut} src={userPhoto} />
        </>
      )}
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
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 3em;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 1em;
    cursor: pointer;
    color: white;
    text-decoration: none;

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

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spcaing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
