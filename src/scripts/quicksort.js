const requirejs=require("requirejs")
const {define,config}=requirejs

console.log(requirejs,config)

define(
    "sort",
    ["exports"],
    function (exports) {
        function sort(){

        }
        exports.action=function(){
            console.log("sort")
        }
        return sort;
    }
);

define(
    "sort/quick",
    ["exports","sort"],
    function (exports,sort) {
        function Quick () {
            this.reports = [];
        }
        console.log(exports.action)
        Quick.prototype = new sort();
        return Quick;
    }
);

requirejs(["sort/quick"],(q)=>{
    console.log(q)
})