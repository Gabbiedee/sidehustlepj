let password = document.getElementById("psd");
let cpassword = document.getElementById("cpsd");
let button = document.getElementById("button");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("emailadd");
let phone = document.getElementById("pnumber");

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const card = document.querySelector(".card");
  const form = document.querySelector(".form");
  card.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
}

button.addEventListener("click", function (e) {
  const decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  let pswd = password.value.trim();
  let cpswd = cpassword.value.trim();

  if (
    !fname.value.trim() ||
    !lname.value.trim() ||
    !email.value.trim() ||
    !pswd ||
    !cpswd ||
    !phone.value.trim()
  ) {
    showAlert(`kindly fill all fields`, `error`);
    return;
  } else {
    if (pswd != cpswd) {
      showAlert(`Password confirmation is not correct`, `error`);
      return;
    } else {
      if (pswd.match(decimal) && cpswd.match(decimal)) {
        showAlert(`Password successfully created`, `success`);

        // local storage
        let firstName = fname.value.trim();
        localStorage.setItem("fname", firstName);

        //     // set lname
        let lastName = lname.value.trim();
        localStorage.setItem("lname", lastName);

        //     // set email
        let emailAdress = email.value.trim();
        localStorage.setItem("email", emailAdress);

        //     // set phone vale
        let phoneNo = phone.value.trim();
        localStorage.setItem("phone", phoneNo);

        //     // store password
        localStorage.setItem("pd", pswd);

        // //    store confirm password
        localStorage.setItem("cpd", cpswd);
      } else {
        showAlert(`Password character does not match requirement`, `error`);
        return;
      }
    }
  }

  clearfield();

  e.preventDefault();

});
// Declare a clearfield function

function clearfield() {
  password.value = "";
  cpassword.value = "";
  fname.value = "";
  lname.value = "";
  phone.value = "";
  email.value = "";
}
