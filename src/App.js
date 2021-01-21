import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import wordpressLogo from "./wp.svg";
import Ball from "./components/Ball";
import Title from "./components/Title";
import Subtitle from "./components/SubTitle";

function App() {
  const carouselConfig = {
    numberOfItems: 3,
    infinite: true,
    tabletNumberOfItems: 2,
    mobileNumberOfItems: 1,
  };
  return (
    <>
      <Header logo={logo} />
      <section className="hero">
        <div className="container">
          <Title
            title="Heading"
            additionalClassNames="hero__title heading-1 heading-1--white"
          />
          <Subtitle additionalClassNames="hero__subtitle text--large text--white">
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
          </Subtitle>

          <Carousel config={carouselConfig}>
            <Card title="Heading" icon={wordpressLogo}>
              Lorem ipsum dolor sit amet.
            </Card>
            <Card title="Heading">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea
              uismod bibendum laoreet. Lorem ipsum dolor sit amet
            </Card>
            <Card title="Ultra Mega Super Long Heading">
              Lorem ipsum dolor sit amet.
            </Card>
            {/* For slider presenation only */}
            <Card title="Heading" icon={wordpressLogo}>
              Lorem ipsum dolor sit amet.
            </Card>
            <Card title="Heading">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea
              uismod bibendum laoreet. Lorem ipsum dolor sit amet
            </Card>
            <Card title="Ultra Mega Super Long Heading">
              Lorem ipsum dolor sit amet.
            </Card>
          </Carousel>
        </div>
        <Ball additionalClassNames="hero__ball" />
      </section>
      <main className="main">
        <div className="container">
          <Title title="Heading" additionalClassNames="heading-1 main__title" />
          <Subtitle additionalClassNames="text--large main__subtitle">
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
          </Subtitle>
          <div className="cards">
            <Title
              title="Heading"
              element="h2"
              additionalClassNames="heading-2 cards__title"
            />
            <div className="cards__container">
              <Card title="Heading" icon={wordpressLogo}>
                Lorem ipsum dolor sit amet.
              </Card>
              <Card title="Heading">
                Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea
                uismod bibendum laoreet. Lorem ipsum dolor sit amet
              </Card>
              <Card title="Ultra Mega Super Long Heading">
                Lorem ipsum dolor sit amet.
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
