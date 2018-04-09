import bcrypt from 'bcryptjs';
const saltRounds = 10;

export const generate = (data) => {
  return bcrypt.hashSync(data, bcrypt.genSaltSync(saltRounds));
}

export const compare = (data, cryptedPassword) => {
  return bcrypt.compareSync(data, cryptedPassword);
}