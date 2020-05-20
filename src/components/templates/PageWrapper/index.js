import React from 'react';
import PropTypes from 'prop-types';
import Header from '_organisms/Header';

import style from '_templates/PageWrapper/index.module.scss';

const PageWrapper = ({ children, setPokemons, defineHeight, getAllPokemon }) => {
    return (
        <>
            <Header
                setPokemons={setPokemons}
                defineHeight={defineHeight}
                getAllPokemon={getAllPokemon}
            />
            <div className={style.masterContent}>
                <section className={style.content}>{children}</section>
            </div>
        </>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.node,
    setPokemons: PropTypes.func.isRequired,
    defineHeight: PropTypes.func.isRequired,
    getAllPokemon: PropTypes.func.isRequired,
};

PageWrapper.defaultProps = {
    children: undefined,
};

export default PageWrapper;
