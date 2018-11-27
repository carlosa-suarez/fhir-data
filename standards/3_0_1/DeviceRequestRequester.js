const BackboneElement = require('./BackboneElement');

class DeviceRequestRequester extends BackboneElement {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'DeviceRequestRequester';
		Object.assign(this, opt);
	}

	// This is a DeviceRequestRequester resource
	static get __resourceType () {
		return 'DeviceRequestRequester';
	}

	// The device, practitioner, etc. who initiated the request.
	get agent () {
		return this.__agent;
	}

	set agent (new_value) {
		const Reference = require('./Reference');
		this.__agent = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of.
	get onBehalfOf () {
		return this.__onBehalfOf;
	}

	set onBehalfOf (new_value) {
		const Reference = require('./Reference');
		this.__onBehalfOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			agent: this.__agent && this.__agent.toJSON(),
			onBehalfOf: this.__onBehalfOf && this.__onBehalfOf.toJSON()
		});
	}
}

module.exports = DeviceRequestRequester;
