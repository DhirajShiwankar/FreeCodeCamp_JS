// ************************************** Question *************************************************************************************************************************
// In this lab, you will create two different stories using a sentence template. You will use variables to store different parts of the story and then output the stories to the console.
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
// User Stories:
// You should declare the following variables using let:
// adjective
// noun
// verb
// place
// adjective2
// noun2
// You should assign the above variables some string values of your choice.
// You should declare a firstStory variable.
// You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";
// You should output your first story to the console using the message "First story: [firstStory]".
// You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.
// You should declare a secondStory variable.
// Create another story using the same template and assign it to the secondStory variable.
// You should output your second story to the console using the message "Second story: [secondStory]".

// ************************************** Answer ****************************************************************************************************************************

let adjective = "brave";
let noun = "dragon";
let verb = "angry";
let place = "mountain";
let adjective2 = "fiery";
let noun2 = "pizza";

let firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`First story: ${firstStory}`);

adjective = "funny";
noun = "cat";
verb = "excited";
place = "city";
adjective2 = "tiny";
noun2 = "fish";

let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`Second story: ${secondStory}`);



// ************************************** Output ***************************************************************************************************************************

// First story: Once upon a time, there was a(n) brave dragon who loved to eat pizza. The dragon lived in a mountain and had fiery nostrils that blew fire when it was angry.
// Second story: Once upon a time, there was a(n) funny cat who loved to eat fish. The cat lived in a city and had tiny nostrils that blew fire when it was excited.
