/* eslint-disable linebreak-style */
export default class Person {
  constructor() {
    this.characters = [
      {
        name: 'bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'deamon',
        type: 'Deamon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'undead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  getChar(type) {
    return this.characters.find((char) => type === char.type);
  }
}
