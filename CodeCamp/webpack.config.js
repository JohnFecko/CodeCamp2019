const path = require('path');

var client = {
    mode: 'development',
    target: 'web',
    entry: { bundle: "./Scripts/App.jsx" },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/dist/',
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['react', ['env', { 'targets': { 'browsers': '> 5%' } }]] } }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    }
};

var serverRender = { 
    mode: 'development',
    target: 'node',
    entry: { bundle: './Scripts/Server.jsx' },
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, './Scripts/Dist'),
        filename: 'bundle-server.js'
    },
    module: {
        rules: [
            { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['react', ['env', { 'targets': { 'browsers': '> 5%' } }]] } }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    }
};

module.exports = [client, serverRender];