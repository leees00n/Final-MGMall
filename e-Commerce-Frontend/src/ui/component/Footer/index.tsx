import { CSSProperties } from "react";

function Footer() {
  const footerStyle: CSSProperties = {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const textStyle: CSSProperties = {
    fontSize: "14px",
    color: "#666",
    textAlign: "center",
    marginBottom: "10px",
  };

  return (
    <div style={footerStyle}>
      <p style={textStyle}>© 2023 Mega Mall. All rights reserved.</p>
      <p style={textStyle}>123 Shopping Street, Cityville, 12345</p>
      <p style={textStyle}>Email: info@megamall.com</p>
    </div>
  );
}

export default Footer;
