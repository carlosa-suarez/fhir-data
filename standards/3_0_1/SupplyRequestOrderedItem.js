const BackboneElement = require('./BackboneElement');

class SupplyRequestOrderedItem extends BackboneElement {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'SupplyRequestOrderedItem';
		Object.assign(this, opt);
	}

	// This is a SupplyRequestOrderedItem resource
	static get __resourceType () {
		return 'SupplyRequestOrderedItem';
	}

	// The amount that is being ordered of the indicated item.
	get quantity () {
		return this.__quantity;
	}

	set quantity (new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
	get itemCodeableConcept () {
		return this.__itemCodeableConcept;
	}

	set itemCodeableConcept (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__itemCodeableConcept = new CodeableConcept(new_value);
	}

	// The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
	get itemReference () {
		return this.__itemReference;
	}

	set itemReference (new_value) {
		const Reference = require('./Reference');
		this.__itemReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			quantity: this.__quantity && this.__quantity.toJSON(),
			itemCodeableConcept: this.__itemCodeableConcept && this.__itemCodeableConcept.toJSON(),
			itemReference: this.__itemReference && this.__itemReference.toJSON()
		});
	}
}

module.exports = SupplyRequestOrderedItem;
