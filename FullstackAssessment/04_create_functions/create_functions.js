function createFunctions(n, arr, count){
    var done = arr || [];
    var counter = count || 0;
    if(done.length === n){
        return done;
    }
    done.push(function(){return counter});
    return createFunctions(n, done, counter+1);
}
