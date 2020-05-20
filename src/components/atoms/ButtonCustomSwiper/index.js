import React from 'react';
import ArrowIcon, { TYPE, COLOR } from '_atoms/ArrowIcon';
import PropTypes from 'prop-types';

const ButtonCustomSwiper = ({ handleNext, handlePrev }) => (
    <div className="block-swiper-button-custom">
        <button type="button" className="swiper-button-custom-prev" onClick={handlePrev}>
            <ArrowIcon type={TYPE.arrowLeft} color={COLOR.grey} label="Anterior" />
        </button>
        <button type="button" className="swiper-button-custom-next" onClick={handleNext}>
            <ArrowIcon type={TYPE.arrowRight} color={COLOR.grey} label="Próximo" />
        </button>
    </div>
);

ButtonCustomSwiper.propTypes = {
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
};

export default ButtonCustomSwiper;
