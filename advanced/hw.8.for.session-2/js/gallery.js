/* 
 *  Схематическое изображение класса Галереи
 */

let BaseGallery = function () {
	// code
}

BaseGallery.prototype = {
	initComponent: function () {
		// code
	}
}


let ExtendedGallery = function () {
	BaseGallery.apply(this);
	this.property = {};
}

ExtendedGallery.prototype = {

	initListeners: function () {
		BaseGallery.prototype.initListeners.apply(this);
	},

	addImage: function () {
		// новый метод которо нет у родителя
	}
}




function Services(parent, child) {
	this.parent = parent;
	this.child = child;
}

Services.prototype.inheritance = function (parent, child) {
	let tempChild = child.prototype;
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;

	for (let key in tempChild) {
		if (tempChild.hasOwnProperty(key)) {
			child.prototype[key] = tempChild[key];
		}
	}
}

const service = new Services(BaseGallery, ExtendedGallery);

service.inheritance(BaseGallery, ExtendedGallery);

console.log(service);