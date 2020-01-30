function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
}

Character.prototype.printStats = function () {
    console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHitpoints: " + this.hitpoints);
    console.log("\n-------------\n");
};

Character.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
        console.log(this.name + " is still alive!");
        console.log("\n--------\n")
        return true;
    }
    console.log(this.name + " has died!");
};

Character.prototype.attack = function (character2) {
    character2.hitpoints -= this.strength;
};

Character.prototype.levelUp = function () {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
};

const warrior = new Character("John", "Swordsmen", "Male", 20, 35, 90)
const crusher = new Character("Brenden", "Axmen", "Male", 25, 45, 35)

warrior.printStats();
crusher.printStats();

crusher.attack(warrior);
warrior.printStats();
warrior.isAlive();


crusher.levelUp();
crusher.printStats();

