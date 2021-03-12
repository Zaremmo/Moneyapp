// chceck if local storage exist and if not create one
window.addEventListener("load", function(){
    if(localStorage.getItem("wage") === null){
        localStorage.setItem("wage", "0");
        localStorage.setItem("food", "0");
        localStorage.setItem("clothes", "0");
        localStorage.setItem("other", "0");
    } else {
        food.textContent = `Food ${localStorage.getItem("food")}`;
        clothes.textContent = `Clothes ${localStorage.getItem("clothes")}`;
        other.textContent = `Other ${localStorage.getItem("other")}`;
        theRest.textContent = `The rest ${localStorage.getItem("wage")}`;
    }
});
let wageInput = document.querySelector("#wage-input");
let wageBtn = document.querySelector(".wage-btn");
let spendingInput = document.querySelector("#spending-input");
let spendingtype = document.querySelector("#spendings-type");
let spendBtn = document.querySelector(".spned-btn");
let food = document.querySelector(".food");
let clothes = document.querySelector(".clothes");
let other = document.querySelector(".other");
let theRest = document.querySelector(".the-rest");

//adding new wage
wageBtn.addEventListener("click", function(){
    if(wageInput.value > 0){
        let wage = wageInput.value;
    localStorage.setItem("wage", `${wage}`);
    theRest.textContent = `The rest ${localStorage.getItem("wage")}`;
    wageInput.value = '';

    // reset all spendings
    localStorage.setItem("food", "0");
    localStorage.setItem("clothes", "0");
    localStorage.setItem("other", "0");
    food.textContent = `Food ${localStorage.getItem("food")}`;
    clothes.textContent = `Clothes ${localStorage.getItem("clothes")}`;
    other.textContent = `Other ${localStorage.getItem("other")}`;
    theRest.textContent = `The rest ${localStorage.getItem("wage")}`;

    }
    
});

// adding spending and seting them on list
spendBtn.addEventListener("click", function(){
    let spendtype = spendingtype.value;
    let spnedingInputValue = parseInt(spendingInput.value)
    if(spendtype != "0" && spnedingInputValue > 0){
        let value = parseInt(localStorage.getItem(`${spendtype}`)) + spnedingInputValue;
        localStorage.setItem(`${spendtype}`, `${value}`);
        switch (spendtype) {
           case "food":
            food.textContent = `Food ${value}`;
            break;
          case "clothes":
            clothes.textContent = `Clothes ${value}`;
            break;
          case "other":
            other.textContent = `Other ${value}`;
            break;
        }
     let theRestValue = parseInt(localStorage.getItem(`wage`)) - parseInt(spendingInput.value);
     localStorage.setItem("wage", `${theRestValue}`);
     if (theRestValue < 0){
        theRest.textContent = `Debt ${theRestValue}`;
     } else {
        theRest.textContent = `The rest ${theRestValue}`; 
     }
    
     spendingInput.value = "";

    } 
});

