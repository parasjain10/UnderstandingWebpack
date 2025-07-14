const { type } = require("os");
const path=require("path");
module.exports={
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"./dist"), // __dirname is the current directory
        publicPath: "dist/" // This is the path where the output files will be served from
        // Assets will be served from the 'dist' directorys
    },
    mode:"none",
    module: {
        rules:[
            {
                test: /\.(png|jpg)$/,
                type:"asset/resource" ,// "assets/inline" , "assets"
                parser :{
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10kb - files smaller than this will be inlined as base64 strings
                        // If the file is larger than this, it will be emitted as a separate file
                        // and linked to in the JavaScript file.
                        // You can change this value to any size you want.
                        // For example, if you want to inline files smaller than 20kb, you can
                        // set the maxSize to 20 * 1024
                        // or if you want to inline files smaller than 5kb, you can set the
                        // maxSize to 5 * 1024
                        // This is useful for small images that you want to inline in the JavaScript file
                        // to reduce the number of HTTP requests made by the browser.
                        // If you want to inline all images, you can set the maxSize to Infinity
                        // or you can use the "asset/inline" type instead of "asset/resource"
                        // If you want to use the "asset/inline" type, you can remove the
                        // parser option and it will automatically inline all images smaller than the default limit
                        // of 8kb.
                    }
                }
            },
            {
                test: /\.txt/,
                type:"asset/source" // This will emit the file as a separate file and link to it in the JavaScript file
                // This is useful for text files that you want to load in the JavaScript file
                // and you want to keep the original file structure.
                // If you want to inline the text file as a string in the JavaScript file,
                // you can use "asset/inline" type instead.
            },
            {
                test: /\.css$/,
                use: [
                "style-loader","css-loader" // This css-loader is Use it to read and resolve CSS files,
                // while style-loader is used to inject css into DOM 
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader","css-loader","sass-loader" 
                ] // webpack process loaders from right to left, 
                // first it will load sass-loader and then other loaders
                // sass-loader converts sass-> css
            },
            {
                 test:/\.js$/,
                 exclude:/node_modules/,
                 use :{
                    loader: "babel-loader",
                    options:{
                        presets:["@babel/env"],
                        plugins:["@babel/plugin-proposal-class-properties"]
                    }
                 }

            }
        ]
    }
}

// "asset/inline" are used for small images, "asset/resource" is used for larger images
    // "asset/inline" will convert the image to a base64 string and embed it in the
    // JavaScript file, while "asset/resource" will create a separate file for the image
    // and link to it in the JavaScript file.

    // type: "assets" // is used to automatically choose between "asset/inline" and "asset/resource"
    // based on the size of the file. If the file is smaller than the limit,
    // it will be inlined, otherwise it will be emitted as a separate file.
    // The default limit is 8kb, but you can change it by setting the "asset/inline" or "asset/resource" type.
    // For example, if you want to inline files smaller than 10kb, you can
    // set the limit to 10000 bytes:
