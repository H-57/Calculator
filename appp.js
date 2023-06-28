const input = document.getElementById("input");
let allEntries = JSON.parse(localStorage.getItem("history"));//for local storage

console.log(allEntries)
if (!allEntries) {
  allEntries =[];
  localStorage.setItem("history", JSON.stringify(allEntries));
}



const button = document.getElementsByTagName("button");
Array.from(button).map((elem) => {
  elem.addEventListener("click", () => {
    if (input.value === "+" || "-" || "*" || "/"||"%") {
      input.value = input.value.replace(/[+\-*%/]{2,}/g, (match) =>
        match.slice(-1)
      );
    }
    if (elem.innerText === "=") {
      if (input.value === "") {
        console.log(input.value);
      } else {
        
        allEntries.push(input.value);
        
        localStorage.setItem("history", JSON.stringify(allEntries));
        // window.location.reload()
        input.value = eval(input.value);
        
      }
    } else if (elem.innerText === "C") {
      input.value = "";
      window.location.reload()
    } else if (elem.innerText === "Del") {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += elem.innerText;
    }
  });
});

// create history elements
const history = document.getElementById("history-list");
if(allEntries.length>=1)
  allEntries.forEach((elem) => {
    const listItem = document.createElement("li");
    listItem.textContent = elem;
    history.appendChild(listItem);

  });

//for stus bar time and more icons
const timeElem=document.getElementById('time')
const time=new Date()
timeElem.innerText=`${time.getHours()-12}:${time.getMinutes()}`


// delet local storage
const historydel=document.getElementById('del')
historydel.addEventListener('click', () => {
  localStorage.clear(); 
  window.location.reload()
})
