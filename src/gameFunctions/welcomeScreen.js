import { generateGameboards } from './gameScreen';

export function welcomeScreen() {
  const welcomePage = document.createElement('div');
  welcomePage.setAttribute('class', 'welcome-welcomePage');

  // logo
  const welcomeGameLogo = document.createElement('h1');
  welcomeGameLogo.setAttribute('class', 'welcome-logo');
  welcomeGameLogo.innerHTML = 'BATTLESHIP';

  //player name input
  const nameInputForm = document.createElement('div');
  //nameInputForm.setAttribute('method', 'post');

  const formwelcomePage = document.createElement('div');
  formwelcomePage.setAttribute('class', 'form-welcomePage');

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'player-name-input');
  nameLabel.innerHTML = 'ENTER PLAYER NAME:';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'player-name-input');
  nameInput.setAttribute('name', 'player-name');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Enter Name');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submit-button');
  submitButton.innerHTML = 'Start Game';
  //submitButton.onclick = generateGameboards;

  //appends
  document.body.append(welcomePage);
  welcomePage.append(welcomeGameLogo);
  welcomePage.append(nameInputForm);
  nameInputForm.append(formwelcomePage);
  formwelcomePage.append(nameLabel);
  formwelcomePage.append(nameInput);
  formwelcomePage.append(submitButton);
}
