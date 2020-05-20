import ButtonCustomSwiper from '_atoms/ButtonCustomSwiper/index';
import React from 'react';
import { shallow } from 'enzyme';

describe('ButtonCustomSwiper', () => {
    it('ButtonCustomSwiper default rendered', () => {
        const wrapper = shallow(<ButtonCustomSwiper handleNext={() => {}} handlePrev={() => {}} />);
        expect(wrapper.get(0).props.children.length).toBe(2);
        expect(wrapper.get(0).props.children[0].type).toBe('button');
    });
    it('ButtonCustomSwiper prev render', () => {
        const wrapper = shallow(<ButtonCustomSwiper handleNext={() => {}} handlePrev={() => {}} />);
        const buttonHandlePrev = jest.fn(wrapper.get(0).props.children[0].props.onClick);
        buttonHandlePrev();
        expect(buttonHandlePrev).toBeCalled();
        expect(wrapper.get(0).props.children[0].props.className).toBe('swiper-button-custom-prev');
    });
    it('ButtonCustomSwiper next render', () => {
        const wrapper = shallow(<ButtonCustomSwiper handleNext={() => {}} handlePrev={() => {}} />);
        const buttonHandleNext = jest.fn(wrapper.get(0).props.children[1].props.onClick);
        buttonHandleNext();
        expect(buttonHandleNext).toBeCalled();
        expect(wrapper.get(0).props.children[1].props.className).toBe('swiper-button-custom-next');
    });
});
