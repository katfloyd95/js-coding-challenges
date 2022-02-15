// 2 - GET INITIALS CHALLENGE

/*
  Create a string and get initials from a first and last name.
  Must be uppercase and separated with a period (".").
  Ex. getInitials("Aaron Jack"), returns "A.J."
*/

function getInitials(fullName) {
  const splitNames = fullName.split(" ");
  return `${splitNames[0][0].toUpperCase()}.${splitNames[1][0].toUpperCase()}.`;
}

console.log(getInitials("katarina floyd"));