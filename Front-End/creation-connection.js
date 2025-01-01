const formCreate = document.getElementById("create");
const formConnect = document.getElementById("connect");
const tabInput = document.querySelectorAll("input");
console.log(tabInput);
const inputTab = Array.from(tabInput);
console.log(inputTab);

formCreate.addEventListener("submit", function(){
    console.log(inputTab[0].value);
    console.log(inputTab[1].value);
    console.log(inputTab[2].value);
    console.log(inputTab[3].value);
    console.log(inputTab[4].value);
    console.log(inputTab[5].value);
});

formConnect.addEventListener("submit", function(){
    console.log(inputTab[0].value);
    console.log(inputTab[1].value);
    console.log(inputTab[2].value);
    console.log(inputTab[3].value);
    console.log(inputTab[4].value);
    console.log(inputTab[5].value);
});