import StatsView from './views/stats-view';

export default (answers) => {
  const statsView = new StatsView(answers);
  return statsView.element;
};
