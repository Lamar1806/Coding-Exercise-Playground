//Hide function
/*
    Write a setup function that registers a click handler and implements the following logic:

    When clicked the button with the ID "btn" is hidden.
    One second after the click, the button reappears.

    Response:
    I freaked out on this and was look for an id of 'button' instead of 'btn'
    
*/
function setup() {
  // Write your code here.
  let button = document.getElementById("btn");
  button.addEventListener("click",setup);
  button.style.opacity = "0";
  setTimeout(()=>button.style.opacity = "1", 1000)
}

// Example case. 
document.body.innerHTML = `<button type="button" id="btn">Hide Me!</button>`;

setup(); 

var button = document.getElementById('btn');
button.click();
console.log(button.style.display != 'none');