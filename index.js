function myEach (collection, callback){
        console.log(collection);
        /* check if collection is array or object
            if its an array,copy it 
            if it an object turn the values into an array 
            iterate over new array or object values */
    for (const element in collection) {
        callback(element)
      }
        Object.values(collection)  
      return collection
}
