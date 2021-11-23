//// index page elements
const userName = document.getElementById("username");
const userPassword = document.getElementById("password");
const remember = document.getElementById("remember");
const loginBtn = document.getElementById("loginButton");
const loginCookiesBtn = document.getElementById("loginCookiesButton");
const consoleTextView = document.getElementById("console__text");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("username ", userName.value);
  console.log("password ", userPassword.value);
  console.log(remember.checked);

  if (remember.checked) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userPassword", userPassword.value);
    sessionStorage.setItem("userName", userName.value);
    sessionStorage.setItem("userPassword", userPassword.value);
  } else { 
    console.log("clear");
    window.localStorage.clear();
  }

  const userPage = window.open("userdata.html", "_self");
});

loginCookiesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("username ", userName.value);
  console.log("password ", userPassword.value);
  console.log(remember.checked);
let cookieStore = document.cookie;
  if (remember.checked) {
    cookieStore = `userName=${userName.value}; userPassword=${userPassword.value}`
  } else {
 
  }
  const userPage = window.open("userdata.html", "_self");
});


const studentData = [];
studentData.push({
  id: "1",
  name: "Mohammed",
  age: 24,
  address: "Alexandria",
  skills: ["design", "learn"],
  isLeader: true,
});
studentData.push({
    id: "2",
    name: "Ahmed",
    age: 20,
    address: "Cairo",
    skills: null,
    isLeader: true,
  });

  studentData.push({
    id: "3",
    name: "Mahmoud",
    age: 21,
    address: null,
    skills: ["develop", "draw"],
    isLeader: true,
  });

const m = JSON.stringify(studentData);

/**
 * SCRIPT API AJAX
 */
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


function showLocalStorage(){
  consoleTextView.innerText=`User name: ${localStorage.getItem("userName")}
  Password: ${localStorage.getItem("userPassword")}`

}

function showCookies(){
  console.log(document.cookie)
  consoleTextView.innerText=document.cookie

}