const mode = document.getElementById("mode");
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const style = mode.getAttribute("href");

console.log("This is " + style)

dark.addEventListener('click', () => {
    mode.setAttribute("href", "dark.css");
    console.log("Checking if it worked: " + mode.getAttribute("href"));
});

light.addEventListener('click', () => {
    mode.setAttribute("href", "light.css");
    console.log("Checking if it worked: " + mode.getAttribute("href"));
});