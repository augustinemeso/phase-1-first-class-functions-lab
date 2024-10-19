// 1. returnFirstTwoDrivers() - Returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers() - Returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// 3. selectingDrivers - An array containing the two functions defined above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier() - A higher-order function that returns a fare multiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// 5. fareDoubler() - A function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler() - A function that triples the fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers() - Returns either the first two or last two drivers based on the provided function
const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};

// Example usage to verify the functions
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']
console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // Output: ['Amari', 'Mo']
