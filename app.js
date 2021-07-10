function bubbleSort(arr){

    let n = arr.length;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    printArr(arr);

}

function randomNum (range, offset = 0){
    return Math.floor(Math.random()*range + offset);
}

function randColor (){
    
    let r = randomNum(255);
    let g = randomNum(255);
    let b = randomNum(255);

    return `rgb(${r}, ${g}, ${b})`;

}

function createArr(n){

    const main = document.querySelector(".space");

    for(let i=0; i<n; i++){
        const temp = document.createElement("span");
        temp.style.width = "30px";
        temp.style.height = `${randomNum(800, 50)}px`;
        temp.style.backgroundColor = `${randColor()}`;

        main.appendChild(temp);
    }
}


let arr = [10, 45, 89, 10, 1, -45, -2, 14, 0, 565, 32];

function printArr(arr){
    let n = arr.length;

    for(let i=0; i<n; i++){
        console.log(arr[i]);
    }

}