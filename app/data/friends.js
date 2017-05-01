//make dummy data to compare
//from saturday example

// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var Array = [
  {
    Name: "Susan",
    Photo: "",
    Scores: [1,
    		2,
    		3,
    		4,
    		5,
    		6,
    		7,
    		8,
    		9,
    		10]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;