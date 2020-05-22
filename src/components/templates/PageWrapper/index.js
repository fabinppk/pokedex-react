import React from 'react';
import PropTypes from 'prop-types';
import Header from '_organisms/Header';
import Footer from '_organisms/Footer';

import style from '_templates/PageWrapper/index.module.scss';

const PageWrapper = ({ children, defineHeight, getAllPokemon }) => {
    return (
        <>
            <Header defineHeight={defineHeight} getAllPokemon={getAllPokemon} />
            <div className={style.masterContent}>
                <section className={style.content}>{children}</section>
            </div>
            <Footer />
        </>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.node,
    defineHeight: PropTypes.func.isRequired,
    getAllPokemon: PropTypes.func.isRequired,
};

PageWrapper.defaultProps = {
    children: undefined,
};

export default PageWrapper;
