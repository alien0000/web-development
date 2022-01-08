function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        
        var arr=[];
        
        if (n===1){
            arr=[0];
            

        }
        else if(n===2){
            arr=[0,1];
        }
        else{
            arr=[0,1];
            for(var i=2;i<n;i++){
               
                x=arr[i-1]+arr[i-2];
                arr.push(x);
            }
            
        }
        return arr;
   //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
   console.log( fibonacciGenerator (5));
    