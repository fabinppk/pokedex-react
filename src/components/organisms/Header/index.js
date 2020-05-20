import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from '_images/logo_beta.png';
import Logo from '_atoms/Logo';
import SearchInput from '_molecules/SearchInput';
import { getPokemonByName } from '_utils/requestApi';

import style from '_organisms/Header/index.module.scss';

const Header = ({ setPokemons, defineHeight, getAllPokemon }) => {
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const getPokemonByNames = async () => {
            let pokemon = null;
            if (searchInput) {
                pokemon = await getPokemonByName(searchInput);
                if (pokemon) {
                    const height = defineHeight();
                    setPokemons([{ ...pokemon, height }]);
                }
            } else if (!pokemon) {
                getAllPokemon(true);
            }
        };

        getPokemonByNames();
        // eslint-disable-next-line
    }, [searchInput]);

    return (
        <header className={style.header}>
            <div className={classNames(style.blockHeader)}>
                <Logo src={logo} alt="logo" />
            </div>
            <SearchInput
                value={searchInput}
                placeholder="Busque seu pokémon"
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
        </header>
    );
};

Header.propTypes = {
    setPokemons: PropTypes.func,
    defineHeight: PropTypes.func,
    getAllPokemon: PropTypes.func,
};

Header.defaultProps = {
    setPokemons: () => {},
    defineHeight: () => {},
    getAllPokemon: () => {},
};

export default Header;
