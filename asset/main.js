
// MILESTONE 1

for(let i=1; i <= 100; i++ ){
    if (i % 3 === 0 && i %  5 === 0){
        console.log("FizzBuzz");

    }else if (i % 3 === 0){
        console.log("Fizz");

    }else if (i % 5 === 0){
        console.log("Buzz")
        
    }else{
        console.log(i);
    }

}

document.getElementById("contenitoreNumeri").innerHTML += `<div class="col-2 py-5 bg-primary text-center m-2">${i}</div>`;
