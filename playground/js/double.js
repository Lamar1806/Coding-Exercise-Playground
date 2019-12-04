function setup() {
    // Write your code here.
    document.getElementById("double").addEventListener("click", setup)
    let value = parseInt(document.getElementById("value").value); 
    let newValue = value * 2;
    document.getElementById("value").value = newValue;
    console.log(value)
}

// Example case. 
document.body.innerHTML = `
<form>
  <input id="value" type="text" value="1"/>
  <input id="double" type="button" value="Double"/>
</form>`;

setup();

document.getElementById("double").click(); 
console.log(document.getElementById("value").value);