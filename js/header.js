import switchScreen from './switchScreen';
import greeting from './greeting';
import HeaderView from './views/header-view';

export default (seconds, lives) => {
  const headerView = new HeaderView(seconds, lives);

  headerView.onClickBack = () => {
    switchScreen(greeting);
  };

  return headerView.element;
};
