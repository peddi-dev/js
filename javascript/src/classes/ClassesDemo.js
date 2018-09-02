/**
 * classes and inheritance demo 
 */

class Polygon {
	constructor(l, w) {
		this.l = l;
		this.w = w;
		this.name = 'Polygon Class';
	}
	

	
	toString() {
		return 'name: ' + this.name + ', length:  ' + this.l + ', width: ' + this.w; 
	}
}

class Rectangle extends Polygon {
	
	constructor(l, w){
		super(l, w);
		this.name = 'Rectangle';
	}
	
	get area() {
		
		return this.l * this.w;
	}
	
	toString() {
		return super.toString();
	}
}


class Square extends Polygon {
	
	constructor(l){
		super(l, l);
		this.name = 'Square';
	}
	
	get area() {
		return this.l * this.l;
	}
	
	toString() {
		return 'name: ' + this.name + ', side: ' + this.l;
	}
	
}

class MyDate extends Date {
	  constructor() {
	    super();
	  }

	  getFormattedDate() {
	    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	      'Oct', 'Nov', 'Dec'];
	    return 'Formatted Date: ' +  this.getDate() + '-' + months[this.getMonth()] + '-' +
	      this.getFullYear();
	  }
	}


