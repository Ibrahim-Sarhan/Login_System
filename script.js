


const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');


const nameRegister = document.getElementById('fullName');
const emailRegister = document.getElementById('emailAddress');
const passwordRegister = document.getElementById('loginPassword');



let dataFromStorage =  localStorage.getItem('userData');
console.log(dataFromStorage)
let userStorageArray = JSON.parse(dataFromStorage);
console.log(userStorageArray);
let userDataArray = [];

function registerNewUser() {
  let data = {
    name: nameRegister.value,
    email: emailRegister.value,
    password: passwordRegister.value,
  };

  let dataFilter = userDataArray.filter((el) => {
    return el.name.toLowerCase() == nameRegister.value.toLowerCase();
  });
  console.log(dataFilter); 
  
  if (dataFilter.length == 0 ) {
    userDataArray.push(data);
    localStorage.setItem('userData', JSON.stringify(userDataArray));
    console.log(userDataArray);
  } else {
    Swal.fire({
      title: 'Attention',
      text: 'This name already exists',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  }
  nameRegister.value = '';
  emailRegister.value = '';
  passwordRegister.value = '';
}

const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('loginPassword');

function userLogin() {
  let nameLogin = nameInput.value
  let passwordLogin = passwordInput.value
  let dataFilter = userStorageArray.filter((el) => {
    return (el.name == nameLogin && el.password == passwordLogin);
  });
  console.log(dataFilter);


  if (dataFilter.length == 0 ) {
    Swal.fire({
      title: 'Attention',
      text: 'The name or password is wrong',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  } else {
    let container = document.querySelector(".container");
    container.innerHTML = `<h3>Welcome to ${nameLogin}</h3>`
    window.location.href = "./home.html"
  }
    
  nameLogin.value = '';
  passwordLogin.value = '';
}