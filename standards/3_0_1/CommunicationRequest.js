const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class CommunicationRequest extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'CommunicationRequest';
		Object.assign(this, opt);
	}

	// This is a CommunicationRequest resource
	static get __resourceType () {
		return 'CommunicationRequest';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__CommunicationRequest = new_value;
	}

	// A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A plan or proposal that is fulfilled in whole or in part by this request.
	get basedOn () {
		return this.__basedOn;
	}

	set basedOn (new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Completed or terminated request(s) whose function is taken by this new request.
	get replaces () {
		return this.__replaces;
	}

	set replaces (new_value) {
		const Reference = require('./Reference');
		this.__replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
	get groupIdentifier () {
		return this.__groupIdentifier;
	}

	set groupIdentifier (new_value) {
		const Identifier = require('./Identifier');
		this.__groupIdentifier = new Identifier(new_value);
	}

	// The status of the proposal or order.
	get status () {
		return this.__status;
	}

	set status (new_value) {
		this.__status = new_value;
	}

	// The type of message to be sent such as alert, notification, reminder, instruction, etc.
	get category () {
		return this.__category;
	}

	set category (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
	get priority () {
		return this.__priority;
	}

	set priority (new_value) {
		this.__priority = new_value;
	}

	// A channel that was used for this communication (e.g. email, fax).
	get medium () {
		return this.__medium;
	}

	set medium (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medium = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The patient or group that is the focus of this communication request.
	get subject () {
		return this.__subject;
	}

	set subject (new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
	get recipient () {
		return this.__recipient;
	}

	set recipient (new_value) {
		const Reference = require('./Reference');
		this.__recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The resources which were related to producing this communication request.
	get topic () {
		return this.__topic;
	}

	set topic (new_value) {
		const Reference = require('./Reference');
		this.__topic = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The encounter or episode of care within which the communication request was created.
	get context () {
		return this.__context;
	}

	set context (new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Text, attachment(s), or resource(s) to be communicated to the recipient.
	get payload () {
		return this.__payload;
	}

	set payload (new_value) {
		const CommunicationRequestPayload = require('./CommunicationRequestPayload');
		this.__payload = Array.isArray(new_value) ? new_value.map(val => new CommunicationRequestPayload(val)) : [new CommunicationRequestPayload(new_value)];
	}

	// The time when this communication is to occur.
	get occurrenceDateTime () {
		return this.__occurrenceDateTime;
	}

	set occurrenceDateTime (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this.__occurrenceDateTime = new_value;
	}

	// The time when this communication is to occur.
	get occurrencePeriod () {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod (new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
	get authoredOn () {
		return this.__authoredOn;
	}

	set authoredOn (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this.__authoredOn = new_value;
	}

	// The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
	get sender () {
		return this.__sender;
	}

	set sender (new_value) {
		const Reference = require('./Reference');
		this.__sender = new Reference(new_value);
	}

	// The individual who initiated the request and has responsibility for its activation.
	get requester () {
		return this.__requester;
	}

	set requester (new_value) {
		const CommunicationRequestRequester = require('./CommunicationRequestRequester');
		this.__requester = new CommunicationRequestRequester(new_value);
	}

	// Describes why the request is being made in coded or textual form.
	get reasonCode () {
		return this.__reasonCode;
	}

	set reasonCode (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates another resource whose existence justifies this request.
	get reasonReference () {
		return this.__reasonReference;
	}

	set reasonReference (new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Comments made about the request by the requester, sender, recipient, subject or other participants.
	get note () {
		return this.__note;
	}

	set note (new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			replaces: this.__replaces && this.__replaces.map(v => v.toJSON()),
			groupIdentifier: this.__groupIdentifier && this.__groupIdentifier.toJSON(),
			status: this.__status,
			category: this.__category && this.__category.map(v => v.toJSON()),
			priority: this.__priority,
			medium: this.__medium && this.__medium.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			recipient: this.__recipient && this.__recipient.map(v => v.toJSON()),
			topic: this.__topic && this.__topic.map(v => v.toJSON()),
			context: this.__context && this.__context.toJSON(),
			payload: this.__payload && this.__payload.map(v => v.toJSON()),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			authoredOn: this.__authoredOn,
			sender: this.__sender && this.__sender.toJSON(),
			requester: this.__requester && this.__requester.toJSON(),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON())
		});
	}
}

module.exports = CommunicationRequest;
