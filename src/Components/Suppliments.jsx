import React from "react";
import AliceCarousel from "react-alice-carousel";
import SuppItem from "./SuppItem";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

class Suppliments extends React.Component {
  items = [
    {
      //src: "http://lorempixel.com/output/cats-q-c-640-480-1.jpg",
      src: require("./assets/1.jpeg"),
      name: "Supp 1"
    },
    {
      src: require("./assets/2.jpeg"),
      name: "Supp 2"
    },
    {
      src: require("./assets/3.jpeg"),
      name: "Supp 3"
    },
    {
      src: require("./assets/4.jpeg"),
      name: "Supp 4"
    },
    {
      src: require("./assets/5.jpeg"),
      name: "Supp 5"
    },
    {
      src: require("./assets/6.jpeg"),
      name: "Supp 6"
    },
    {
      src: require("./assets/7.jpeg"),
      name: "Supp 7"
    }
  ];
  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 3 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}> </span>;
  handleOnDragStart = e => e.preventDefault();
  galleryItems() {
    return this.items.map((item, i) => (
      <SuppItem
        key={i}
        src={item.src}
        name={item.name}
        onDragStart={this.handleOnDragStart}
      />
    ));
  }

  render() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
    const { galleryItems, responsive, currentIndex } = this.state;

    return (
      <div style={{ width: "100%" }}>
      <br/>
        <div
          style={{ float: "left", width: "5%", lineHeight: "20" }}
          onClick={() => this.slidePrev()}
        >
          <IoIosArrowDropleft
            style={{ width: "30px", height: "30px", color: "gray" }}
          />
        </div>
        <div style={{ float: "left", width: "90%" }}>
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={galleryItems}
            mouseDragEnabled={true}
            responsive={responsive}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlay={false}
            fadeOutAnimation={true}
            disableAutoPlayOnAction={true}
          />

         
        </div>
        <div
          style={{ float: "left", width: "5%", lineHeight: "20" }}
          onClick={() => this.slideNext()}
        >
          <IoIosArrowDropright
            style={{ width: "30px", height: "30px", color: "gray" }}
          />
        </div>
      </div>
    );
  }
}

export default Suppliments;
