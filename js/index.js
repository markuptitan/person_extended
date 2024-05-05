function separateLines(textarea) {
  let text = textarea.value;
  let lines = text.split("\n");
  let wordsInLines = [];
  lines.forEach((line) => {
    let words = line.trim().split(" ");
    words = words.filter((word) => word !== "");
    if (words.length > 0) {
      wordsInLines.push(words);
    }
  });
  return wordsInLines;
}

function personFormSubmit() {
  let targetForm = document.querySelector("#mainForm");
  let nameInput = targetForm.querySelector("#name");
  let ageInput = targetForm.querySelector("#age");
  let genderInput = targetForm.querySelector("#gender");
  let interestInput = targetForm.querySelector("#interests");
  let name = nameInput.value;
  let age = ageInput.value;
  let gender = genderInput.value;
  let interests = separateLines(interestInput);
  let testPerson = new Person({ name, age, gender, interests });
  let greeting = testPerson.hello();
  document.getElementById("output").innerText = greeting;
  return false;
}
