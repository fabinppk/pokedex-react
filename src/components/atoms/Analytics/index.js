import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('UA-48509443-13');
};
export const logPageView = (pokemon) => {
    const page = pokemon || window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
};
