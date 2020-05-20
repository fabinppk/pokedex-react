import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCustomSwiper from '_atoms/ButtonCustomSwiper';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper';
import Card from '_molecules/Card';

class SingleSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewed: 0,
        };
    }

    componentDidMount() {
        const handleResize = () => {
            if (this.swiper) {
                this.swiper.update();
            }
        };

        window.addEventListener('resize', handleResize);
    }

    /* istanbul ignore next */
    onChangeSlide = () => {
        const { index, getAllPokemon } = this.props;
        const { viewed } = this.state;
        if (this.swiper.activeIndex > viewed) {
            getAllPokemon();
            this.setState({ viewed: this.swiper.activeIndex + index.limit });
        }
    };

    /* istanbul ignore next */
    goNext = () => {
        if (this.swiper) {
            this.swiper.slideTo(this.swiper.activeIndex + 3);
        }
    };

    /* istanbul ignore next */
    goPrev = () => {
        if (this.swiper) {
            this.swiper.slideTo(this.swiper.activeIndex - 3);
        }
    };

    render() {
        const { slides, withButtons } = this.props;

        const params = {
            slidesPerView: 'auto',
            spaceBetween: 8,
            freeMode: false,
            loop: false,
            updateOnWindowResize: true,
            // pagination: {
            //     el: '.custom-swiper-pagination',
            //     modifierClass: 'custom-swiper-pagination',
            //     clickable: true,
            // },
            getSwiper: (swiper) => {
                this.swiper = swiper;
            },
            on: {
                slideChange: this.onChangeSlide,
            },
        };

        setTimeout(() => {
            if (this.swiper) {
                this.swiper.update();
            }
        }, 100);

        return (
            <>
                <div className="block-custom-swiper-single">
                    <Swiper {...params}>
                        {slides.map((slide) => (
                            <div key={slide.id}>
                                <Card {...slide} />
                            </div>
                        ))}
                    </Swiper>
                    {withButtons && (
                        <ButtonCustomSwiper handleNext={this.goNext} handlePrev={this.goPrev} />
                    )}
                </div>
            </>
        );
    }
}

SingleSwiper.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object),
    sectionTitle: PropTypes.string,
    sectionSubtitle: PropTypes.string,
    withButtons: PropTypes.bool,
    showPoints: PropTypes.bool,
    index: PropTypes.shape({
        offset: PropTypes.number,
        limit: PropTypes.number,
    }),
    getAllPokemon: PropTypes.func.isRequired,
};

SingleSwiper.defaultProps = {
    slides: [],
    sectionTitle: '',
    sectionSubtitle: '',
    withButtons: false,
    showPoints: true,
    index: {},
};

export default SingleSwiper;
