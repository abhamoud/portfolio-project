import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  );
}
