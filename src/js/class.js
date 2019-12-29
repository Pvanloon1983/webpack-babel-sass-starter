class User {
  constructor() {
    this.name = 'MyName';
  }

  sayHello() {
    return `Exported from class.js: ${this.name}`;
  }
}

export const user = new User();
