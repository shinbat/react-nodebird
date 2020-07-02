const { configConsumerProps } = require("antd/lib/config-provider")
const CompressPlugin = require('compression-webpack-plugin');

module.exports = {
    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';
        const plugins = [...config.plugins]
        return {
            ...config,
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval',
            plugins: [...config.plugins],
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {

                    }   
                ]
            }

        }
    }
}