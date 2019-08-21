/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whether the function is called by "new"
* 2. If the function is called by "call()" "apply()" or "bind()"
* 3. If the function is being called to act as a method
* 4. if the function is called in the global scope (strict mode:enabled = "undefined")
*
* write out a code example of each explanation above
*/



// Principle 1
console.log("principle 1");
// code example for Window Binding
"use strict"
function bestBand(bandName) {
    console.log(this);
    return bandName;
}
bestBand("Archspire");



// Principle 2
console.log("principle 2");
// code example for Implicit Binding
const petNames = {
    declaration: "I have the best pets.",
    declareFunc: function(names) {
        console.log(`${this.declaration} Their names are ${names}!`);
        console.log(this);
    }
};
petNames.declareFunc("Nova, Quasar, Lady, and Bear");



// Principle 3
console.log("principle 3");
// code example for New Binding
function wifeNameChange(wn1, wn2){
    this.name1 = wn1;
    this.name2 = wn2;
    this.newName = function() {
        console.log(`My wife changed her name from ${this.name1} to ${this.name2}`)
    }
}

const wifeName1 = new wifeNameChange("Zoey Rei", "Zoey Antuñano");
const wifeName2 = new wifeNameChange("amateur baker", "professional baker");

wifeName1.newName();
wifeName2.newName();



// Principle 4
console.log("principle 4");
// code example for Explicit Binding
wifeName1.newName.call(wifeName2);
wifeName2.newName.apply(wifeName1);