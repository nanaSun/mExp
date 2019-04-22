
//pivot center
// t:0 start 1 end 2 middle 3 random
function quickSort2(arr,t){
    const type=typeof t!=="undefined"?t:"0"
    const array=[...arr]
    const sortInfo=[]
    let times=0
    let partition=function(){}
    function getPivot(start,end){
        let pivot=start,s=start+1,e=end
        switch (type) {
            case 1:
                pivot=end
                s=start
                e=end-1
                partition=partitionEnd
                break;
            case 2:
                pivot=Math.floor((start+end)/2)
                s=start
                e=end
                partition=partitionMiddle
                break;
            case 3:
                pivot=Math.floor((end-start)*Math.random()+start)
                s=start
                e=end
                partition=partitionMiddle
                break;
            default:
                break;
        }
        return {
            pivot:pivot,
            low:s,
            high:e,
            needCheck:needCheck
        }
    } 
    function swap(A,B){
        if(A===B) return
        let tmp=array[A]
        array[A]=array[B]
        array[B]=tmp
    }
    function partitionStart(low,high,pivot){
        const n=array[pivot]
        while(low<=high){
            const ln=array[low]
            if(ln<n){
                low++
            }else{
                swap(low,high)
                high--
            }
        }
        swap(high,pivot)
        return high
    }
    function partitionEnd(low,high,pivot){
        const n=array[pivot]
        while(low<=high){
            const ln=array[low]
            if(ln<n){
                low++
            }else{
                swap(low,high)
                high--
            }
        }
        swap(low,pivot)
        return low
    }
    function partitionMiddle(low,high,pivot){
        const n=array[pivot]
        while(low<=high){
            if(low===pivot){
                low++
            }
            if(high===pivot){
                high--
            }
            const ln=array[low]
            if(ln<n){
                low++
            }else{
                swap(low,high)
                high--
            }
        }
        if(pivot<low){
            swap(high,pivot)
            return high
        }
        swap(low,pivot)
        return low
    }
    function sort(start,end){
        times++
        if(start>=end) return
        const {pivot,low,high}=getPivot(start,end)
        let q=partition(low,high,pivot)
        sort(start,q-1)
        sort(q+1,end)
    }
    sort(0,array.length-1)
    return [array,times]
}
function quickSortBetter2(arr,t){
    const type=typeof t!=="undefined"?t:"0"
    const array=[...arr]
    const sortInfo=[]
    let times=0
    function getPivot(start,end){
        let pivot=start,s=start,e=end
        switch (type) {
            case 1:
                pivot=end
                break;
            case 2:
                pivot=Math.floor((start+end)/2)
                break;
            case 3:
                pivot=Math.floor((end-start)*Math.random()+start)
                break;
            default:
                break;
        }
        return {
            pivot:pivot,
            low:s,
            high:e
        }
    } 
    function swap(A,B){
        if(A===B) return
        let tmp=array[A]
        array[A]=array[B]
        array[B]=tmp
    }
    function partition(low,high,pivot){
        const n=array[pivot]
        let mid=low
        while(mid<=high){
            const ln=array[mid]
            if(ln<n){
                swap(mid,low)
                low++
                mid++
            }else if(ln===n){
                mid++
            }else{
                swap(mid,high)
                high--
            }
        }
        return [low-1,mid]
    }
    function sort(start,end){
        times++
        if(start>=end) return
        const {pivot,low,high}=getPivot(start,end)
        let q=partition(low,high,pivot)
        sort(start,q[0])
        sort(q[1],end)
    }
    sort(0,array.length-1)
    return [array,times]
}
function quickSort(arr,start,end){
    let times=0
    let array=[...arr],sortInfo=[]
    function swap(indexA,indexB,Avalue){
        if(indexA===indexB) return
        array[indexA]= array[indexB]
        array[indexB]=Avalue
        const change=sortInfo[times].change
        const current=change[change.length-1]
        current["swap"]=1
    }
    function sort(start,end){
        
        if(start>=end) return array
        let pivot=Math.floor((start+end)/2)
        let mid=start,high=end
        let low=mid
        let n=array[pivot]
        sortInfo.push({pivot:pivot,change:[]})
        while(mid<=high){
            if(mid===pivot){
                mid++
                continue
            }
            if(high===pivot){
                high--
                continue
            }
           sortInfo[times].change.push({compare:[mid,high],swap:0})
           let sn=array[mid]
           if(sn<n){
                mid++
                low++
           }else{
                swap(mid,high,sn,pivot)
                high--
           }
        }
        sortInfo[times].change.push({compare:[pivot,low],swap:0})
        swap(pivot,low,n)
        times++
        sort(start,low-1)
        sort(low+1,end)
    }
    console.time("quickSort")
    sort(start,end)
    console.log(times)
    console.timeEnd("quickSort")
    return {arr:array,info:sortInfo}
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
// let array=[3,7,8,5,2,1,9,5,4]
// // let array=[0,1,2,3,4,5,6,7].reverse()
// // //center
// const a=quickSortBetter2(array,3)
// check(a)
// console.log(a)

module.exports={quickSort2,quickSortBetter2,check}
