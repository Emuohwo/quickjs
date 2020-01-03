const signUpForm = document.querySelector('.signup');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const address = document.querySelector('.address');
const emailErr = document.querySelector('.emailErr');
const firstnameErr = document.querySelector('.firstnameErr');
const lastnameErr = document.querySelector('.lastnameErr');
const addressErr = document.querySelector('.addressErr');
const passwordErr = document.querySelector('.passwordErr');
const spanUser = document.querySelector('.spanUser')


const currApiEndpoint = 'http://localhost:3000';

// eslint-disable-next-line consistent-return
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {};
  if (firstname.value) {
    formData.firstname = firstname.value;
  }
  if (lastname.value) {
    formData.lastname = lastname.value;
  }
  if (email.value) {
    formData.email = email.value;
  }
  if (password.value) {
    formData.password = password.value;
  }
  if (address.value) {
    formData.address = address.value;
  }

  // checks if input contains only letters
  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  // checks if password is valid
  function isValidPass(s) {
    const re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 3;
  }

  if (hasNumber(firstname.value)) {
    firstnameErr.innerHTML = '** firstname can only contain letters';
    firstnameErr.style.color = 'red';
    return false;
  }
  if (hasNumber(lastname.value)) {
    lastnameErr.innerHTML = '** firstname can only contain letters';
    lastnameErr.style.color = 'red';
    return false;
  }
  
  if (!isValidPass(password.value)) {
    passwordErr.innerHTML = '** password should contain letters and numbers';
    passwordErr.style.color = 'red';
    return false;
  }

  const fetchConfig = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };
  fetch(`${currApiEndpoint}/api/v1/auth/signup`, fetchConfig)
    .then(resp => resp.json())
    .then((resp) => {
      const { error, data } = resp;
      if (error) {
        if (error.email) {
          emailErr.innerHTML = error.email;
          emailErr.style.color = 'red';
        }
        if (error.address) {
          addressErr.innerHTML = error.address;
          addressErr.style.color = 'red';
        }

        if (error.firstname) {
          spanUser.innerHTML = error.firstname;
          spanUser.style.color = 'red';
        }
      }

      if (data) {
        const { user, token } = data[0];
        localStorage.User = JSON.stringify(user);
        localStorage.Token = token;
        window.alert('Account created Successfully');
        window.location = './user-logIn.html';
      }
    })
    .catch(err => console.log(err));
});
