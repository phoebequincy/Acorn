import React, { Component } from 'react';
import {Container, Col, Row } from 'reactstrap';
import '../stylesheets/Acornstyle.css';
import photo1 from '../images/berrytasty.jpg';
import photo2 from '../images/goforaride.jpg';
import photo3 from '../images/pajamawalk.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: photo1,
    altText: 'Heat some cranberry juice and add a splash of lemon and a few slices of fresh ginger.',
    header: 'Hot and berry tasty.',
    caption: 'Heat some cranberry juice and add a splash of lemon and a few slices of fresh ginger.'
  },
  {
    src: photo2,
    altText: 'Grab your bike and head out for a quick ride, even if you just around the block.',
    header: 'Go for a ride.',
    caption: 'Grab your bike and head out for a quick ride, even if you just around the block.'
  },
  {
    src: photo3,
    altText: 'Everyone get in your pajamas and go for a quick walk before bed. Look at the stars, hold hands.',
    header: 'Take a pajama walk.',
    caption: 'Everyone get in your pajamas and go for a quick walk before bed. Look at the stars, hold hands.'
  }
];

  class Acorns extends Component {


    constructor(props){
      super(props);

      this.state = {
        activeIndex: 0,
        acorns:[
          {
          src: photo2,
          altText: 'Grab your bike and head out for a quick ride, even if you just around the block.',
          header: 'Go for a ride.',
          caption: 'Grab your bike and head out for a quick ride, even if you just around the block.'
          }]
      };

      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

    onExiting() {
    this.animating = true;
    }

    onExited() {
    this.animating = false;
    }

    next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }

    randomAcorn = async () => {
        const response = await fetch('http://localhost:3000/acorns')
        const json = await response.json()

        const randomNum = Math.floor(Math.random() * json.length)
        this.setState({
          ...this.state,
          acorns : [json[randomNum], ...this.state.acorns]
        })
      }

render() {
  const { activeIndex } = this.state;

    const slides = this.state.acorns.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}

        >
          <img src={item.src} alt={item.header} />
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>

      );
    });
    return (
      <Container>
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 500px;

                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={ () => {this.next(); this.randomAcorn()} } />
          </Carousel>
        </div>
      </Container>
    );
  }
}

export default Acorns;
