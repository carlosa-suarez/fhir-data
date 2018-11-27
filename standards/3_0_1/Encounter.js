const DomainResource = require('./DomainResource');

class Encounter extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'Encounter';
		Object.assign(this, opt);
	}

	// This is a Encounter resource
	static get __resourceType () {
		return 'Encounter';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__Encounter = new_value;
	}

	// Identifier(s) by which this encounter is known.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
	get status () {
		return this.__status;
	}

	set status (new_value) {
		this.__status = new_value;
	}

	// The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
	get statusHistory () {
		return this.__statusHistory;
	}

	set statusHistory (new_value) {
		const EncounterStatusHistory = require('./EncounterStatusHistory');
		this.__statusHistory = Array.isArray(new_value) ? new_value.map(val => new EncounterStatusHistory(val)) : [new EncounterStatusHistory(new_value)];
	}

	// inpatient | outpatient | ambulatory | emergency +.
	get class () {
		return this.__class;
	}

	set class (new_value) {
		const Coding = require('./Coding');
		this.__class = new Coding(new_value);
	}

	// The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transisions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kindof discharge from emergency to inpatient.
	get classHistory () {
		return this.__classHistory;
	}

	set classHistory (new_value) {
		const EncounterClassHistory = require('./EncounterClassHistory');
		this.__classHistory = Array.isArray(new_value) ? new_value.map(val => new EncounterClassHistory(val)) : [new EncounterClassHistory(new_value)];
	}

	// Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
	get type () {
		return this.__type;
	}

	set type (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates the urgency of the encounter.
	get priority () {
		return this.__priority;
	}

	set priority (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__priority = new CodeableConcept(new_value);
	}

	// The patient ro group present at the encounter.
	get subject () {
		return this.__subject;
	}

	set subject (new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
	get episodeOfCare () {
		return this.__episodeOfCare;
	}

	set episodeOfCare (new_value) {
		const Reference = require('./Reference');
		this.__episodeOfCare = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The referral request this encounter satisfies (incoming referral).
	get incomingReferral () {
		return this.__incomingReferral;
	}

	set incomingReferral (new_value) {
		const Reference = require('./Reference');
		this.__incomingReferral = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The list of people responsible for providing the service.
	get participant () {
		return this.__participant;
	}

	set participant (new_value) {
		const EncounterParticipant = require('./EncounterParticipant');
		this.__participant = Array.isArray(new_value) ? new_value.map(val => new EncounterParticipant(val)) : [new EncounterParticipant(new_value)];
	}

	// The appointment that scheduled this encounter.
	get appointment () {
		return this.__appointment;
	}

	set appointment (new_value) {
		const Reference = require('./Reference');
		this.__appointment = new Reference(new_value);
	}

	// The start and end time of the encounter.
	get period () {
		return this.__period;
	}

	set period (new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Quantity of time the encounter lasted. This excludes the time during leaves of absence.
	get length () {
		return this.__length;
	}

	set length (new_value) {
		const Duration = require('./Duration');
		this.__length = new Duration(new_value);
	}

	// Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
	get reason () {
		return this.__reason;
	}

	set reason (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The list of diagnosis relevant to this encounter.
	get diagnosis () {
		return this.__diagnosis;
	}

	set diagnosis (new_value) {
		const EncounterDiagnosis = require('./EncounterDiagnosis');
		this.__diagnosis = Array.isArray(new_value) ? new_value.map(val => new EncounterDiagnosis(val)) : [new EncounterDiagnosis(new_value)];
	}

	// The set of accounts that may be used for billing for this Encounter.
	get account () {
		return this.__account;
	}

	set account (new_value) {
		const Reference = require('./Reference');
		this.__account = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Details about the admission to a healthcare service.
	get hospitalization () {
		return this.__hospitalization;
	}

	set hospitalization (new_value) {
		const EncounterHospitalization = require('./EncounterHospitalization');
		this.__hospitalization = new EncounterHospitalization(new_value);
	}

	// List of locations where  the patient has been during this encounter.
	get location () {
		return this.__location;
	}

	set location (new_value) {
		const EncounterLocation = require('./EncounterLocation');
		this.__location = Array.isArray(new_value) ? new_value.map(val => new EncounterLocation(val)) : [new EncounterLocation(new_value)];
	}

	// An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location\'s Organization.
	get serviceProvider () {
		return this.__serviceProvider;
	}

	set serviceProvider (new_value) {
		const Reference = require('./Reference');
		this.__serviceProvider = new Reference(new_value);
	}

	// Another Encounter of which this encounter is a part of (administratively or in time).
	get partOf () {
		return this.__partOf;
	}

	set partOf (new_value) {
		const Reference = require('./Reference');
		this.__partOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			statusHistory: this.__statusHistory && this.__statusHistory.map(v => v.toJSON()),
			class: this.__class && this.__class.toJSON(),
			classHistory: this.__classHistory && this.__classHistory.map(v => v.toJSON()),
			type: this.__type && this.__type.map(v => v.toJSON()),
			priority: this.__priority && this.__priority.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			episodeOfCare: this.__episodeOfCare && this.__episodeOfCare.map(v => v.toJSON()),
			incomingReferral: this.__incomingReferral && this.__incomingReferral.map(v => v.toJSON()),
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			appointment: this.__appointment && this.__appointment.toJSON(),
			period: this.__period && this.__period.toJSON(),
			length: this.__length && this.__length.toJSON(),
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			diagnosis: this.__diagnosis && this.__diagnosis.map(v => v.toJSON()),
			account: this.__account && this.__account.map(v => v.toJSON()),
			hospitalization: this.__hospitalization && this.__hospitalization.toJSON(),
			location: this.__location && this.__location.map(v => v.toJSON()),
			serviceProvider: this.__serviceProvider && this.__serviceProvider.toJSON(),
			partOf: this.__partOf && this.__partOf.toJSON()
		});
	}
}

module.exports = Encounter;
