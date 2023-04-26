import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Theme from "../../helpers/Theme/Theme";
export default function Main(props) {
  return (
    <Theme>
      <Navbar />
      {props.children}
      <Footer />
    </Theme>
  );
}
