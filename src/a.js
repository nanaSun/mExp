require("seajs")
seajs.config({
    paths: {
        'react': 'http://cdn.bootcss.com/react/16.9.0-alpha.0/cjs',
    },
    alias:{
        'react':"react/react.production.min.js"
    }
});
define("module1", function(require, exports, module) {
    'use strict';
    console.log(require("react"))
    
});
seajs.use("module1")