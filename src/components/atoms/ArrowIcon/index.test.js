import ArrowIcon, { TYPE, COLOR, BOX_COLOR } from '_atoms/ArrowIcon/index';
import React from 'react';
import { shallow } from 'enzyme';

describe('ArrowIcon', () => {
    it('ArrowIcon arrowRight primary rendered', () => {
        const wrapper = shallow(
            <ArrowIcon type={TYPE.arrowRight} color={COLOR.primary} boxColor={BOX_COLOR.primary} />
        );
        expect(wrapper.hasClass('arrowRight primary bgPrimary')).toBe(true);
    });
    it('ArrowIcon arrowleft secondary rendered', () => {
        const wrapper = shallow(
            <ArrowIcon
                type={TYPE.arrowLeft}
                color={COLOR.secondary}
                withBox
                boxColor={BOX_COLOR.secondary}
            />
        );
        expect(wrapper.hasClass('arrowLeft secondary box bgSecondary')).toBe(true);
    });
    it('ArrowIcon arrowTop white rendered', () => {
        const wrapper = shallow(
            <ArrowIcon
                type={TYPE.arrowTop}
                color={COLOR.white}
                withBox
                boxColor={BOX_COLOR.white}
            />
        );
        expect(wrapper.hasClass('arrowTop white box bgWhite')).toBe(true);
    });
    it('ArrowIcon arrowBottom secondary rendered', () => {
        const wrapper = shallow(
            <ArrowIcon
                type={TYPE.arrowBottom}
                color={COLOR.black}
                withBox
                boxColor={BOX_COLOR.black}
            />
        );
        expect(wrapper.hasClass('arrowBottom black box bgBlack')).toBe(true);
    });
});
