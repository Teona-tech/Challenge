/**
 * Rotate each element in array by steps
 *  @param {number[]} arr array
 *  @param {number} steps steps 
 *  @return {number[]} The rotated array
 */

 function rotateArr(arr,steps){
    if (arr.length === 0){
        return arr;
    }

    if (steps === 0){
        return arr;
    }

    steps%=arr.length;

    if (steps < 0){
        steps+=arr.length;
    }


    function reverseArr(start,end){
        while(start<end){
          [arr[start],arr[end]]=[arr[end],arr[start]];
          start++;
          end--;
        }
    }

    reverseArr(0,arr.length-1);

    reverseArr(0,steps-1);

    reverseArr(steps,arr.length-1);


    return arr;

}


