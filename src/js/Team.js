/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable generator-star-spacing */
/* eslint-disable no-console */
import Person from './Person';

class Team {
  constructor(team) {
    this.team = team;
  }

  *[Symbol.iterator]() {
    const person = new Person();

    for (let i = 0; i < this.team.length; i++) {
      yield person.getChar(this.team[i]);
    }
  }
}

const team = new Team(['Bowman', 'Magician', 'Undead']);
console.log([...team]);
