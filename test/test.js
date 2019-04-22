
const {quickSortBetter2,quickSort2,check} =require("../src/scripts/quicksort")


const chai=require("chai")
const expect=chai.expect
const assert=chai.assert

const fs=require("fs")
const path=require("path")

const files=['antiquicksort10K','antiquicksort20K','antiquicksort50K','antiquicksort100K','antiquicksort250K']
const readFile=function(filename){
    return new Promise((rs,rj)=>{
        fs.readFile(filename,(err,data)=>{
            let array=data.toString().split("\n").map((d)=>parseInt(d))
            rs(array)
        })
    })
}



describe('quicksortTest', function() {
    describe(`# pivot is start`, function() {
        for(let i of files){
            it(i, function(done) {
                readFile(path.resolve(__dirname,i+".txt")).then((array)=>{
                    console.time("start")
                    let a=quickSortBetter2(array,0)
                    console.timeEnd("start")
                    expect(check(a[0])).to.be.equal(true) 
                    done()
                })
            });
        }
    });
    describe(`# pivot is end`, function() {
        for(let i of files){
            it(i, function(done) {
                readFile(path.resolve(__dirname,i+".txt")).then((array)=>{
                    console.time("start")
                    let a=quickSortBetter2(array,1)
                    console.timeEnd("start")
                    expect(check(a[0])).to.be.equal(true) 
                    done()
                })
            });
        }
    });
    describe(`# pivot is middle`, function() {
        for(let i of files){
            it(i, function(done) {
                readFile(path.resolve(__dirname,i+".txt")).then((array)=>{
                    console.time("start")
                    let a=quickSortBetter2(array,2)
                    console.timeEnd("start")
                    expect(check(a[0])).to.be.equal(true) 
                    done()
                })
            });
        }
    });
    describe(`# pivot is random`, function() {
        for(let i of files){
            it(i, function(done) {
                readFile(path.resolve(__dirname,i+".txt")).then((array)=>{
                    console.time("start")
                    let a=quickSortBetter2(array,3)
                    console.timeEnd("start")
                    expect(check(a[0])).to.be.equal(true) 
                    done()
                })
            });
        }
    });
});