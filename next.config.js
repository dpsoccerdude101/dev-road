const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, {defaultConfig}) => {
    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            // development only config options here
        }
    }

    return {
        // basePath: '.',
        // env: {
        //     apiKey: 'keyValue'
        // },
        pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', '^(?!test).*$'],
        webpack: (config, {dev, isServer}) => {
            if(!dev && !isServer) {
                Object.assign(config.resolve.alias, {
                    react: 'preact/compat',
                    'react-dom/test-utils': 'preact/test-utils',
                    'react-dom': 'preact/compat'
                })
            }
            return config
        }
    }
}