import React from "react";
import Carousel from "../../parts/carousel";
import Footer from "../../parts/footer";
import Header from "../../parts/header";
import TabMenu from "../../parts/tab-menu";

export default function General(props) {
  const { children, carousel, genres } = props;
  return (
    <React.Fragment>
      <Header />
      <Carousel resource={carousel} genres={genres} />
      <main className="py-2">{children}</main>
      <Footer />
      <TabMenu />
    </React.Fragment>
  );
}
