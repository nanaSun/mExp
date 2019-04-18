const fs=require("fs")
const path=require("path")
fs.readFile(path.resolve(__dirname,"antiquicksort10M.txt"),(err,data)=>{
    // let array=data.toString().split("\n").map((d)=>parseInt(d))
    // let a=quickSort(array,0,array.length-1)
    // check(a)
    // let b=quickBetterSort(array,0,array.length-1)
    // check(b)
    // let c=quickEndBetterSort(array,0,array.length-1)
    // check(c)
//     let d=quick3WaySort(array,0,array.length-1)
//     check(d)
    // let e=quick3WayBetterSort(array,0,array.length-1)
    // check(e)
    // let f=quick3WayBetterStartSort(array,0,array.length-1)
    // check(f)
    // let g=quick3WayBetterEndSort(array,0,array.length-1)
    // check(f)
})
//pivot center
function quickSort(arr,start,end){
    let times=0
    let array=[...arr]
    function sort(start,end){
        times++
        if(start>=end) return array
        let pivot=Math.floor((start+end)/2)
        let mid=start,high=end
        let low=mid
        let n=array[pivot]
        while(mid<=high){
            if(mid===pivot){
                mid++
                continue
            }
            if(high===pivot){
                high--
                continue
            }
           let sn=array[mid]
           if(sn<n){
                mid++
                low++
           }else{
                array[mid]= array[high]
                array[high]=sn
                high--
           }
        }
        array[pivot]=array[low]
        array[low]=n
        sort(start,low-1)
        sort(low+1,end)
    }
    console.time("quickSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quickSort")
    return array
}
function quick3WaySort(array,start,end){
    let times=0;
    function sort(start,end){
        times++
        if(start>=end) return array
        //let pivot=Math.floor((start+end)/2)
        let pivot=start
        let pivoti=pivot,pivotj=pivot
        let i=start,j=end
        let n=array[pivot]
        while(i<=j){
            let sn=array[i],en=array[j]
            if(sn===n){
                if(i<pivoti){
                    pivoti--
                    array[i]=array[pivoti]
                    array[pivoti]=n
                }else{
                    i++
                }
            }else if(en===n){
                if(j>pivotj){
                    pivotj++
                    array[j]=array[pivotj]
                    array[pivotj]=n
                }else{
                   j--
                }
            }else if(sn>n&&en<n){
                array[i]=en
                array[j]=sn
                i++
                j--
            }else if(sn<n&&en<n){
                i++
            }else{
                j--
            }
            if(i===pivoti){
                i=pivotj+1
            }
            if(j===pivotj){
                j=pivoti-1
            }
        } 
        let tmp=array[pivot],len=pivotj-pivoti
        if(i<=pivoti&&tmp<=array[i]){
            let tmpi=i
            for(;pivotj>=pivoti;pivotj--){
                array[pivotj]=array[i]
                array[i]=tmp
                i++
            }
            pivoti=tmpi
            pivotj=tmpi+len
        }else if(j>=pivotj&&tmp>=array[j]){
            let tmpj=j
            for(;pivotj>=pivoti;pivoti++){
                array[pivoti]=array[j]
                array[j]=tmp
                j--
            }
            pivoti=tmpj-len
            pivotj=tmpj
        }
        //console.log(JSON.stringify(array))
        sort(start,pivoti-1)
        sort(pivotj+1,end)
    }
    
    console.time("quick3WaySort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quick3WaySort")
    return array
}
//pivot start
function quickBetterSort(arr,start,end){
    let times=0
    let array=[...arr]
    function sort(start,end){
        times++
        if(start>=end) return array
        let pivot=start
        let mid=start,high=end
        let n=array[pivot]
        let low=start
        while(mid<=high){
            if(mid===pivot){
                mid++
                continue
            }
            if(high===pivot){
                high--
                continue
            }
           let sn=array[mid]
           if(sn<n){
                mid++
                low++
           }else{
                array[mid]= array[high]
                array[high]=sn
                high--
           }
        }
        array[pivot]=array[low]
        array[low]=n
        sort(start,low-1)
        sort(low+1,end)
    }
    console.time("quickBetterSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quickBetterSort")
    return array
}
//pivot end
function quickEndBetterSort(arr,start,end){
    let times=0
    let array=[...arr]
    function sort(start,end){
        times++
        if(start>=end) return array
        let pivot=end
        let mid=start,high=end
        let n=array[pivot]
        let low=start
        while(mid<=high){
            if(mid===pivot){
                mid++
                continue
            }
            if(high===pivot){
                high--
                continue
            }
           let sn=array[mid]
           if(sn<n){
                mid++
                low++
           }else{
                array[mid]= array[high]
                array[high]=sn
                high--
           }
        }
        array[pivot]=array[low]
        array[low]=n
        sort(start,low-1)
        sort(low+1,end)
    }
    console.time("quickEndBetterSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quickEndBetterSort")
    return array
}
function quick3WayBetterSort(arr,start,end){
    let times=0
    let array=[...arr]
    function sort(start,end){
        times++
        if(start>=end) return array
        let pivot=Math.floor((start+end)/2)
        let low=start,mid=start,high=end
        let n=array[pivot]
        while(mid<=high){
           let sn=array[mid]
           if(sn<n){
                array[mid]=array[low]
                array[low]=sn
                low++
                mid++
           }else if(sn===n){
                mid++
           }else if(sn>n){
                array[mid]=array[high]
                array[high]=sn
                high--
           }
        }
        sort(start,low-1)
        sort(mid,end)
    }
    console.time("quick3WayBetterSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quick3WayBetterSort")
    return array
}
function quick3WayBetterStartSort(arr,start,end){
    let times=0
    let array=[...arr]
    function sort(start,end){
        times++
        if(start>=end) return array
        let pivot=start
        let low=start,mid=start,high=end
        let n=array[pivot]
        while(mid<=high){
           let sn=array[mid]
           if(sn<n){
                array[mid]=array[low]
                array[low]=sn
                low++
                mid++
           }else if(sn===n){
                mid++
           }else if(sn>n){
                array[mid]=array[high]
                array[high]=sn
                high--
           }
        }
        sort(start,low-1)
        sort(mid,end)
    }
    console.time("quick3WayBetterStartSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quick3WayBetterStartSort")
    return array
}
function quick3WayBetterEndSort(arr,start,end){
    let times=0
    let array=[...arr]
    function sort(start,end){
        times++
        if(start>=end) return array
        let pivot=end
        let low=start,mid=start,high=end
        let n=array[pivot]
        while(mid<=high){
           let sn=array[mid]
           if(sn<n){
                array[mid]=array[low]
                array[low]=sn
                low++
                mid++
           }else if(sn===n){
                mid++
           }else if(sn>n){
                array[mid]=array[high]
                array[high]=sn
                high--
           }
        }
        sort(start,low-1)
        sort(mid,end)
    }
    console.time("quick3WayBetterEndSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quick3WayBetterEndSort")
    return array
}
function check(data){
    let res=true
    for(let i=0;i<data.length-1;i++){
        //console.log(data[i])
        if(data[i]>data[i+1]){
            console.log(data[i],data[i+1])
            res=false
            break
        }
    }
    console.log(res)
    return res
}
// let array=[4, 9, 4, 4, 1, 9, 4, 4, 9, 4, 4, 1, 4]
// let array=[4, 9, 4, 4, 1, 9, 4, 4, 9, 4, 4, 1, 4]
// let array=[4, 9, 4, 4, 1, 9, 4, 4, 9, 4, 4, 1, 4]
let array=[0,1,2,3,4,5,6,7].reverse()
// //center
const a=quickSort(array,0,array.length-1)
check(a)
console.log(a)
//start
const b=quickBetterSort(array,0,array.length-1)
check(b)
//end
const c=quickEndBetterSort(array,0,array.length-1)
console.log(c)
check(c)