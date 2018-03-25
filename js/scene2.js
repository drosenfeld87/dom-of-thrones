function scene2() {
  console.log('Executing scene 2!');

  // Setup Stage
    var stage = document.querySelector('#stage');
    var castle = document.querySelector('#castle');
    var stageImg = stage.querySelector('#stage-img');
    var castleImgSrc = castle.getAttribute('src');
    stageImg.setAttribute('src', castleImgSrc);
  // Setup Cast

  // Character 1
  var nedContainer = document.createElement('div');
  stage.append(nedContainer)

  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '44%';
  nedContainer.style.top = '55%';
  nedContainer.style.left = '10%';
  nedContainer.style.border = '2px solid blue';
  nedContainer.style.background = 'yellow';

  var ned = document.querySelector('#ned');
  nedContainer.append(ned);
  var leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);

  ned.style.width = '70%;';
  ned.style.position = 'absolute';
  ned.style.top = 0;
  leather.style.position = 'absolute';
  leather.style.border = '2px solid green';
  leather.style.bottom = 0;

  ned.style.border = 'none';
  leather.style.border = 'none';
  nedContainer.style.border = 'none';
  nedContainer.style.background = 'none';

  // Character 2
  var joffreyContainer = document.createElement('div');
  stage.append(joffreyContainer)

  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width = '10%';
  joffreyContainer.style.height = '44%';
  joffreyContainer.style.top = '55%';
  joffreyContainer.style.left = '10%';
  joffreyContainer.style.border = '2px solid blue';
  joffreyContainer.style.background = 'yellow';

  var joffrey = document.querySelector('#joffrey');
  joffreyContainer.append(joffrey);
  var king = document.querySelector('#king');
  joffreyContainer.append(king);

  joffrey.style.width = '70%;';
  joffrey.style.position = 'absolute';
  joffrey.style.top = 0;
  joffrey.style.position = 'absolute';
  joffrey.style.border = '2px solid green';
  joffrey.style.bottom = 0;

  joffrey.style.border = 'none';
  leather.style.border = 'none';
  joffreyContainer.style.border = 'none';
  joffreyContainer.style.background = 'none';

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
