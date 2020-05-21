import React from 'react';
import PageWrapper from '_templates/PageWrapper';
import SingleSwiper from '_organisms/SingleSwiper';
import { getAllPokemons, getPokemon } from '_utils/requestApi';
import { useDispatch, useSelector } from 'react-redux';
import actions from '_redux/actions';

const Index = () => {
    const { pokemons, index } = useSelector((state) => ({
        ...state.global,
    }));

    const dispatch = useDispatch();

    const defineHeight = () => {
        return ((150 + Math.random() * (220 - 150)) / 10) * 2;
    };

    const createPokemonObj = (infoPokemon) => {
        const height = defineHeight();
        return {
            ...infoPokemon,
            height,
            sprites: {
                front_default: `/${infoPokemon.name}.png`,
            },
        };
    };

    const getAllPokemon = async (reset) => {
        let allPokemons;
        if (reset) {
            await dispatch(actions.deletePokemons());
            allPokemons = await getAllPokemons(0, 15);
        } else {
            allPokemons = await getAllPokemons(index.offset, index.limit);
        }
        await dispatch(actions.setIndex({ offset: index.offset + index.limit, limit: 30 }));

        allPokemons.map(async (pokemon, i) => {
            if (i + index.offset <= index.offset + index.limit) {
                const infoPokemon = await getPokemon(pokemon.url);
                await dispatch(actions.setPokemons(createPokemonObj(infoPokemon)));
            }
        });
    };

    return (
        <PageWrapper
            title="Dashboard - home"
            defineHeight={defineHeight}
            getAllPokemon={getAllPokemon}
        >
            <SingleSwiper
                sectionTitle="Os melhores hotéis estão aqui"
                slides={pokemons}
                withButtons
                getAllPokemon={getAllPokemon}
            />
        </PageWrapper>
    );
};

export default Index;
