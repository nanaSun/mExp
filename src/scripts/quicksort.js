const fs=require("fs")
const path=require("path")
fs.readFile(path.resolve(__dirname,"antiquicksort1M.txt"),(err,data)=>{
    let array=data.toString().split("\n")
    let arrayb=array.map((d)=>parseInt(d))
    let b=quickSort(arrayb,0,arrayb.length-1)
    check(b)
    let arraya=array.map((d)=>parseInt(d))
    let a=quick3WaySort(arraya,0,arraya.length-1)
    check(a)
    let arrayc=array.map((d)=>parseInt(d))
    let c=quick3WayBetterSort(arrayc,0,arrayc.length-1)
    check(c)
})
function quickSort(array,start,end){
    let times=0
    function sort(start,end){
        times++
        if(start>=end) return array
        let pivot=Math.floor((start+end)/2)
        let i=start,j=end
        let n=array[pivot]
        while(i<=j){
            //console.log(JSON.stringify(array),i,j,n)
            let sn=array[i],en=array[j]
            if(i===pivot){
                i++
                continue
            }else if(j===pivot){
                j--
                continue
            }
            if(sn>n&&en<=n){
                array[i]=en
                array[j]=sn
                i++
                j--
            }else if(sn<=n&&en<=n){
                i++
            }else{//en>
                j--
            }
            // console.log(i,j)
        } 
    
        
        let tmp=array[pivot]
        //console.log(i,j,pivot)
        // console.log(array[i],array[j],tmp)
        if(i<pivot&&tmp<array[i]){
            array[pivot]=array[i]
            array[i]=tmp
            pivot=i
        }else if(j>=pivot&&tmp>=array[j]){
            array[pivot]=array[j]
            array[j]=tmp
            pivot=j
        }
        //console.log(JSON.stringify(array),start,end,i,j,pivot)
        sort(start,pivot-1)
        sort(pivot+1,end)
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
function quick3WayBetterSort(array,start,end){
    let times=0
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
    console.time("quick3WayBetterSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quick3WayBetterSort")
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
// let array=[4, 9, 4,6,2 ,4, 9, 1, 1, 1,4, 9, 4, 4, 2,9, 1, 1, 1,4, 9, 4, 4, 9, 1,2, 1, 1,4, 9, 4, 4, 9, 1, 1, 1]
// const a=quick3WayBetterSort(array,0,array.length-1)
// console.log(a)
// check(a)