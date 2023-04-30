//Data Type 1: Family Member or Friend

const people = ["Mom", "Dad", "Brother", "Sister", "Jimmy", "Samuel"];

//Data Type 2: Inspirational Quote

const inspQuote = [
    "The wound is the place where the Light enters you. -Rumi ",
    "Be the change you wish to see in the World. -Gandhi",
    "We can't take any credit for our talents. It's how we use them that counts. -Madeleine L'Engle.",
    "Life without love is like a tree without blossoms or fruit. -Khalil Gibran",
    "Love looks not with the eye, but with the mind. -William Shakespeare",
    "Do you realize how many events and choices that had to occur wince the birth of the univers, leading to the making of you just exactly the way you are? -Mrs. Which"
]

//Data Type 3: A function that Randomly Generates a Number

const randomNumber = () => {
    let randNum = Math.floor(Math.random() * 6);
    return randNum;
}

//Function that Randomly Generates the Message Using the Randomly Generated Number and Other Data Types

const generateMessage = (randNumOne, randNumTwo) => {
    let dataTypeOne = people[randNumOne];
    let dataTypeTwo = inspQuote[randNumTwo];
    return `${dataTypeOne} always used to say "${dataTypeTwo}" when I was younger. It always made me feel better.`;
}

//Log Output of the Randomly Generated Message to the Console
console.log(generateMessage(randomNumber(), randomNumber()));
