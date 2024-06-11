const mode = document.getElementById("mode");
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const style = mode.getAttribute("href");

console.log("This is " + style)



// function changeModeDark () {
//     mode.setAttribute('href="light.css"', 'href="dark.css"');
// }

// dark.onchange = changeMoreDark;

// button.addEventListener('click', () => {
//     alert('The button was clicked!');
//   });

// dark.addEventListener('click', () => {
//     mode.setAttribute = ("href", "dark.css");
//     console.log("Checking if it worked: " + style)
// });

dark.addEventListener('click', () => {
    mode.setAttribute("href", "dark.css");
    console.log("Checking if it worked: " + mode.getAttribute("href"));
});

// light.addEventListener('click', () => {
//     mode.setAttribute("href", "light.css");
//     console.log("You clicked and made it light " + mode.getAttribute("href"));
// });

light.addEventListener('click', () => {
    mode.setAttribute("href", "light.css");
    console.log("Checking if it worked: " + mode.getAttribute("href"));
});