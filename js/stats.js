import StatsView from './stats-view';

export default () => {
  const statsData = {
    title: `Победа!`,
    results: [
      {
        resultNumber: 1,
        gamePoints: 900,
        totalResult: 950
      },
      {
        resultNumber: 2,
        totalResult: `fail`
      },
      {
        resultNumber: 3,
        gamePoints: 900,
        bonusPoints: 100,
        totalResult: 950
      }]
  };

  const statsView = new StatsView(statsData);

  return statsView.element;
};
