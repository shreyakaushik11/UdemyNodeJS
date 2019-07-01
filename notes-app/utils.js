console.log('utils.js');
const name = 'Mike';
const add = function(a, b){
    return a+b;
}

//export the variable to use it in other files
module.exports = name;
module.exports = add;
