1. npm init -y 
2. npm install --save-dev webpack
3. npm install --save-dev webpack-dev-server
4. npm install webpack-cli --save-dev
5. create webpack.config.js
6. add following codes into package.json
"scripts": {
    "start": "webpack-dev-server --output-public-path=/bundles/ --mode development --open --hot",
    "build": "webpack --progress"
} 
7. if it is required to use export/import, then you have to add "type": "module" into your package.json file.