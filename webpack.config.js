//* Dependencia
const HtmlWebpackPlugin = require('html-webpack-plugin');

//* Encuentra la direccion multiplataforma
const path = require('path');


//? Exporta codigo de desarrollo a codigo de produccion que puede ser interpretado por el servidor
module.exports = {
    entry: './src/app/index.js',
    //? Direccion y archivo de produccion
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //? Asignacion del puerto en desarrollo
    devServer: {
        port: 3000
    },
    //? Convierte el html del proyecto en codigo de produccion
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}