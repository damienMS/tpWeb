
// Implémenter ici les 4 classes du modèle.

function Drawing(){
    this.list = new Map();

};

function Forme(initX,initY,couleur,epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
    this.initX = initX;
    this.initY=initY;
};


function Line(initX,initY,couleur,epaisseur,endX,endY){
    Forme.call(this,initX,initY,couleur,epaisseur);
    this.endX = endX;
    this.endY = endY;
};
Line.prototype = new Forme();

function Rectangle(initX,initY,couleur,epaisseur,largeur,hauteur){
    Forme.call(this,initX,initY,couleur,epaisseur);
    this.largeur = largeur;
    this.hauteur = hauteur;

};
Rectangle.prototype = new Forme();

// N'oubliez pas l'héritage !
