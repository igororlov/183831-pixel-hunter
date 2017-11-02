import switchScreen from './switchScreen';
import renderGame from './game';
import getGame from './state';

import RulesView from './views/rules-view';

export default () => {
  const rulesView = new RulesView();
  rulesView.onButtonClick = () => {
    switchScreen(renderGame(getGame(rulesView.nameInput.value)));
  };
  return rulesView.element;
};
