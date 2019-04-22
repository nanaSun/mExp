const requirejs=require("requirejs")
const {define}=requirejs
requirejs.config({
    paths: {
        'react': './react',
    }
})
define("start",[
    'react'
], function(react) {
    'use strict';
    console.log("bbbb")
    console.log(react)
    console.log("aaaa")
});

requirejs("start")