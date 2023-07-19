import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import profileImage from "./icon/profile-user.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  firebaseAuthServiceOnAuthStateChanged,
  firebaseAuthServiceSignOut,
} from "../../../service/AuthService";
import { UserData } from "../../../data/UserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function BasicNavbar() {
  const [currentUser, setCurrentUser] = useState<UserData | undefined | null>(
    undefined
  );
  let navigate = useNavigate();

  const onLoadedCurrentUser = (currentUser: UserData | null) => {
    setCurrentUser(currentUser);
  };
  useEffect(() => {
    firebaseAuthServiceOnAuthStateChanged(onLoadedCurrentUser);
  }, []);

  const onLoginSuccess = () => {
    if (currentUser) {
      return (
        <>
          <button
            type="button"
            className="btn btn-default"
            aria-label="Left Align"
            onClick={userSignOut}
          >
            {/*<span><FontAwesomeIcon icon={solid('user') } /> </span>*/}
            <span>
              <img className={"profile-icon"} src={profileImage} />
            </span>
            {/*{currentUser.email}*/}
            <p>Logout</p>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            type="button"
            className="btn btn-default icon"
            aria-label="Left Align"
          >
            {/*<span><FontAwesomeIcon icon={solid('user')} size={"1x"}/> </span>*/}
            <span>
              <img className={"profile-icon"} src={profileImage} />
            </span>
            {/*{currentUser.email}*/}
            <p>Login</p>
          </button>
        </>
      );
    }
  };

  const userSignOut = () => {
    firebaseAuthServiceSignOut();
  };

  return (
    <>
      <Navbar
        className={"color-Nav"}
        expand="lg"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* NavBar */}
        <Container
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* 쇼핑몰 제목 */}
          <div className={"main-bar"}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Navbar.Brand
                style={{
                  fontFamily: "GmarketSans",
                  fontWeight: 700,
                  fontSize: 50,
                }}
              >
                M E G A - M A L L
              </Navbar.Brand>
            </Link>
          </div>
          {/* 검색 input */}
          <div
            style={{
              borderRadius: 15,
              backgroundColor: "#EFEFEF",
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
              width: "40%",
            }}
          >
            <button
              type="button"
              className="btn btn-default"
              aria-label="Left Align"
            >
              <FontAwesomeIcon
                icon={solid("magnifying-glass")}
                color={"#4f4f4f"}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </button>
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              style={{
                border: "none",
                backgroundColor: "#EFEFEF",
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Link to={`/login/`}>
              <button
                type="button"
                className="btn btn-default"
                style={{
                  borderColor: "transparent",
                }}
              >
                <FontAwesomeIcon
                  icon={solid("user")}
                  color={"#000000"}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: "GmarketSans",
                    marginBottom: 0,
                  }}
                >
                  Login
                </p>
              </button>
            </Link>

            <Link to={`/shoppingcart/`}>
              <button
                type="button"
                className="btn btn-default"
                style={{
                  borderColor: "transparent",
                }}
              >
                <FontAwesomeIcon
                  icon={solid("cart-shopping")}
                  color={"#000000"}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: "GmarketSans",
                    marginBottom: 0,
                  }}
                >
                  Cart
                </p>
              </button>
            </Link>
          </div>
          <div className={"personal-bar"}></div>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicNavbar;
