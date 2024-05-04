# person_extended

## Project description
This part was not compulsory, but after finishing the first OOP task called Person I decided to create a UI interface as the project only required a basic understanding of node,
exporting and importing modules and functions. This part which does not contribute to the overall task requirements uses HTML and JS. As of today the 4th of May 2024 I have 
not implemented CSS.

## Stuff I encountered 
### 1. Importing the Person class
As someone with less understanding of JS and having worked on the terminal the previous time, I assumed the require method would work as i just wrote `const { Person } = require('./person')` 
would work. Well, that works on a NodeJS environment but on an interface dealing with the browser I had to manually add the script to the HTML file using the `script` tag.

### 2. Returning false after form submission
Well, after printing the greeting to the browser, we have to prevent the form from actually submitting. This meant modifying the function and returning false after the whole execution
has occured. I also had to write `onsubmit="return personFormSubmit()` to ensure that the form does not proceed to submission.

### 3. Working on a 32-bit Windows machine is tiresome
Okay I'm probably overstepping on this one but uhh, yeah you get the idea of using https://vscode.dev for Development which leads to less extensions. It's just a pain man, I'm glad I'll
continue this on a 64-bit Linux machine from Monday the 6th of May 2024.
