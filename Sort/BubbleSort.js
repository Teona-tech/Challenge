function BubbleSort(arr){

    for (let i=0;i<arr.length;i++){
        while (arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
        }
    }

    return arr;
}

console.log(BubbleSort([10,2,3]));