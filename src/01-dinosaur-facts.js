/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  // Variable will hold the converted length in meters to length in feet
  let lengthInFeet = 0;
  // variable will hold the length of the longest dino
  let longestDinosaurLength = 0;
  // will hold the formatted result which is an object 
  let result = {} ;
  
  // loop through dino array
    for (let i = 0; i < dinosaurs.length; i++) {
      // check if the current dino length in meters is greater than the current longest dino length
        if(longestDinosaurLength < dinosaurs[i].lengthInMeters) {
          longestDinosaurLength = dinosaurs[i].lengthInMeters
          lengthInFeet = longestDinosaurLength * 3.281 

          result =  {[dinosaurs[i].name]: lengthInFeet}
        }
      }
      return result;
}
    // check if current dino length is greater than the current longest dino length X

      // if true, reassign current dino length to longest dino length X

      // convert dino length in meters to feet X

      // update result to be current dino name as key and length in feet as value

    
  
  // return the result


// console.log(getLongestDinosaur(exampleDinosaurData))

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  for (let i = 0; i < dinosaurs.length; i++) { //1st loop through objects array called dinosaurs.

    if (dinosaurs[i].dinosaurId === id) { // if dino id is found

    let dinoName = dinosaurs[i].name; 
    let howToSay = dinosaurs[i].pronunciation;
    let funFact = dinosaurs[i].info;
    let dinoPeriod = dinosaurs[i].period;
    let dinomya = dinosaurs[i].mya;

    /* 
    Destructuring an object
    const {name, pronunciation, info, period, mya} = dinosaurs[i]
    */

      return `${dinoName} (${howToSay})\n${funFact} It lived in the ${dinoPeriod} period, over ${dinomya.length === 1 ? dinomya[0] : dinomya[1]} million years ago.`
    }
  }

return `A dinosaur with an ID of '${id}' cannot be found.`;
}

// Look into ternary operators to better understand

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  let dinosAliveAtCertainPeriodArr = []; //says to return array therefore I create an array
  for (let i = 0; i < dinosaurs.length; i++) { //create loop to go through all object in array

   
    if (dinosaurs[i].mya.length === 2) { //checking to see if the dino was alive btwn the 2 mya yrs
      if(mya <= dinosaurs[i].mya[0] && mya >= dinosaurs[i].mya[1]) { // if year is less than the first number and greater than the second number
        //Inside the above block of code, if statement passes then the dino is alive
        if(dinosaurs[i][key]) { // if above dino that is alive, has a key it passes
          
          dinosAliveAtCertainPeriodArr.push(dinosaurs[i][key]) //dino gets pushed into the array of dinos alive.
        } else {
          dinosAliveAtCertainPeriodArr.push(dinosaurs[i].dinosaurId) // access the id inside the dinosaurs array of object. Dont need 'return' to push into array.
        }
      }
    }

    if (dinosaurs[i].mya.length === 1) {
      // console.log(dinosaurs[i].mya[0] - 1);
      if (mya == dinosaurs[i].mya[0] || mya == dinosaurs[i].mya[0] - 1) { //dino that lived is of that mya or mya - 1 is alive
        if(dinosaurs[i][key]) { //if dino alive has key
          dinosAliveAtCertainPeriodArr.push(dinosaurs[i][key])
          } else {
            dinosAliveAtCertainPeriodArr.push(dinosaurs[i].dinosaurId)
          }
        }
      }
    } 
    console.log(dinosAliveAtCertainPeriodArr)
    return dinosAliveAtCertainPeriodArr;

  }
  getDinosaursAliveMya(exampleDinosaurData, 66, "name")

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
