function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        var l=names.length;
        var rand=Math.random();
        var ind=Math.floor( rand*l);
        // console.log(ind);
        var na=names[ind];
        // console.log(na);
        console.log(na+" is"+" going to buy lunch today!")


        
        
        
    
    
    /******Don't change the code below*******/    
    }
    whosPaying(["Banana", "Orange", "Apple", "Mango"]);