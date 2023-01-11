const skills = [
    {id: 125223, skill: 'HTML', mastered: true},
    {id: 127904, skill: 'Javascript', mastered: false},
    {id: 139608, skill: 'Express', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return todos;
  }