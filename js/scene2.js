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
  joffreyContainer.id = 'joffrey-container'
  stage.append(joffreyContainer)

  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width = '8%';
  joffreyContainer.style.height = '31%';
  joffreyContainer.style.top = '55%';
  joffreyContainer.style.left = '55%';

  var joffrey = document.querySelector('#joffrey');
  joffreyContainer.append(joffrey);
  joffrey.style.width = '75%';
  joffrey.style.position = 'absolute';
  joffrey.style.left = "33%";


  kingWardrobe = document.querySelector('#king');
  joffreyContainer.append(kingWardrobe);
  kingWardrobe.style.position = 'absolute';
  kingWardrobe.style.bottom = 0;

  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.position = 'absolute';
  sword.style.top = '77%';
  sword.style.left = '31%';
  sword.style.height = '5%';
  sword.style.transform = 'rotateY(150deg)';
  // Prop 2


  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })
