const users = [
  { name: 'Mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true }
];

const getPremUsers = () => {
  return users.filter(users => users.premium);
};

export { getPremUsers, users as default };
