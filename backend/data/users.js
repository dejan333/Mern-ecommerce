import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin:true
  },
  {
    name: 'Jonh Doe',
    email: 'jonh@gmail.com',
    password: bcrypt.hashSync('12345', 10)
  },
  {
    name: 'User User',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('12345', 10)
  },
];

export default users;