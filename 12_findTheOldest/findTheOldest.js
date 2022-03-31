const findTheOldest = function(people) {
    people = people.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    })

    return people.reduce((first, second) => {
        const firstAge = first.yearOfDeath - first.yearOfBirth;
        const secondAge = second.yearOfDeath - second.yearOfBirth;
        return (firstAge > secondAge) ? first : second;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
