function separateLines(textarea) {
  let text = textarea.value;
  let lines = text.split("\n");
  let cleanedLines = lines
    .map((line) => line.trim())
    .filter((line) => line !== "");
  return cleanedLines;
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

  if (name.trim() === "" || age.trim() === "") {
    alert("Please fill out all required fields.");
    return false;
  }
  let testPerson = new Person({ name, age, gender, interests });
  let greeting = testPerson.hello();
  document.getElementById("output").innerText = greeting;
  return false;
}
