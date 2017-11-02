import GreetingView from './views/greeting-view';
import switchScreen from './switchScreen';
import rules from './rules';

const greetingView = new GreetingView();
greetingView.onClickContinue = () => {
  switchScreen(rules());
};
export default greetingView.element;
