import React, { Component } from "react";

import "./slider.css";

class Slider extends Component {

    state = {
        slideShow: 0,
        transition: "all 1s",
        direction: null,
        justifyContent: "flex-start",
        btnDisabled: false,
        stopSlider: false,
        intervalSlider: null
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.transition !== this.state.transition) {
            setTimeout(() => {
                this.setState({
                    transition: "all 1s"
                })
            })
        }

        if (prevState.stopSlider !== this.state.stopSlider) {

            if (this.state.stopSlider) {
                clearInterval(this.state.intervalSlider);
            } else {
                this.setState({
                    intervalSlider: setInterval(() => this.nextSlide(-1), 10000)
                })
            }

        }
    }

    componentDidMount() {
        this.setState({
            intervalSlider: setInterval(() => this.nextSlide(-1), 10000)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalSlider)
    }

    nextSlide(direction) {

        const sliderImage = document.querySelector(".slider-image");

        if (this.state.direction === 1) {
            sliderImage.prepend(sliderImage.lastElementChild);

            this.setState((state) => {
                return {
                    slideShow: state.slideShow - 25,
                    btnDisabled: true,
                    stopSlider: true,
                    justifyContent: "flex-start",
                    direction: -1
                }
            })
        } else if (direction === -1) {
            this.setState((state) => {
                return {
                    slideShow: state.slideShow - 25,
                    btnDisabled: true,
                    stopSlider: true,
                    justifyContent: "flex-start",
                    direction: direction
                }
            })
        }
    };


    prevSlide(direction) {

        const sliderImage = document.querySelector(".slider-image");

        if (this.state.direction === -1) {
            sliderImage.appendChild(sliderImage.firstElementChild);

            this.setState((state) => {
                return {
                    slideShow: state.slideShow + 25,
                    btnDisabled: true,
                    stopSlider: true,
                    justifyContent: "flex-end",
                    direction: 1
                }
            })
        } else if (direction === 1) {
            this.setState((state) => {
                return {
                    slideShow: state.slideShow + 25,
                    btnDisabled: true,
                    stopSlider: true,
                    justifyContent: "flex-end",
                    direction: direction
                }
            })
        }
    };

    sliderImage() {

        const sliderImage = document.querySelector(".slider-image");

        if (this.state.direction === -1) {
            sliderImage.appendChild(sliderImage.firstElementChild);
        } else if (this.state.direction === 1) {
            sliderImage.prepend(sliderImage.lastElementChild);
        }

        this.setState({
            slideShow: 0,
            transition: "none",
            btnDisabled: false,
            stopSlider: false
        });
    }

    render() {
        const style = {
            transform: `translateX(${this.state.slideShow}%)`,
            transition: this.state.transition
        };

        return (
            <div className="slider">
                <div className="carousel" style={{justifyContent: this.state.justifyContent}}>
                    <div className="slider-image" style={style} onTransitionEnd={() => this.sliderImage()}>
                        <section>
                            <img src="https://sardorigamberdiyev.github.io/sardormarket/images/img fruits/eda_fruktyi.jpg" alt="image1" />
                        </section>
                        <section>
                            <img src="https://sardorigamberdiyev.github.io/sardormarket/images/img fruits/eda-fruktyi-4.jpg" alt="image2" />
                        </section>
                        <section>
                            <img src="https://sardorigamberdiyev.github.io/sardormarket/images/img fruits/eda_fruktyi.jpg" alt="image3" />
                        </section>
                        <section>
                            <img src="https://sardorigamberdiyev.github.io/sardormarket/images/img fruits/eda-fruktyi-4.jpg" alt="image4" />
                        </section>
                    </div>
                    <div className="controls">
                        <button type="button" className="arrow arrow-prev fa fa-arrow-left" disabled={this.state.btnDisabled}  onClick={() => this.prevSlide(1)} />
                        <button type="button" className="arrow arrow-next fa fa-arrow-right" disabled={this.state.btnDisabled} onClick={() => this.nextSlide(-1)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;