console.log('Hi Utilities..!');

const data = 'Amit Kumar';

const multiply = function(a,b){
    return a*b;
}

const helper = function(data){
    console.log(`${data}`+' is user..!');
}

module.exports = {multiply,data,helper};