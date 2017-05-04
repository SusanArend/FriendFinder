//make dummy data to compare
//from saturday example

// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendData = [{
  "name":"Victory Baby",
  "photo":"https://cdn.meme.am/cache/images/folder667/600x600/1152667/victory-baby.jpg",
  "scores":[ 5, 4, 3, 2, 1, 2, 3, 4, 5, 5}
  }];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;