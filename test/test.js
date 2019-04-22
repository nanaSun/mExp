
const {quickSortBetter2,quickSort2,check} =require("../src/scripts/quicksort")


const chai=require("chai")
const expect=chai.expect

const files=['antiquicksort10K','antiquicksort20K','antiquicksort50K','antiquicksort100K','antiquicksort250K']
const cols=['start','end','middle','random','double start','double end','double middle','double random',
'slow start','slow end','slow middle','slow random','slow double start','slow double end','slow double middle','slow double random']

const Table = require('cli-table');
const table = new Table({
    head: ['pivot'].concat(files)
});
for(let i of cols){
    console.log(i)
    table.push([i,0,0,0,0,0])
}
const fs=require("fs")
const path=require("path")

const readFile=function(filename){
    return new Promise((rs,rj)=>{
        console.log(filename)
        fs.readFile(filename,(err,data)=>{
            let array=data.toString().split("\n").map((d)=>parseInt(d))
            rs(array)
        })
    })
}
const readFile2=function(filename){
    return new Promise((rs,rj)=>{
        console.log(filename)
        fs.readFile(filename,(err,data)=>{
            let str=data.toString()
            let array=(str+str+str+str+str+str+str+str+str+str+str+str).split("\n").map((d)=>parseInt(d))
            rs(array)
        })
    })
}
describe('quicksortTest', function() {
    describe(`# pivot is start`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,0)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[0][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is end`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,1)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[1][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is middle`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,2)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[2][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is random`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,3)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[3][i+1]=endtime-starttime
                    done()
                    //if(i==4) console.log(table.toString());
                })
            });
        }
    });
});
describe('doublequicksortTest', function() {
    describe(`# pivot is start`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,0)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[4][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is end`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,1)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[5][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is middle`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,2)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[6][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is random`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,3)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[7][i+1]=endtime-starttime
                    done()
                    //if(i==4) console.log(table.toString());
                })
            });
        }
    });
});
describe('slowquicksortTest', function() {
    describe(`# pivot is start`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,0)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[8][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is end`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,1)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[9][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is middle`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,2)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[10][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is random`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,3)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[11][i+1]=endtime-starttime
                    done()
                    //if(i==4) console.log(table.toString());
                })
            });
        }
    });
});
describe('slowDoublequicksortTest', function() {
    describe(`# pivot is start`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,0)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[12][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is end`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,1)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[13][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is middle`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,2)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[14][i+1]=endtime-starttime
                    done()
                })
            });
        }
    });
    describe(`# pivot is random`, function() {
        for(let i in files){
            it(files[i], function(done) {
                readFile2(path.resolve(__dirname,files[i]+".txt")).then((array)=>{
                    i=parseInt(i)
                    let starttime=new Date().getTime()
                    let a=quickSort2(array,3)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[15][i+1]=endtime-starttime
                    done()
                    if(i==4) console.log(table.toString());
                })
            });
        }
    });
});