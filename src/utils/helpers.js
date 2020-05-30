export const defineHeight = () => {
    return ((150 + Math.random() * (220 - 150)) / 10) * 2;
};

export const createPokemonObj = (infoPokemon) => {
    const height = defineHeight();
    let img;

    try {
        img = require(`../../public/${infoPokemon.name}.png`);
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

export default { createPokemonObj, defineHeight };
