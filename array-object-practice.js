// ARRAY TO OBJECT PRACTICE

// Array to Object I
// fruits in a database
const fruits = [
  "orange", "orange", "apple", "orange", "apple", "pear"
];
// ouput: {orange: 3, apple: 2, pear: 1}
const fruitCounts = {};
for (let fruit of fruits) {
  if (fruitCounts[fruit]) { // if the fruit exists
    fruitCounts[fruit]++; // then add another fruit
  } else {
    fruitCounts[fruit] = 1; // otherwise, the fruit count is 1
  }
}

console.log(fruitCounts); // output: {orange: 3, apple: 2, pear: 1}

// Array to Object II
// creating a simple "map"
function arrayToObject1() {

}

const users = [
  {username: "aaron", fullName: "Aaron Jack", description: "Software developer"},
  {username: "jan", fullName: "Jan Frey", description: "Shopify developer"},
  {username: "igor", fullName: "Igor Kalishakov", description: "Massage therapist"}
];

// {username: full user object}
const usersMap = {};
for (let user of users) {
  console.log(user.username);
  usersMap[user.username] = user; // emptyObject[key] = object element belonging to the ket
}

console.log(usersMap.aaron); // outputs the object element for that user

// Array to Object III
// creating a complex "map"
const tweets = [
  {day: 'Monday', text: "I'm tired"},
  {day: 'Monday', text: "Need coffee"},
  {day: 'Tuesday', text: "Feeling better"},
  {day: 'Friday', text: "Ready to party"},
  {day: 'Friday', text: "Lost my phone..."}
]

// {Monday: [text1, text2], Tuesday: [text3]}
const tweetsByDay = {};
for (let tweet of tweets) {
  console.log(tweet.day);
  console.log(tweet.text);
  if (tweetsByDay[tweet.day]) { // if there exists a tweet text from the same day already, then this tweet text is pushed to the array
    tweetsByDay[tweet.day].push(tweet.text);
  } else {
    tweetsByDay[tweet.day] = [tweet.text]; // set the key to the day, and create an array with the tweet text
  }
  console.log(tweetsByDay)
}

console.log(tweetsByDay);