import React, { useState } from 'react';
import PageWrapper from '_templates/PageWrapper';
import SingleSwiper from '_organisms/SingleSwiper';
import { getAllPokemons, getPokemon } from '_utils/requestApi';

const Index = () => {
    const [pokemons, setPokemons] = useState([]);
    const [index, setIndex] = useState({ offset: 0, limit: 15 });

    const defineHeight = () => {
        return ((150 + Math.random() * (220 - 150)) / 10) * 2;
    };

    const getAllPokemon = async (reset) => {
        let allPokemons;
        if (reset) {
            setPokemons([]);
            allPokemons = await getAllPokemons(0, 15);
        } else {
            allPokemons = await getAllPokemons(index.offset, index.limit);
        }
        setIndex({ offset: index.offset + index.limit, limit: 30 });

        allPokemons.map(async (pokemon, i) => {
            if (i + index.offset <= index.offset + index.limit) {
                const infoPokemon = await getPokemon(pokemon.url);
                const height = defineHeight();
                setPokemons((p) => [...p, { ...infoPokemon, height }]);
            }
        });
    };

    return (
        <PageWrapper
            title="Dashboard - home"
            setPokemons={setPokemons}
            defineHeight={defineHeight}
            getAllPokemon={getAllPokemon}
        >
            <SingleSwiper
                sectionTitle="Os melhores hotéis estão aqui"
                slides={pokemons}
                withButtons
                setIndex={setIndex}
                index={index}
                getAllPokemon={getAllPokemon}
            />
        </PageWrapper>
    );
};

export default Index;
