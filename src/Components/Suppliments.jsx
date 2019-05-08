import React from "react";
import AliceCarousel from "react-alice-carousel";
import SuppItem from "./SuppItem";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

class Suppliments extends React.Component {
  items = [
    {
      src: "http://lorempixel.com/output/cats-q-c-640-480-1.jpg",
      name: "Supp 1"
    },
    {
      src: "http://lorempixel.com/output/cats-q-c-640-480-2.jpg",
      name: "Supp 2"
    },
    {
      src: "http://lorempixel.com/output/cats-q-c-640-480-3.jpg",
      name: "Supp 3"
    },
    {
      src: "http://lorempixel.com/output/cats-q-c-640-480-4.jpg",
      name: "Supp 4"
    },
    {
      src: "http://lorempixel.com/output/cats-q-c-640-480-5.jpg",
      name: "Supp 5"
    },
    {
      src: "http://lorempixel.com/output/cats-q-c-640-480-6.jpg",
      name: "Supp 6"
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

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}> {i} </span>;
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
    const { galleryItems, responsive, currentIndex } = this.state;

    return (
      <div>
        <div style={{ paddingLeft: "20px" }}>
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={galleryItems}
            mouseDragEnabled={true}
            responsive={responsive}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
            autoPlayInterval={2000}
            autoPlayDirection="ltr"
            autoPlay={true}
            fadeOutAnimation={true}
            disableAutoPlayOnAction={true}
          />

          <ul>{this.items.map(this.thumbItem)}</ul>
        </div>
        <div>
          <button onClick={() => this.slidePrev()}>Prev button</button>
          <button onClick={() => this.slideNext()}>Next button</button>
        </div>
      </div>
    );
  }
}

export default Suppliments;
