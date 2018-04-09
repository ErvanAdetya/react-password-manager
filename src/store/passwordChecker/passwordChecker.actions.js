import {
  PASSWORD_CONTAIN_ALL_REQUIREMENT,
  PASSWORD_CONTAIN_LOWERCASE,
  PASSWORD_CONTAIN_UPPERCASE,
  PASSWORD_CONTAIN_NUMERIC,
  PASSWORD_CONTAIN_SPECIALCHAR,
  PASSWORD_CONTAIN_MIN_LENGTH
} from './passwordChecker.actionTypes';
// import { messageBlank } from '../message//message.actions';

export const minVal = 5;
const containNumeric = new RegExp("[0-9]");
const containLowercase = new RegExp("[a-z]");
const containUppercase = new RegExp("[A-Z]");
const containSpecialChar = new RegExp("[!@#$%^&]");

let status = false;

const setLowercaseStatus = (payload) => {
  return {
    type: PASSWORD_CONTAIN_LOWERCASE,
    payload: payload
  }
};

const setUppercaseStatus = (payload) => {
  return {
    type: PASSWORD_CONTAIN_UPPERCASE,
    payload: payload
  }
};

const setSpecialCharStatus = (payload) => {
  return {
    type: PASSWORD_CONTAIN_SPECIALCHAR,
    payload: payload
  }
};

const setNumericStatus = (payload) => {
  return {
    type: PASSWORD_CONTAIN_NUMERIC,
    payload: payload
  }
};

const setMinLengthStatus = (payload) => {
  return {
    type: PASSWORD_CONTAIN_MIN_LENGTH,
    payload: payload
  }
};

const checkLowercase = (passw) => {
  return containLowercase.test(passw);
};

const checkUppercase = (passw) => {
  return containUppercase.test(passw);
};

const checkSpecialChar= (passw) => {
  return containSpecialChar.test(passw);
};

const checkNumeric = (passw) => {
  return containNumeric.test(passw);
};

const checkMinLength = (passw) => {
  if(passw.length >= minVal) { return true; }
  return false;
};

export const passwordChecker = (payload) => {
  return dispatch => {
    let lowercaseFlag = checkLowercase(payload);
    dispatch(setLowercaseStatus(lowercaseFlag));

    let uppercaseFlag = checkUppercase(payload);
    dispatch(setUppercaseStatus(uppercaseFlag));

    let specialCharFlag = checkSpecialChar(payload);
    dispatch(setSpecialCharStatus(specialCharFlag));

    let numericFlag = checkNumeric(payload);
    dispatch(setNumericStatus(numericFlag));

    let lengthFlag = checkMinLength(payload)
    dispatch(setMinLengthStatus(lengthFlag));

    dispatch(requirementCheck(lowercaseFlag, uppercaseFlag, specialCharFlag, numericFlag, lengthFlag))
  }
};

const requirementCheck = (lowercaseFlag, uppercaseFlag, specialCharFlag, numericFlag, lengthFlag) => {
  status = false;
  if(lowercaseFlag && uppercaseFlag && specialCharFlag && numericFlag && lengthFlag) {
    status = true;
  }
  return {
    type: PASSWORD_CONTAIN_ALL_REQUIREMENT,
    payload: status
  }
};