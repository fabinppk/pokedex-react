import {
    SET_POKEMONS,
    SET_INDEX,
    DELETE_POKEMONS,
    SET_ONE_POKEMON,
    SET_VIEWED,
} from '_redux/types';

const initialState = {
    pokemons: [],
    index: { offset: 0, limit: 15 },
    viewed: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: [...state.pokemons, action.payload] };
        case SET_ONE_POKEMON:
            return { ...state, pokemons: [action.payload] };
        case SET_INDEX:
            return { ...state, index: action.payload };
        case DELETE_POKEMONS:
            return { ...state, pokemons: [] };
        case SET_VIEWED:
            return { ...state, viewed: action.payload };
        default:
            return state;
    }
};
