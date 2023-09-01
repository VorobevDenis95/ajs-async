// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import GameSavingLoader from '../modules/app';

test('test function gamesaving', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
