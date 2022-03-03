
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.click = false;
  // Developper les 3 fonctions gérant les événements

  this.maFctGérantLaPression = function(evt){
    var position = getMousePosition(canvas, evt);
    this.click = true;
    this.initX = position.x;
    this.initY = position.y;
    console.log(position);
  
  }.bind(this);

  this.maFctGérantLeDéplacement = function(evt){
    if (this.click) {
      var position = getMousePosition(canvas, evt);
    this.click = true;
    this.finalX = position.x;
    this.finalY = position.y;
    console.log(position);
    }
  }.bind(this);

  this.maFctGérantLeRelâchement = function(evt){
    var position = getMousePosition(canvas, evt);
    this.click = false;
    this.finalX = position.x;
    this.finalY = position.y;
    console.log(position);
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
  canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);


};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

  




