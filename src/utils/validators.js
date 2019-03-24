const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

export const isEmail = email => email && emailRegExp.test(email);
export const isPhone = phone => phone && phoneRegExp.test(phone);

export const checkEmail = (_, value, cb) =>
  isEmail(value) ? cb() : cb(new Error('Invalid mail'));

export const checkBool = (_, value, cb) =>
  value === true
    ? cb()
    : cb(new Error('You have to accept this field to continue'));

export const checkPhone = (_, value, cb) =>
  isPhone(value) ? cb() : cb(new Error('Invalid phone'));

export const checkLength = (_, value, cb) =>
  value && value.length >= 6
    ? cb()
    : cb(new Error('Password need to have at least 6 chars'));
