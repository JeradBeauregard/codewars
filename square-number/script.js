var isSquare = function(n){
    // tells you if an inputted number is a square number  
      
      if(n < 0){
        return false;
      }
      else{
         for(let i = 0; i*i <= n; i++){
        
        if(i*i === n){
        return true;
        }
      }
      return false;
      }
    }
    