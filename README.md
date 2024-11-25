# Person Extended

## Project Description
This project is an implementation of a simple GUI using HTML, CSS, and JavaScript DOM manipulation to display a person's information. It was inspired by the OOP task from the [ACN syllabus](http://syllabus.africacode.net/projects/oop/person/index.html), which introduced concepts such as case handling, constructors, and classes in the Node.js environment.

## Features Implemented So Far
1. **Handle Empty Spaces Cases**: The program handles empty trailing spaces and strings with spaces only by assigning "I have no interests" to empty strings and no input. This is achieved using the `trim` method along with the `map` and `split` functions.
2. **Blinking Cursor Indicator**: A blinking cursor indicates the number of times the form has been submitted. This cursor appears below or beside the text depending on the device being used. Each form submission adds a new cursor. While it might seem like a bug, it adds a unique touch to the application.
3. **Handling Multiple Typed Instances**: Previously, initializing `Typed` more than once led to the previous text being typed in reverse an infinite number of times. This issue was resolved by using a variable called `typedInstance` and calling the `destroy` method every time a new instance is created. Additionally, the `#output` element is cleared on every form submission to ensure a fresh start.

## Conclusion
This project has provided a great opportunity to learn and apply OOP concepts, DOM manipulation, and handling of user input in a web application. It continues to be a work in progress with potential for further enhancements like responsiveness.
