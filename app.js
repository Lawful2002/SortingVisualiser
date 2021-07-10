function delay(n){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res();
        }, n);
    })
}

async function bubbleSort(arr){

    let n = arr.length;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1-i; j++){

            const h1 = parseInt(arr[j].getAttribute("heightnum"))
            const h2 = parseInt(arr[j+1].getAttribute("heightnum"))              
            

            arr[j].classList.add("selected")
            arr[j+1].classList.add("selected")

            await delay(10);

            console.log(`${h1} ${h2}`);

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

                console.log("swap");
                
            }            

            await delay(0);
            

            arr[j].classList.remove("selected")
            arr[j+1].classList.remove("selected")

        }
    }   

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


// let arr = [10, 45, 89, 10, 1, -45, -2, 14, 0, 565, 32];

// function printArr(arr){
//     let n = arr.length;

//     for(let i=0; i<n; i++){
//         console.log(arr[i]);
//     }

// }

createArr(150);
const arr = document.querySelectorAll("span");
