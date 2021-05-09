import React from "react";
import Header from "../../parts/header";
import Hero from "../../parts/hero";
import Footer from "../../parts/footer";
import TabMenu from "../../parts/tab-menu";

export default function Details(props) {
  const { children, hero, movie } = props;
  return (
    <React.Fragment>
      <Header />
      <Hero hero={hero} movie={movie} />
      {children}
      <Footer />
      <TabMenu />
    </React.Fragment>
  );
}
