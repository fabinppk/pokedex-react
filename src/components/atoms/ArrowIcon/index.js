import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from '_atoms/ArrowIcon/index.module.scss';

export const TYPE = {
    arrowRight: style.arrowRight,
    arrowLeft: style.arrowLeft,
    arrowTop: style.arrowTop,
    arrowBottom: style.arrowBottom,
};

export const COLOR = {
    white: style.white,
    black: style.black,
    primary: style.primary,
    secondary: style.secondary,
    grey: style.grey,
};

export const BOX_COLOR = {
    white: style.bgWhite,
    black: style.bgBlack,
    primary: style.bgPrimary,
    secondary: style.bgSecondary,
    grey: style.bgGrey,
};

const ArrowIcon = ({ type, color, withBox, boxColor, className, label }) => (
    <div
        className={classnames(
            style.icon,
            type,
            color,
            withBox ? style.box : undefined,
            boxColor,
            className
        )}
    >
        {label}
    </div>
);

ArrowIcon.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    withBox: PropTypes.bool,
    boxColor: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
};

ArrowIcon.defaultProps = {
    color: COLOR.black,
    withBox: false,
    boxColor: BOX_COLOR.grey,
    className: undefined,
    label: undefined,
};

export default ArrowIcon;
