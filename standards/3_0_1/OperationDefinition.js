const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class OperationDefinition extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'OperationDefinition';
		Object.assign(this, opt);
	}

	// This is a OperationDefinition resource
	static get __resourceType () {
		return 'OperationDefinition';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__OperationDefinition = new_value;
	}

	// An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published. The URL SHOULD include the major version of the operation definition. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this.__url;
	}

	set url (new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this.__version;
	}

	set version (new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this.__name;
	}

	set name (new_value) {
		this.__name = new_value;
	}

	// The status of this operation definition. Enables tracking the life-cycle of the content.
	get status () {
		return this.__status;
	}

	set status (new_value) {
		this.__status = new_value;
	}

	// Whether this is an operation or a named query.
	get kind () {
		return this.__kind;
	}

	set kind (new_value) {
		this.__kind = new_value;
	}

	// A boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this.__experimental;
	}

	set experimental (new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the operation definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.
	get date () {
		return this.__date;
	}

	set date (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// The name of the individual or organization that published the operation definition.
	get publisher () {
		return this.__publisher;
	}

	set publisher (new_value) {
		this.__publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this.__contact;
	}

	set contact (new_value) {
		const ContactDetail = require('./ContactDetail');
		this.__contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// A free text natural language description of the operation definition from a consumer\'s perspective.
	get description () {
		return this.__description;
	}

	set description (new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate operation definition instances.
	get useContext () {
		return this.__useContext;
	}

	set useContext (new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the operation definition is intended to be used.
	get jurisdiction () {
		return this.__jurisdiction;
	}

	set jurisdiction (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Explaination of why this operation definition is needed and why it has been designed as it has.
	get purpose () {
		return this.__purpose;
	}

	set purpose (new_value) {
		this.__purpose = new_value;
	}

	// Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
	get idempotent () {
		return this.__idempotent;
	}

	set idempotent (new_value) {
		this.__idempotent = new_value;
	}

	// The name used to invoke the operation.
	get code () {
		return this.__code;
	}

	set code (new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	// Additional information about how to use this operation or named query.
	get comment () {
		return this.__comment;
	}

	set comment (new_value) {
		this.__comment = new_value;
	}

	// Indicates that this operation definition is a constraining profile on the base.
	get base () {
		return this.__base;
	}

	set base (new_value) {
		const Reference = require('./Reference');
		this.__base = new Reference(new_value);
	}

	// The types on which this operation can be executed.
	get resource () {
		return this.__resource;
	}

	set resource (new_value) {
		this.__resource = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
	get system () {
		return this.__system;
	}

	set system (new_value) {
		this.__system = new_value;
	}

	// Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
	get type () {
		return this.__type;
	}

	set type (new_value) {
		this.__type = new_value;
	}

	// Indicates whether this operation can be invoked on a particular instance of one of the given types.
	get instance () {
		return this.__instance;
	}

	set instance (new_value) {
		this.__instance = new_value;
	}

	// The parameters for the operation/query.
	get parameter () {
		return this.__parameter;
	}

	set parameter (new_value) {
		const OperationDefinitionParameter = require('./OperationDefinitionParameter');
		this.__parameter = Array.isArray(new_value) ? new_value.map(val => new OperationDefinitionParameter(val)) : [new OperationDefinitionParameter(new_value)];
	}

	// Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.
	get overload () {
		return this.__overload;
	}

	set overload (new_value) {
		const OperationDefinitionOverload = require('./OperationDefinitionOverload');
		this.__overload = Array.isArray(new_value) ? new_value.map(val => new OperationDefinitionOverload(val)) : [new OperationDefinitionOverload(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			version: this.__version,
			name: this.__name,
			status: this.__status,
			kind: this.__kind,
			experimental: this.__experimental,
			date: this.__date,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			purpose: this.__purpose,
			idempotent: this.__idempotent,
			code: this.__code,
			comment: this.__comment,
			base: this.__base && this.__base.toJSON(),
			resource: this.__resource,
			system: this.__system,
			type: this.__type,
			instance: this.__instance,
			parameter: this.__parameter && this.__parameter.map(v => v.toJSON()),
			overload: this.__overload && this.__overload.map(v => v.toJSON())
		});
	}
}

module.exports = OperationDefinition;
