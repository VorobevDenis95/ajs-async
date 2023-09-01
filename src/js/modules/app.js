// eslint-disable-next-line import/extensions
import GameSaving from './gamesaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  static async load() {
    // eslint-disable-next-line no-useless-catch
    try {
      const responce = await read();
      const data = await json(responce);
      const { id, created, userInfo } = JSON.parse(data);
      return new GameSaving(id, created, userInfo);
    } catch (error) {
      throw error;
    }
  }
}
