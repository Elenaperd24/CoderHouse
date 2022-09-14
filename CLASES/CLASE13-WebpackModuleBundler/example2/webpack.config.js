import  path from  'path';

module.exports = {
    //bulding mode
    mode: 'production', 

    //enttry flies
    entry: './src/server.ts',
    
   

    target: 'node',

    //output bundle (location)
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    //file resolution
    resolve : {
        extensions : ['.ts', '.js'],
    },

    //loaders
    module: {
        rules:{
            test :/\.tsx?/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    }
}