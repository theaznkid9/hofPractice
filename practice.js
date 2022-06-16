// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(value, index, collection) {
    if (value % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return (_.filter(fruits, function(fruit) {
    return targetFruit === fruit;
  }));
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function(fruit, index, collection) {
    return (fruit[0] === letter);
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookieArray = _.filter(desserts, function(item, index, collection) {
    return (item.type === 'cookie');
  });
  return cookieArray;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(memo, item) {
    return (memo + Number(item.price.slice(1)));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var result = _.reduce(desserts, function(memo, item, index, collection) {
    var currentType = item.type;
    if (memo[currentType] === undefined) {
      memo[currentType] = 1;
    } else {
      memo[currentType]++;
    }
    return memo;
  }, {});
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var result = _.reduce(movies, function(memo, movie, index, collection) {
    if (movie.releaseYear > 1990 && movie.releaseYear < 2000) {
      memo.push(movie.title);
    }
    return memo;
  }, []);
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var result = _.reduce(movies, function(memo, movie, index, collection) {
    if (movie.runtime < timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var result = _.map(fruits, function(fruit, index, collection) {
    return (fruit.toUpperCase());
  });
  return result;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var result = _.map(desserts, function(item, index, collection) {
    if (item.ingredients.includes('flour')) {
      item.glutenFree = true;
    } else {
      item.glutenFree = false;
    }
    //returns the object but with new property and boolean
    return item;
  });
  return result;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var result = _.map(groceries, function(item, index, collection) {
    item.salePrice = '$' + Number.parseFloat(Number(item.price.slice(1)) * (1 - coupon)).toFixed(2);
    return item;
  });
  return result;
};
