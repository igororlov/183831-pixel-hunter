import getElementFromTemplate from './getElementFromTemplate';
import switchScreen from './switchScreen';
import greeting from './greeting';
import footer from './footer';

const introTemplate = `
<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>
${footer}`;

const introScreen = getElementFromTemplate(introTemplate);

const asterisk = introScreen.querySelector(`.intro__asterisk`);
asterisk.addEventListener(`click`, () => {
  switchScreen(greeting);
});

export default introScreen;
