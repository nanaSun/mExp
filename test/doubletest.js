
const {quickSortBetter2,quickSort2,check} =require("../src/scripts/quicksort")


const chai=require("chai")
const expect=chai.expect

const files=['start','end','middle','random']
const cols=['single','double','trible']

const Table = require('cli-table');
const table = new Table({
    head: ['num'].concat(files)
});
for(let i of cols){
    table.push([i,0,0,0,0])
}
console.log(table.toString())
const fs=require("fs")
const path=require("path")

const readFile=function(filename,num){
    return new Promise((rs,rj)=>{
        fs.readFile(filename,(err,data)=>{
            console.log(filename)
            let str=data.toString(),newstr=str
            while(num>0){
                newstr += str
                num--
            }
            let array=newstr.split("\n").map((d)=>parseInt(d))
            rs(array)
        })
    })
}
for(let num in cols){
    describe(cols[num], function() {
        describe(`# pivot is start`, function() {
            it(files[0], function(done) {
                readFile(path.resolve(__dirname,'antiquicksort250K.txt'),num).then((array)=>{ 
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,0)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true)
                    table[num][1]=endtime-starttime
                    done()
                })
            });
        });
        describe(`# pivot is end`, function() {
            it(files[1], function(done) {
                readFile(path.resolve(__dirname,'antiquicksort250K.txt'),num).then((array)=>{
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,1)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[num][2]=endtime-starttime
                    done()
                })
            });
        });
        describe(`# pivot is middle`, function() {
                it(files[2], function(done) {
                    readFile(path.resolve(__dirname,'antiquicksort250K.txt'),num).then((array)=>{
                        let starttime=new Date().getTime()
                        let a=quickSortBetter2(array,2)
                        let endtime=new Date().getTime()
                        expect(check(a[0])).to.be.equal(true) 
                        table[num][3]=endtime-starttime
                        done()
                    })
                });
        });
        describe(`# pivot is random`, function() {
            it(files[3], function(done) {
                readFile(path.resolve(__dirname,'antiquicksort250K.txt'),num).then((array)=>{
                    let starttime=new Date().getTime()
                    let a=quickSortBetter2(array,3)
                    let endtime=new Date().getTime()
                    expect(check(a[0])).to.be.equal(true) 
                    table[num][4]=endtime-starttime
                    done()
                    console.log(num,table.toString());
                })
            });
        });
    });
}