const Aninmal = function (raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    };
};


const users = new User(post.name, post.email, post.title);


const dogs = new Aninmal(true, "Woof!");
const cats = new Aninmal(true, "Meow!");
const bird = new Aninmal(true, "Tweet Tweet!");



dogs.makeNoise();
cats.makeNoise();
bird.makeNoise();

console.log(bird);


