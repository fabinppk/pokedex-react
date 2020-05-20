import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Logo from '_atoms/Logo/index';

describe('Logo', () => {
    it('Logo img props', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Logo src="src image" alt="Title Logo" />
            </BrowserRouter>
        );
        const { className, src, alt } = wrapper.find('img').props();
        expect(className).toBe('logo');
        expect(src).toBe('src image');
        expect(alt).toBe('Title Logo');
    });
});
