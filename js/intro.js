import IntroView from './intro-view';
import switchScreen from './switchScreen';
import greeting from './greeting';

const introView = new IntroView();
introView.onClickAsterisk = () => {
  switchScreen(greeting);
};
export default introView.element;
