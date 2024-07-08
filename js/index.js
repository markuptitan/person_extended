function personFormSubmit() {
    const form = document.getElementById('mainForm');
    let typedInstance;
    const name = form.name.value.trim();
    const age = form.age.value.trim();
    const gender = form.gender.value;
    const interests = form.interests.value.split('\n').map(line => line.trim()).filter(line => line);
    if (!name || !age) {
        alert('Please fill out all required fields.');
        return false;
    }
    const person = new Person(name, age, gender, interests);
    const greeting = person.hello();
    if (typedInstance) {
        typedInstance.destroy();
    }
    document.getElementById('output').textContent = '';
    typedInstance = new Typed('#output', {
        strings: [greeting],
        typeSpeed: 50,
        backSpeed: 25,
        loop: false
    });

    return false;
}
