const webpackExtra = require('./webpack.extra');

/* eslint no-param-reassign:["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }] */
module.exports = function override(config) {
    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.scss$/,
            use: [
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: ['src/styles/_variables.scss'],
                    },
                },
            ],
        },
    ];
    config.resolve.alias = {
        ...config.resolve.alias,
        ...webpackExtra.resolve.alias,
    };
    return config;
};
