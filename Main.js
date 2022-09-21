console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket');
    },3000)
});

const getPopcorn =promiseWifeBringingTicks.then((t) =>{
    console.log('wife: i have the ticks');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`${t}popcorn`));
});

const getbutter =getPopcorn.then((t) =>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t}butter`));
});

getbutter.then((t)=>console.log(t))


console.log('person4: shows ticket');
console.log('person5: shows ticket');


//promise async await
console.log('person1: shows ticket');
console.log('person2: shows ticket');



const preMovie = async()=>{
    const promisewifebringingticks=new Promise((resolve,reject) =>{
        setTimeout(()=> resolve('ticket'), 3000);
    });

    const getpopcorn =new Promise((resolve, reject) => resolve(`popcorn`));
    const addbutter =new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks =new Promise((resolve, reject) => resolve(`colddrink`));
    let ticket = await promisewifebringingticks;

    console.log('wife: i have the ticks');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getpopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addbutter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: i need butter on my popcorn');
    console.log('husband: thank you for the reminder *grins*');

    let colddrink = await getColdDrinks;

    console.log(`husband: i got some ${colddrink} and some ${butter} on popcorn also`);
    console.log('wife: thank you darling');


    return ticket;

}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');



console.log('person1: shows ticket');
console.log('person2: shows ticket');

//promise.all
const preMovie = async()=>{
    const promisewifebringingticks=new Promise((resolve,reject) =>{
        setTimeout(()=> resolve('ticket'), 3000);
    });

    const getpopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
    const getcandy = new Promise((resolve,reject)=> resolve(`candy`));    
    const getcoke = new Promise((resolve,reject)=> resolve(`coke`));

    let ticket = await promisewifebringingticks
    let [popcorn,candy,coke] = await Promise.all([getpopcorn,getcandy,getcoke])
    
    console.log(`${popcorn}, ${candy}, ${coke}`)
    
    return ticket;

}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

//trip
function buycar(){
    return new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Buy a car')
    },5000)
})
}

function planatrip(){
    return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve('Lets go to Manali')
    },2000)
})
}
  
  function reachmanali(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
           resolve('Reached Manali') 
          },1000)
    })
  }
  
  function gotofamousmountain(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve('Reached Montain')
          },1000)
        })
    }
    

async function fun1(){
  const msg = await buycar();
  console.log(msg)
  const msg2 = await planatrip()
  console.log(msg2);
  const msg3 = await reachmanali()
  console.log(msg3);
  const msg4 = await gotofamousmountain()
  console.log(msg4)
}
fun1()