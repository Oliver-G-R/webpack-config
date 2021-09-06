const path = require("path"); // Se requiere el path para tener la ruta actual de donde esta el proyecto
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Esto para cargar el html y el js de todo lo que va tener 
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Esto es el plugin de css para poder convertir y entender el código de sass

module.exports = {
    /**
     * Es la entrada de donde estara nuestro archivo principal y donde tomara todo, el "@babel/polyfill" 
     * es pra tener soporte para async await en react 
     */
    entry: ["./src/index.js"],

    /**
     * Aquí pondremos la ruta de salida del código que ira a producción 
     */
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js", //Llamaremos bundle.js al alrchivo javascript ya transpilado por babel y empaquetado por webpack
    },

    /**
     * Los modulos es donde usaremos los plugins que instalemos, junto con las reglas, estas solo se van a encargar de
     * leer los archivos que van hacer transpilados y empaquetados para que el navegador los entienda
     */
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    "css-loader",
                    "sass-loader",
                ],
            },
            /*   {
                  test: /\.(png|jpe?g|gif)$/i,
                  use: [
                      {
                          loader: "file-loader",
                          options: { name: "assets/[hash].[ext]" },
                      },
                  ],
              }, */

        ],
    },

    plugins: [ // se configuran algunos plugins
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].css",
        }),
    ]
};
