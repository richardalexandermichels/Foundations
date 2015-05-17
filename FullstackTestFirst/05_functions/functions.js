// Functions.js
function concat_string(){
    var args = Array.prototype.slice.call(arguments);
    return args.join("");
}
//concat_string("This", " ", "should", " ", "be done with join.");

var callThisFunction = function() {
    return "Called Value";
};

var andThisFunction = function() {
    return " and Other Value";
    
};

function yourFunctionRunner(){
    var arg_returns=[];
    for(var i = 0; i<arguments.length;i++){
       arg_returns.push(arguments[i]());
    }
   return arg_returns.join("");
}

//yourFunctionRunner(callThisFunction,andThisFunction)
function makeAdder(x){
    return function(y){
        return x+y;
    };
}
makeAdder(2);
var adderOf2function = makeAdder(2);

//adderOf2function(5);

function once(func){
    var ran = false;
    return function(){
        if(!ran){
            ran = true;
            func();   
        }
    };
}


function createObjectWithTwoClosures(){
    var val=0;
    var objectWithTwoClosures ={
       oneIncrementer: function(){
           val++;
       },
       tensIncrementer: function(){
           val+=10;
       },
       getValue: function(){
           return val;
       }
   };
   return objectWithTwoClosures;
}











