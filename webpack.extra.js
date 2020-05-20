const path = require('path');

module.exports = {
    resolve: {
        alias: {
            _atoms: path.resolve(__dirname, 'src/components/atoms'),
            _molecules: path.resolve(__dirname, 'src/components/molecules'),
            _organisms: path.resolve(__dirname, 'src/components/organisms'),
            _templates: path.resolve(__dirname, 'src/components/templates'),
            _config: path.resolve(__dirname, 'src/config'),
            _images: path.resolve(__dirname, 'src/images'),
            _pages: path.resolve(__dirname, 'src/pages'),
            _styles: path.resolve(__dirname, 'src/styles'),
            _routes: path.resolve(__dirname, 'src/routes'),
            _utils: path.resolve(__dirname, 'src/utils'),
            _helpers: path.resolve(__dirname, 'src/helpers'),
            _redux: path.resolve(__dirname, 'src/redux'),
        },
    },
};
