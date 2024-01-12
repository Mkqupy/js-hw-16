// 1
const users = [
    {name: "Anna",  eyeColor: "blue", gender: "female", isActive: false, age: 19 },
    {name: "Marie",  eyeColor: "brown", gender: "female", isActive: true, age: 22 },
    {name: "Jony",  eyeColor: "brown", gender: "male", isActive: false, age: 20 },
    {name: "Kate",  eyeColor: "green", gender: "female", isActive: true, age: 17 }
];

const usersName = users.map((user) => {
    return user.name;
});

console.log(usersName);


// 2
const getUserByEyeColor = (users, eyeColor) => users.filter(user => user.eyeColor === eyeColor);

const usersWithBrownEyes = getUserByEyeColor(users, "brown");
console.log(usersWithBrownEyes);


// 3
const getUserByGender = (users, gender) => users.filter(user => user.gender === gender);

const usersGender = getUserByGender(users, "female");
console.log(usersGender);


// 4
const getUserByActivity = (users, isActive) => users.filter(user => user.isActive === isActive);

const userIsNotActive = getUserByActivity(users, false);
console.log(userIsNotActive);


// 6
const getUsersByAge = (users) => users.filter(user => user.age >= 18 && user.age <= 25);

const usersInAge = (getUsersByAge(users));
console.log(usersInAge);