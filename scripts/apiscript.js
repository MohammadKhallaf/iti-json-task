/// Define the elements
const firstName = document.getElementById("first__name");
const lastName = document.getElementById("last__name");
const userAvatar = document.getElementById("user__avatar");
const entereIdTextView = document.getElementById("entered__ID");
const dropDownList = document.getElementById("drop__down");
const getBtn = document.getElementById("get_data__button");

var responsejs;
window.onload = () => {
  const xhr = new XMLHttpRequest();
  // to make it automatically parse it as object...
  xhr.responseType = "json";
  xhr.onload = function () {
    responsejs = this.response.data;
    // console.log(responsejs);
    buildStudentList(responsejs);
  };
  xhr.open("GET", "https://reqres.in/api/users");
  xhr.send();
};

getBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let chosenId = entereIdTextView.value || dropDownList.value || 1;
  if (chosenId > responsejs.length) {
    alert(`Sorry the maximum ID is ${responsejs.length}`);
    return;
  }
  dropDownList.value = chosenId;
  setDataToView(chosenId)
});


dropDownList.addEventListener("change",()=>{
    let chosenId =dropDownList.value || 1;
    entereIdTextView.value = chosenId;
    setDataToView(chosenId)
})

function setDataToView(chosenId){
    chosenId--;
    let studentData = responsejs[chosenId];
    // console.log(studentData);
    firstName.textContent = studentData.first_name;
    lastName.textContent = studentData.last_name;
    userAvatar.src = studentData.avatar;
}
function buildStudentList(dataOfAPI) {
//   console.log(dataOfAPI);
  dataOfAPI.forEach((element) => {
    // console.log(`${element.first_name} ${element.last_name} with ID: `);
    let option = document.createElement("option");
    option.setAttribute("value", element.id);
    option.textContent = `${element.first_name} ${element.last_name}`;
    dropDownList.append(option);
  });
}
