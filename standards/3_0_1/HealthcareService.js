const DomainResource = require('./DomainResource');

class HealthcareService extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'HealthcareService';
		Object.assign(this, opt);
	}

	// This is a HealthcareService resource
	static get __resourceType () {
		return 'HealthcareService';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__HealthcareService = new_value;
	}

	// External identifiers for this item.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether this healthcareservice record is in active use.
	get active () {
		return this.__active;
	}

	set active (new_value) {
		this.__active = new_value;
	}

	// The organization that provides this healthcare service.
	get providedBy () {
		return this.__providedBy;
	}

	set providedBy (new_value) {
		const Reference = require('./Reference');
		this.__providedBy = new Reference(new_value);
	}

	// Identifies the broad category of service being performed or delivered.
	get category () {
		return this.__category;
	}

	set category (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// The specific type of service that may be delivered or performed.
	get type () {
		return this.__type;
	}

	set type (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Collection of specialties handled by the service site. This is more of a medical term.
	get specialty () {
		return this.__specialty;
	}

	set specialty (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialty = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The location(s) where this healthcare service may be provided.
	get location () {
		return this.__location;
	}

	set location (new_value) {
		const Reference = require('./Reference');
		this.__location = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Further description of the service as it would be presented to a consumer while searching.
	get name () {
		return this.__name;
	}

	set name (new_value) {
		this.__name = new_value;
	}

	// Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
	get comment () {
		return this.__comment;
	}

	set comment (new_value) {
		this.__comment = new_value;
	}

	// Extra details about the service that can\'t be placed in the other fields.
	get extraDetails () {
		return this.__extraDetails;
	}

	set extraDetails (new_value) {
		this.__extraDetails = new_value;
	}

	// If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
	get photo () {
		return this.__photo;
	}

	set photo (new_value) {
		const Attachment = require('./Attachment');
		this.__photo = new Attachment(new_value);
	}

	// List of contacts related to this specific healthcare service.
	get telecom () {
		return this.__telecom;
	}

	set telecom (new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// The location(s) that this service is available to (not where the service is provided).
	get coverageArea () {
		return this.__coverageArea;
	}

	set coverageArea (new_value) {
		const Reference = require('./Reference');
		this.__coverageArea = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The code(s) that detail the conditions under which the healthcare service is available/offered.
	get serviceProvisionCode () {
		return this.__serviceProvisionCode;
	}

	set serviceProvisionCode (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__serviceProvisionCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Does this service have specific eligibility requirements that need to be met in order to use the service?.
	get eligibility () {
		return this.__eligibility;
	}

	set eligibility (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__eligibility = new CodeableConcept(new_value);
	}

	// Describes the eligibility conditions for the service.
	get eligibilityNote () {
		return this.__eligibilityNote;
	}

	set eligibilityNote (new_value) {
		this.__eligibilityNote = new_value;
	}

	// Program Names that can be used to categorize the service.
	get programName () {
		return this.__programName;
	}

	set programName (new_value) {
		this.__programName = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Collection of characteristics (attributes).
	get characteristic () {
		return this.__characteristic;
	}

	set characteristic (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__characteristic = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
	get referralMethod () {
		return this.__referralMethod;
	}

	set referralMethod (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__referralMethod = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
	get appointmentRequired () {
		return this.__appointmentRequired;
	}

	set appointmentRequired (new_value) {
		this.__appointmentRequired = new_value;
	}

	// A collection of times that the Service Site is available.
	get availableTime () {
		return this.__availableTime;
	}

	set availableTime (new_value) {
		const HealthcareServiceAvailableTime = require('./HealthcareServiceAvailableTime');
		this.__availableTime = Array.isArray(new_value) ? new_value.map(val => new HealthcareServiceAvailableTime(val)) : [new HealthcareServiceAvailableTime(new_value)];
	}

	// The HealthcareService is not available during this period of time due to the provided reason.
	get notAvailable () {
		return this.__notAvailable;
	}

	set notAvailable (new_value) {
		const HealthcareServiceNotAvailable = require('./HealthcareServiceNotAvailable');
		this.__notAvailable = Array.isArray(new_value) ? new_value.map(val => new HealthcareServiceNotAvailable(val)) : [new HealthcareServiceNotAvailable(new_value)];
	}

	// A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
	get availabilityExceptions () {
		return this.__availabilityExceptions;
	}

	set availabilityExceptions (new_value) {
		this.__availabilityExceptions = new_value;
	}

	// Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
	get endpoint () {
		return this.__endpoint;
	}

	set endpoint (new_value) {
		const Reference = require('./Reference');
		this.__endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			providedBy: this.__providedBy && this.__providedBy.toJSON(),
			category: this.__category && this.__category.toJSON(),
			type: this.__type && this.__type.map(v => v.toJSON()),
			specialty: this.__specialty && this.__specialty.map(v => v.toJSON()),
			location: this.__location && this.__location.map(v => v.toJSON()),
			name: this.__name,
			comment: this.__comment,
			extraDetails: this.__extraDetails,
			photo: this.__photo && this.__photo.toJSON(),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			coverageArea: this.__coverageArea && this.__coverageArea.map(v => v.toJSON()),
			serviceProvisionCode: this.__serviceProvisionCode && this.__serviceProvisionCode.map(v => v.toJSON()),
			eligibility: this.__eligibility && this.__eligibility.toJSON(),
			eligibilityNote: this.__eligibilityNote,
			programName: this.__programName,
			characteristic: this.__characteristic && this.__characteristic.map(v => v.toJSON()),
			referralMethod: this.__referralMethod && this.__referralMethod.map(v => v.toJSON()),
			appointmentRequired: this.__appointmentRequired,
			availableTime: this.__availableTime && this.__availableTime.map(v => v.toJSON()),
			notAvailable: this.__notAvailable && this.__notAvailable.map(v => v.toJSON()),
			availabilityExceptions: this.__availabilityExceptions,
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON())
		});
	}
}

module.exports = HealthcareService;
