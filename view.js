
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Drawing.prototype.paint = function(ctx,canvas) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.list.forEach(element => element.paint(ctx))
  };

Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.strokeRect(this.initX,this.initY,this.largeur,this.hauteur);
  };
  
  Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();
    ctx.moveTo(this.initX, this.initY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
    ctx.closePath();
  };

  Circle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();
    ctx.arc(this.initX, this.initY,this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }

  function updateShapeList(index, Forme){
    document.getElementById('shapeList')
      .insertAdjacentHTML('beforeend',toDom(Forme,index));
  }

  function toDom(Forme,index){
      if(Forme && typeof Forme === 'object'){
        let innerHtml = `<li id="liRemove${index}">`
        if(Forme.constructor === Rectangle){
          innerHtml += '<span style = "color :' + Forme.couleur + '">🔳</span> Rectangle.'
        }
        else if (Forme.constructor === Line){
          innerHtml += '<span style = "color :' + Forme.couleur + '">➖</span> Line.'
        }
        else if(Forme.constructor === Circle){
          innerHtml += '<span style = "color :' + Forme.couleur + '">⭕</span> Circle.'
        }
        innerHtml += `<button type ="button" class = "btn btn-default remove" 
                      id ="remove${index}">
                        <span class = "glyphicon glyphicon-remove-sign"></
                        span>
                      </button>`
        return innerHtml + '</li>'
      }
  }
  
  
  
