const findTheOldest = function(list) {
    let oldest = list[0];
    let oldestAge = oldest.yearOfDeath
        ? oldest.yearOfDeath - oldest.yearOfBirth
        : new Date().getFullYear() - oldest.yearOfBirth;

    for (const person of list.slice(1)) {
        const age = person.yearOfDeath
            ? person.yearOfDeath - person.yearOfBirth
            : new Date().getFullYear() - person.yearOfBirth;

        if (age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
