import GreetingView from './greeting-view';
import switchScreen from './switchScreen';
import rules from './rules';

const greetingView = new GreetingView();
greetingView.onClickContinue = () => {
  switchScreen(rules);
};
export default greetingView.element;
