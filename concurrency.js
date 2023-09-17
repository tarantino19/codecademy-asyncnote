// console.log("I'm learning about");

// for (let idx=0; idx < 999999999; idx++) {}

// // The second console.log() statement is
// // delayed by the for loop's execution
// console.log("the Event Loop");


//nonblocking

// console.log("I’m learning about");
// setTimeout(() => { console.log("Event Loop");}, 2000);
// console.log("the");

// A statement is logged.
// The setTimeout() function is executed.
// A third line of code executes and logs text: “the”.
// Finally, the setTimeout() function timer completes and additional text is logged: “Event Loop”.

//In this case, JavaScript is still single-threaded, but the event loop is enabling something called concurrency.



const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
}
 
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
 
getBeans();
console.log("Describe what happens with this `console.log()` statement as well.");

//1. Heading to the store to buy beans...
// Describe what happens with this `console.log()` statement as well.
// 2. I bought fava beans because they were on sale.
// 3. Great! I'm making fava beans for dinner tonight!

