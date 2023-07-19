import Carousel from "react-bootstrap/Carousel";

function FirstCarousel() {
  return (
    <Carousel
      style={{
        fontFamily: "GmarketSans",
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel.Item
        interval={2000}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          className="d-block w-100"
          src={
            // "https://plus.unsplash.com/premium_photo-1676963357751-8b0339f9e468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
          "topBanner2"
          }
          alt="First slide 1"
          style={{
            width: 500,
            height: 720,
            objectFit: "cover",
          }}
        />
      </Carousel.Item>
      <Carousel.Item
        interval={2000}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          className="d-block w-100"
          src={
            "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
          }
          alt="First slide 2"
          style={{
            width: 500,
            height: 720,
            objectFit: "cover",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

function SecondCarousel() {
  return (
    <Carousel
      style={{
        fontFamily: "GmarketSans",
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={
            "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          }
          alt="Second slide 1"
          style={{
            width: 800,
            height: 400,
            objectFit: "cover",
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={
            // "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          "topBanner1.png"
          }
          alt="Second slide 2"
          style={{
            width: 800,
            height: 400,
            objectFit: "cover",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

function ThirdCarousel() {
  return (
    <Carousel
      style={{
        fontFamily: "GmarketSans",
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel.Item
        interval={2000}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          className="d-block w-100"
          src={
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          }
          alt="Third slide 1"
          style={{
            width: 800,
            height: 300,
            objectFit: "cover",
          }}
        />
      </Carousel.Item>
      <Carousel.Item
        interval={2000}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          className="d-block w-100"
          src={
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80"
          }
          alt="Third slide 2"
          style={{
            width: 800,
            height: 300,
            objectFit: "cover",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export { FirstCarousel, SecondCarousel, ThirdCarousel };
