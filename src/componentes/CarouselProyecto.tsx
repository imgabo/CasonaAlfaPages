import { Carousel } from "@mantine/carousel";
import { createStyles, Image } from "@mantine/core";
import proyecto1 from "../assets/Proyecto/proyecto1.png"
import proyecto2 from "../assets/Proyecto/proyecto2.png"
import proyecto3 from "../assets/Proyecto/proyecto3.png"
import proyecto4 from "../assets/Proyecto/proyecto4.png"
import proyecto5 from "../assets/Proyecto/proyecto5.png"
import proyecto6 from "../assets/Proyecto/proyecto6.png"
import proyecto7 from "../assets/Proyecto/proyecto7.png"
import proyecto8 from "../assets/Proyecto/proyecto8.png"
import proyecto9 from "../assets/Proyecto/proyecto9.png"




const CarouselProyecto = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "58vh",
        }}
      >
        <Carousel
          withIndicators
          speed = {3}
          slideGap="md"
          loop
          slideSize="100%"
          align="start"
          
          slidesToScroll={1}
          breakpoints={[
            { maxWidth: "md", slideSize: "100%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
        >
          <Carousel.Slide><Image  height={"58vh"} src={proyecto1} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto2} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto3} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto4} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto5} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto6} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto7} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto8} /></Carousel.Slide>
          <Carousel.Slide><Image  height={"58vh"} src={proyecto9} /></Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselProyecto;
