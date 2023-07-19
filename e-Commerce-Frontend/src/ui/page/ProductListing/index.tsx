import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ac1 from "./img1.jpg";
import "./index.css";
import { Button, Container, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ProductListData } from "../../../data/ProductData";
import MockData from "./response2.json";
import BasicNavbar from "../../component/NavbarTop";
import ProductDetails from "../ProductDetails";
import { Link } from "react-router-dom";
import {
  getMockProductResource,
  getProductResource,
  getProductResourceLowToHigh,
} from "../../../resource/GetProductResource";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Footer from "../../component/Footer";
import * as config from "./config";

// Components
import VideoPlayer from "./videoPlayer/VideoPlayer";
//import SignIn from './SignIn';
//import StickerPicker from './StickerPicker';
//import RaiseHand from './RaiseHand';
import {
  FirstCarousel,
  SecondCarousel,
  ThirdCarousel,
} from "../../component/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProductListing() {
  const [productListData, setProductListData] = useState<
    ProductListData[] | undefined
  >(undefined);

  const sortProductLowToHigh = () => {
    setProductListData((prev) => {
      if (!prev) return prev;
      return [...prev].sort((a, b) => a.price - b.price);
    });
  };

  const sortProductHighToLow = () => {
    setProductListData((prev) => {
      if (!prev) return prev;
      return [...prev].sort((a, b) => b.price - a.price);
    });
  };

  useEffect(() => {
    if (productListData === undefined) {
      setProductListData(getMockProductResource());
    }
  }, [productListData]);

  return (
    <>
      <BasicNavbar />
      {/* 배너 섹션 */}
      <div
        style={{
          backgroundColor: "#F2C1C1",
          height: 800,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            width: "100%",
            padding: "auto",
            margin: "20px auto",
            height: 720,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 500,
              height: 720,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FirstCarousel />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 800,
                height: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <VideoPlayer playbackUrl={config.PLAYBACK_URL} />
              </Col>
            </div>
            <div
              style={{
                width: 800,
                height: 300,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ThirdCarousel />
              <div
                style={{
                  margin: "auto 8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "100%",
                }}
              >
                {/* 특가 버튼 */}
                <Button
                  type="button"
                  className="icon"
                  aria-label="Left Align"
                  style={{
                    backgroundColor: "#F2FFFF",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 25,
                      position: "relative",
                      fontFamily: "GmarketSans",
                      marginBottom: 0,
                    }}
                  >
                    Special Price
                  </p>
                </Button>
                {/* 챗봇 */}
                <Button
                  type="button"
                  className="icon"
                  aria-label="Left Align"
                  style={{
                    backgroundColor: "#F2D9D9",
                    border: "1px solid #F23030",
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span>
                    <img
                      className="chatbot"
                      src="chatbot.png"
                      alt="chatbot"
                      style={{ width: 30, height: 30 }}
                    />
                  </span>
                  <p
                    style={{
                      fontSize: 25,
                      position: "relative",
                      fontFamily: "GmarketSans",
                      color: "#F23030",
                      marginBottom: 0,
                    }}
                  >
                    chatbot
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"sorting"}>
        <DropdownButton id="sorting-button" title="Sort By">
          <Dropdown.Item onClick={sortProductLowToHigh}>
            Price: Low to High
          </Dropdown.Item>
          <Dropdown.Item onClick={sortProductHighToLow}>
            Price: High to Low
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <Container className={"product-container"}>
        {productListData?.map((value) => {
          return (
            <Row xs={1} md={2} lg={3} className="g-4">
              <Col className={"column1"}>
                <Card key={value.product_id} className={"each-card"}>
                  <Card.Img
                    className={"card-img"}
                    variant="top"
                    src={value.image_url}
                  />
                  <Card.Body>
                    <Card.Title>{value.product_name}</Card.Title>
                    <Card.Text>
                      🎐${value.price}
                      {value.hasStock ? (
                        <p>Only a few stock left</p>
                      ) : (
                        <p>Sold out</p>
                      )}
                    </Card.Text>
                    {/*<a href="#" className="btn btn-primary" onClick={moveToProductDetails}>Details</a>*/}
                    <Link to={`/product-detail`} state={{ product: value }}>
                      <a href="#" className="btn btn-primary">
                        Details
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}
