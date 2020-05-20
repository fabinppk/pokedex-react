import {
    SET_POKEMONS,
    SET_INDEX,
    DELETE_POKEMONS,
    SET_ONE_POKEMON,
    SET_VIEWED,
} from '_redux/types';

const setPokemons = (payload) => {
    return (dispatch) => {
        dispatch({ type: SET_POKEMONS, payload });
    };
};

const setOnePokemon = (payload) => {
    return (dispatch) => {
        dispatch({ type: SET_ONE_POKEMON, payload });
    };
};

const deletePokemons = () => {
    return (dispatch) => {
        dispatch({ type: DELETE_POKEMONS });
    };
};

const setIndex = (payload) => {
    return (dispatch) => {
        dispatch({ type: SET_INDEX, payload });
    };
};

const setViewed = (payload) => {
    return (dispatch) => {
        dispatch({ type: SET_VIEWED, payload });
    };
};

export default {
    setPokemons,
    setOnePokemon,
    deletePokemons,
    setIndex,
    setViewed,
};
