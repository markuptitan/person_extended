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
      return "I have no interests.";
    }
    if (this.interests.length === 1) {
      return `My interest is ${this.interests[0]}.`;
    }
    const interestsText =
      this.interests.slice(0, -1).join(", ") +
      " and " +
      this.interests.slice(-1);
    return `My interests are ${interestsText}.`;
  }
}

function personFormSubmit() {
  const form = document.getElementById("mainForm");
  let typedInstance;
  const name = form.name.value.trim();
  const age = form.age.value.trim();
  const gender = form.gender.value;
  const interests = form.interests.value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
  if (!name || !age) {
    alert("Please fill out all required fields.");
    return false;
  }
  const person = new Person(name, age, gender, interests);
  const greeting = person.hello();
  if (typedInstance) {
    typedInstance.destroy();
  }
  document.getElementById("output").textContent = "";
  const submitButton = document.getElementById("submit-button");
  submitButton.disabled = true;
  typedInstance = new Typed("#output", {
    strings: [greeting],
    typeSpeed: 50,
    backSpeed: 25,
    loop: false,
    onComplete: () => {
      submitButton.disabled = false;
    },
  });

  return false;
}
