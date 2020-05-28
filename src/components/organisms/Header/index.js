import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from '_images/logo_beta.png';
import Logo from '_atoms/Logo';
import SearchInput from '_molecules/SearchInput';
import { getPokemonByName } from '_utils/requestApi';
import { useDispatch } from 'react-redux';
import actions from '_redux/actions';

import style from '_organisms/Header/index.module.scss';

const Header = ({ defineHeight, getAllPokemon }) => {
    const [searchInput, setSearchInput] = useState('');

    const dispatch = useDispatch();

    const createPokemonObj = (infoPokemon) => {
        const height = defineHeight();
        let img;

        try {
            img = require(`../../../../public/${infoPokemon.name}.png`);
        } catch (error) {
            console.log('Não encontrou: ', `${infoPokemon.name}.png`);
            img = infoPokemon.sprites.front_default;
        }
        return {
            ...infoPokemon,
            height,
            sprites: {
                front_default: img,
            },
        };
    };

    useEffect(() => {
        const getPokemonByNames = async () => {
            let pokemon = null;
            if (searchInput) {
                pokemon = await getPokemonByName(searchInput.toLowerCase());
                if (pokemon) {
                    await dispatch(actions.setOnePokemon(createPokemonObj(pokemon)));
                    await dispatch(actions.setIndex({ offset: 0, limit: 15 }));
                }
            } else if (!pokemon) {
                getAllPokemon(true);
                await dispatch(actions.setViewed(0));
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
    defineHeight: PropTypes.func,
    getAllPokemon: PropTypes.func,
};

Header.defaultProps = {
    defineHeight: () => {},
    getAllPokemon: () => {},
};

export default Header;
