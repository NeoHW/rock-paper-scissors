# Project: Rock Paper Scissors

Check out the game [here!](https://neohw.github.io/rock-paper-scissors/) :point_left:

&nbsp;

## What is this project about?

This project is a simple rock paper scissors game where players would be able to play on an
interactive webpage developed using HTML, CSS and Javascript.

&nbsp;

## Creating the game

### **Layout of the page**


The layout of the page is created using HTML & CSS, This required knowledge of Flexbox properties such as:
```
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
```

**Thing that I learnt included:**
- Changing the edges of button to rounded corners by using the `border-radius` property.
- Differences between **px** and **%**:
  - **px** is an absolute unit of measurement. Since it does not scale with the width of the browser window, this will be used any time I want to define something to be a particular size instead of being proportional.
  - **%** is a relative unit, which is relative to either the height or width of the parent element. This is a good choice as it scales with width of browser window.
- For text : differences between **px** and **em**/**rem**:
  - **em** is not an absolute unit. It is relative to the currently chosen font size.
  - **rem** is like *em* ; except that it is relative to the base font size of the document.
- Using `visibility: hidden` and `visibility: visible` to let an alert/pop-up appear.

&nbsp;

### **Javascript**


For my first version of the game, I created it purely via Javascript. The game would be played via the alert method for users to input their choice, and the output would be done through the console.

From there on, I added a UI to it. This allowed the users to have a better UX as there were clickable buttons to be used instead of manually typing out the input.

**Concepts I learnt in this stage included:**

- Document Object Model (DOM) and its methods
- Basic manipulations of elements through JavaScript code (adding elements, editing attributes, adding/removing classes, changing inline styles and content).
- `defer` keyword in the `<script>` tag to load the file _after_ the HTML is parsed.
- Using `textContent` instead of `innerHTML` to add text to a DOM element to protect against Javascript injections.
- When using `element.querySelectorAll(selectors)`, it returns a "nodelist" containing references to all of the matches of the _selectors_.
  - "nodelist" is somewhat an array, but have several array methods missing from them.

&nbsp;

### **Git branches**


When creating the second version of the game, I also learnt about the concept of **branching**.

`git branch <branch_name>` creates a new branch.

`git checkout <branch_name>` changes to the branch.

`git branch` allows me to see all the branches available, and the current branch will be indicated with an asterisk.

`git merge <branch_name>` takes the changes commited in `branch_name` and adds them to the branch I'm currently on.
