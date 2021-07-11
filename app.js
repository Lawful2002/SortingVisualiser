// Algorithms


async function bubbleSort(arr){

    let n = arr.length;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1-i; j++){

            const h1 = parseInt(arr[j].getAttribute("heightnum"))
            const h2 = parseInt(arr[j+1].getAttribute("heightnum"))              
            

            arr[j].classList.add("selected")
            arr[j+1].classList.add("selected")

            await delay(0);

            // console.log(`${h1} ${h2}`);

            if(h1 < h2){
                let tempH = arr[j].style.height;
                arr[j].style.height = arr[j+1].style.height;
                arr[j+1].style.height = tempH; 

                let tempA = parseInt(arr[j].getAttribute("heightnum"));
                arr[j].setAttribute("heightnum", `${parseInt(arr[j+1].getAttribute("heightnum"))}`);
                arr[j+1].setAttribute("heightnum", `${tempA}`);               
                
                
                let tempC = arr[j].style.backgroundColor;
                arr[j].style.backgroundColor = arr[j+1].style.backgroundColor;
                arr[j+1].style.backgroundColor = tempC;

                // console.log("swap");
                
            }            

            await delay(0);
            

            arr[j].classList.remove("selected")
            arr[j+1].classList.remove("selected")

        }
    }   

}

function merge(arr, l, m, r)
{
    let i, j, k;
    let n1 = m - l + 1;
    let n2 = r - m; 
    
    let L = [], R = []; 
    
    for (i = 0; i < n1; i++)
        L.push(arr[l + i]);
    for (j = 0; j < n2; j++)
        R.push(arr[m + 1 + j]);
 
    i = 0;
    j = 0;
    k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
   
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    } 
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r)
{
    if (l < r) {
        
        let m = parseInt(l + (r - l) / 2); 
        
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
 
        merge(arr, l, m, r);
    }
}


// Utils

function delay(n){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res();
        }, n);
    })
}

function randomNum (range, offset = 0){
    return Math.floor(Math.random()*range + offset);
}

function randColor (){
    
    let r = randomNum(255, 35);
    let g = randomNum(255, 35);
    let b = randomNum(255, 35);

    return `rgb(${r}, ${g}, ${b})`;

}

function createArr(n){

    const main = document.querySelector(".space");

    for(let i=0; i<n; i++){
        const temp = document.createElement("span");
        temp.style.width = "30px";    
        
        let h = randomNum(500, 50);

        temp.style.height = `${h}px`;
        temp.setAttribute("heightnum", `${h}`);
        temp.style.backgroundColor = `${randColor()}`;

        main.appendChild(temp);
    }
}


// Event Listeners
const start = document.querySelector(".start");
start.addEventListener("click", ()=>{
    bubbleSort(arr);
})

// Test

let arr1 = [10, 45, 89, 10, 1, -45, -2, 14, 0, 565, 32];

function printArr(arr){
    let n = arr.length;

    for(let i=0; i<n; i++){
        console.log(arr[i]);
    }

}

createArr(150);
const arr = document.querySelectorAll("span");
