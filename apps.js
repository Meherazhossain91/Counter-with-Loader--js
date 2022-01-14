
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const h1 = document.getElementById('output');
const count = document.getElementById('count');
const loader = document.querySelector('.loader');


// loader.style.width = '50%';

let counter_value;
let counter;

start.addEventListener('click', function(){

    counter_value = count.value; 
   

   counter =  setInterval(() => {

        h1.innerHTML = counter_value;

        let width = load(count.value, counter_value);

        loader.style.width = `${width}%`


        if (width > 50 && width <= 100){
              loader.style.backgroundColor ='green';

        }else if (width > 30 && width <= 50){
            loader.style.backgroundColor ='black';

       } else if (width <= 30){
        loader.style.backgroundColor ='red';

       }
        

        if (counter_value == 0) {
            clearInterval(counter); 
            
        }
        counter_value--;    
        
    }, 1000);

});