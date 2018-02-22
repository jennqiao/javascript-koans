var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */


      var productsICanEat = _.filter(products, function(item) {
        if (item.containsNuts === false) {
          if (_.every(item.ingredients, function(ingredient){
            return ingredient !== "mushrooms";
          }))

            return true;
        }
        return false;
      });


      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    
    var sum = _.range(0,1000).reduce(function(accumulator, number) {
      if (number % 3 ===0 || number % 5 === 0) {
         accumulator += number;
      }
      return accumulator;

    }, 0);    /* try chaining range() and reduce() */

   
    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    //for each product's ingredient array, return number of times mushrooms are used
    //fltten all the arrays
    //sum up the numbers in the array

    /*

    var flatArray =  _(_.map(products, function(product) {
      return product.ingredients;
    })).flatten();

    */

     var flatArray = _.chain(products).map(function(product) {
      return product.ingredients;
     }).flatten().value();



      ingredientCount = _.reduce(flatArray, function(accumulator, item) {

      if (item in accumulator) {
        accumulator[item] += 1;
      }
      else {
        accumulator[item] = 1;
      }

      return accumulator;


    }, ingredientCount);


   




    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
 /*
  it("should find the largest prime factor of a composite number", function (number) {

    //find all the prime numbers up to composite number
    //filter out the ones that are modulo 0 to number
    //reduce to the largest number
    var array = _.range(0,500);

   var largestPrime =
                     _.chain(array)
                     .filter(isPrime)
                     .filter(function(factor) {
                      return 500 % factor === 0;
                     })
                     .reduce(function(accumulator,item) {
                      if (accumulator > item) {
                        return accumulator;
                      }
                      else {
                        return item;
                      }
                     });

    function isPrime (number) {
      var primeBoolean = true;

      for (var i=2; i<number; i++) {

        if (number % i === 0) {
          primeBoolean = false;
        }

      }
      return primeBoolean;

    }

    console.log('largestPrime:'+largestPrime);
  
  });

  */

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {


    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
      //while isdivisible is false
      //loop through array of 1-20, and set isdivisible to true at start
      //if % !== 0, then set it to false
      //if true, return number 
      //else, number++

      //figure out which numbers are prime from 1-20
      //multiply those and start there

      var smallestNumDivisible = 0;
      var factors = _.range(1,21);
      var isDivisible = false;

      while (!isDivisible) {

        smallestNumDivisible +=20;

        isDivisible = _.all(factors, function(factor) {

          return smallestNumDivisible % factor === 0;
        } )

        
      }

      return smallestNumDivisible;
    
  });

   /*

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
