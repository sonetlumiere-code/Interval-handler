let tiempo = null;
let counter = 0;

const start = () => {
  console.log("starting...")
  if(!tiempo) {
    tiempo = setInterval(()=> { 
      counter++;
      console.log(counter)
    }, 1000)  
  }
}

const pause = () => {
  clearInterval(tiempo);
  tiempo = null;
}

const stop = () => {
  clearInterval(tiempo);
  tiempo = null;
  counter = 0;
}