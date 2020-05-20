import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from '_molecules/Card/index.module.scss';

const Card = ({ types, name, sprites, height }) => {
    return (
        <div
            className={classNames(style.blockCard, style[types[0].type.name])}
            style={{ height: `${height}vh` }}
        >
            <img src={sprites.front_default} alt="{name}" />
            <p className={style.type}>{types[0].type.name}</p>
            <p className={style.name}>{name}</p>
        </div>
    );
};

Card.propTypes = {
    types: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.shape({
                name: PropTypes.string,
            }),
        })
    ),
    name: PropTypes.string,
    sprites: PropTypes.shape({
        front_default: PropTypes.string,
    }),
    height: PropTypes.number,
};

Card.defaultProps = { types: undefined, name: undefined, sprites: undefined, height: undefined };

export default Card;
