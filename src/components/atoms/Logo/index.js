import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from '_atoms/Logo/index.module.scss';

const Logo = ({ src, alt }) => {
    return (
        <Link to="/" className={style.container}>
            <img className={classNames(style.logo)} src={src} alt={alt} />
        </Link>
    );
};

Logo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

Logo.defaultProps = {
    src: '',
    alt: 'Texto imagem',
};

export default Logo;
