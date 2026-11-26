/* vv Variable declarations */

const passinput_1 = document.getElementById("password-init");
const passinput_2 = document.getElementById("password-confirm");
const req_text1 = document.getElementById("req1-text");
const icon1 = document.getElementById("icon1");
const req_text2 = document.getElementById("req2-text");
const icon2 = document.getElementById("icon2");

var valid_pass = false;

/* vv Password validity check according to requirements */

passinput_1.addEventListener('input', () => {
  const length = passinput_1.value.length;

  if (length >= 8) {
    req_text1.style.color = "#41e24c";
    icon1.src = 'img/tick-circle-svgrepo-com.svg'
  }
  else {
    req_text1.style.color = "black";
    icon1.src = 'img/cross-circle-svgrepo-com.svg'
  }

  if (passinput_1.validity.valid) {
    req_text2.style.color = "#41e24c";
    icon2.src = 'img/tick-circle-svgrepo-com.svg'
  }
  else {
    req_text2.style.color = "black";
    icon2.src = 'img/cross-circle-svgrepo-com.svg'
  }
})


/* vv Function to check if value entered in password_2 field is the same as password_1 */

passinput_2.addEventListener('input', () => {
  if (passinput_1.value === passinput_2.value) {
    valid_pass = true;
  }
  else {
    valid_pass = false;
  }

  if (!valid_pass) {
    passinput_2.style.borderColor = 'firebrick';
  }
  else {
    passinput_2.style.borderColor = '';
  }
})
