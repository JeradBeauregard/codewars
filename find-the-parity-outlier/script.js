function findOutlier(integers){
    //your code here
    
    // if first number in array is 0 or divisible by two with no remainder
    // loop array to check if each number is divisible by 2 o 0 if number has remainder
    // add to outlier variable return outlier
    if(integers[0] === 0 || integers[0] % 2 === 0){
        for(i=0; i< integers.length; i++){
      if(integers[i] % 2 != 0){
         return integers[i];
         }
    }
    }
      else{
      for(i=0; i<integers.length; i++){
        if(integers[i] === 0 || integers[i] % 2 === 0){
          return integers[i];
        }
      }
    }
  }

  /*You are given an array (which will have a length of at least 3,
   but could be very large) containing integers. The array is either 
   entirely comprised of odd integers or entirely comprised of even 
   integers except for a single integer N. Write a method that takes
   the array as an argument and returns this "outlier" N*/