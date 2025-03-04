function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JavaScript'],
    greet: function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  };
  return member;
}