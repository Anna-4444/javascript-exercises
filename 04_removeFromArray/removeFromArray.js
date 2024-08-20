const removeFromArray = function(array, ...otherArg) {
    const newArray = [];
    array.filter(function (item) {
        if(!otherArg.includes(item)){
            newArray.push(item);
            }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
