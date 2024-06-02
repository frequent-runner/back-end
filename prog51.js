arr = [10, 11, 12, 3, 2, 4]
//sort the given array in ascending order

//Algoritham
//get the search item
searchitem = 2
//initialize lower index and upper index
low = 0
up = arr.length - 1
ispresent = false
//sort the given array
arr.sort((a, b) => a - b)
console.log(arr);
count=0
//repeat the above statement until the low and up value meets

for (low <= up) {
    count++
    //mid= low+up/2
    mid = Math.floor((low + up) / 2)

    //-mid=searchitem
    //item found the display

    if (arr[mid] == searchitem) {

        ispresent = true
        break
    }
    //-mid>searchitem
    //up=mid-1
    else if (arr[mid] > searchitem) {
        up = mid - 1
    }
    //mid<search
    //low=mid+1
    else {
        low = mid + 1
    }

}
console.log(count);
console.log(ispresent ? 'present' : 'not present');