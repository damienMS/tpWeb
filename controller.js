
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEndth
	this.onInteractionStart = function(dnd){
		
	}.bind(this);

	this.onInteractionUpdate = function (dnd){
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(dnd.initX,dnd.initY,this.currColour,this.
			currLineWidth,dnd.finalX-dnd.initX,dnd.finalY-dnd.initY);
		}
		else{
			this.currentShape = new Line(dnd.initX,dnd.initY,this.currColour,this.
			currLineWidth,dnd.finalX,dnd.finalY);
			
		}
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
		
	}.bind(this);

	this.onInteractionEnd = function (dnd){
	
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
		drawing.list.push(this.currentShape);
	}.bind(this);
};


