// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = 
    {
      name: "Andrea",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
          4,
          3,
          4,
          1,
          2,
          1,
          3,
          3,
          5,
          5
      ]
      
    
    };
  
  


  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  