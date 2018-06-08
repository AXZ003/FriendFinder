// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends =   
[
  {
    name: "Andrea",
    photo: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/19400427_10158822655680034_7503033797250869743_o.jpg?_nc_cat=0&oh=c7c09e716bc207f09c9d78d3fc18b59c&oe=5BBF2D13",
    scores: [
        "4",
        "3",
        "4",
        "1",
        "2",
        "1",
        "3",
        "3",
        "5",
        "5"
    ]
    
  
  },

  {
    name: "Allison",
    photo: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/31143864_10215521612970916_6905524820575277529_n.jpg?_nc_cat=0&oh=c4c88a09d1d0a87073f952530ecf7b89&oe=5B7C9642",
    scores: [
        "1",
        "1",
        "5",
        "1",
        "5",
        "3",
        "3",
        "2",
        "5",
        "2"
    ]
    
  
  },
  

  {
    name: "Hailey",
    photo: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/28685229_10156163138060477_6877844805018166759_n.jpg?_nc_cat=0&oh=febe85c8c974811d42c8f52a7d68de72&oe=5BACA972",
    scores: [
      "4",
      "3",
      "5",
      "4",
      "2",
      "1",
      "3",
      "2",
      "4",
      "1"
    ]
    
  
  },
  {
    name: "Amanda",
    photo: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/13086774_1142431265788501_3469831280090985157_o.jpg?_nc_cat=0&oh=312b3138fa5eb83ec6f3ce9f2626ee83&oe=5B7AE7F4",
    scores: [
      "1",
      "3",
      "5",
      "4",
      "5",
      "3",
      "5",
      "5",
      "1",
      "1"
    ]
    
  
  }
  
]
  
  
  


  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  