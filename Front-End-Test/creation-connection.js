const form1 = document.getElementById("form1");
const tabInput = document.querySelectorAll("input");
console.log(tabInput);
const inputTab = Array.from(tabInput);
console.log(inputTab);

form1.addEventListener("submit", function(){
    console.log(inputTab[0].value);
    console.log(inputTab[1].value);
    console.log(inputTab[2].value);
    console.log(inputTab[3].value);
    console.log(inputTab[4].value);
    console.log(inputTab[5].value);
});