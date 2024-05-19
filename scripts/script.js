// Slider Action Arrows

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);


// Login



// Register

let passwordInput = document.getElementById('passwordInput');
let repasswordInput = document.getElementById('repasswordInput');

let RegisterUser = evt => {
  evt.preventDefault();
  
  if (passwordInput.value !== repasswordInput.value) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((credentials) => {
      console.log(credentials);
      alert("User Registered Successfully");
    })  
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
};

