class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello() {
        const mainString = `Hello, my name is ${this.name}, my gender is ${this.gender} and I am ${this.age} years old.`;
        const interestText = this.generateInterestsText();
        return `${mainString} ${interestText}`;
    }

    generateInterestsText() {
        if (this.interests.length === 0) {
            return 'I have no interests.';
        }
        if (this.interests.length === 1) {
            return `My interest is ${this.interests[0]}.`;
        }
        const interestsText = this.interests.slice(0, -1).join(', ') + ' and ' + this.interests.slice(-1);
        return `My interests are ${interestsText}.`;
    }
}
