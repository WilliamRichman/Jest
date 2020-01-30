const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//fore Each 
companies.forEach(function (company, index, ) {
    console.log(company.name, index)
});

//filter
//The old way fo doing it with a for loop
/* let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink) */

/* const canDrink = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
});
console.log(canDrink) */


//filter with an arrow function
const canDrink = ages.filter(age => age >= 21)
console.log(canDrink);

//filter retail companies
/* const retailCompanies = companies.filter(function (company) {
    if (company.category === "Retail") {
        return true;
    }
});

console.log(retailCompanies) */

const retailCompany = companies.filter(companies => companies.category === "Retail")
const compStart = companies.filter(companies => companies.start >= 2009)
const eightyComps = companies.filter(companies => companies.start >= 1980 && companies.start < 1990)
const tenYear = companies.filter(companies => (companies.end - companies.start >= 10));



console.log(retailCompany);
console.log(compStart);
console.log(eightyComps);
console.log(tenYear);
//map
// make an array of compaines names
const companyNames = companies.map(company => company.name);
const dates = companies.map(company => `${company.name} [${company.start}-${company.end}]`);
const root = ages.map(age => Math.sqrt(age));
const ageTimesTwo = ages.map(age => age * 2);
//link both maps together 
const both = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);


console.log(companyNames);
console.log(dates);
console.log(root)
console.log(ageTimesTwo);
console.log(both);


//sort
//The old way 
const sortComanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    }
    else {
        return -1;
    }
});


//The arrow way
const sortCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

//sort ages 
const sortAges = ages.sort((a, b) => a - b);
//sort the other direction 
/* const revers = ages.sort((a, b) => b - a); */

console.log(sortComanies);
console.log(sortCompany);
console.log(sortAges);
/* console.log(revers); */

//reduce
// add all the ages together
// the old way 
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}

const ageAdd = ages.reduce((total, age) => total + age, 0);


console.log(ageSum);
console.log(ageAdd);