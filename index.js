console.log('funguju!');

const html = Number(prompt('What is your level of HTML?'));
const css = Number(prompt('What is your level of CSS?'));
const javaScript = Number(prompt('What is your level of JS?'));

const updateSkill = (id, level) => {
  const element = document.querySelector(`#${id} .skill__value`);
  element.textContent = `${level} / 100`;
  const elementProgress = document.querySelector(`#${id} .skill__progress`);
  elementProgress.style.width = `${level}%`;
};

updateSkill('skill1', html);
updateSkill('skill2', css);
updateSkill('skill3', javaScript);
