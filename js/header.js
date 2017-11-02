import switchScreen from './switchScreen';
import greeting from './greeting';
import HeaderView from './views/header-view';

export default (game) => {
  const headerView = new HeaderView(game);

  headerView.onClickBack = () => {
    switchScreen(greeting);
  };

  return headerView.element;
};
