export const minVal = 5;
const containNumeric = new RegExp("[0-9]");
const containLowercase = new RegExp("[a-z]");
const containUppercase = new RegExp("[A-Z]");
const containSpecialChar = new RegExp("[!@#$%^&]");

export const minLength = (passw) => {
  if(passw.length >= minVal) {
    return true;
  }
  return false;
}

export const findNumeric= (passw) => {
  return containNumeric.test(passw)
}

export const findLowercase = (passw) => {
  return containLowercase.test(passw)
}

export const findUppercase = (passw) => {
  return containUppercase.test(passw)
}

export const findSpecialChar= (passw) => {
  return containSpecialChar.test(passw)
}