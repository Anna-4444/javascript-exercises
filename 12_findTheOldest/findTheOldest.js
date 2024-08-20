const findTheOldest = function(array) {
    array.map(obj => {
        if (!obj.yearOfDeath) {
            obj.age = (new Date().getFullYear()) - obj.yearOfBirth
        } else {
            obj.age = obj.yearOfDeath - obj.yearOfBirth
        }
    });
    array.sort((a, b) => a.age > b.age ? -1 : 1);
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
