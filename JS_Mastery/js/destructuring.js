const friends = ['taj', 'raj', 'gach'];
// [taj][raj][gach][][][][][]
// console.log(friends[0])

//[friends]
// [bestFriend=taj][goodFriend=raj][badFriend=gach][][][][][] makes a copy of the values and 
// sets new variable in the memory

// destructuring

const [bestFriend, goodFriend, badFriend] = friends;

console.log(bestFriend, goodFriend, badFriend)