const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ExplanationOfBenefit extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'ExplanationOfBenefit';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefit resource
	static get __resourceType () {
		return 'ExplanationOfBenefit';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__ExplanationOfBenefit = new_value;
	}

	// The EOB Business Identifier.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this.__status;
	}

	set status (new_value) {
		this.__status = new_value;
	}

	// The category of claim, eg, oral, pharmacy, vision, insitutional, professional.
	get type () {
		return this.__type;
	}

	set type (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType.
	get subType () {
		return this.__subType;
	}

	set subType (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__subType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Patient Resource.
	get patient () {
		return this.__patient;
	}

	set patient (new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The billable period for which charges are being submitted.
	get billablePeriod () {
		return this.__billablePeriod;
	}

	set billablePeriod (new_value) {
		const Period = require('./Period');
		this.__billablePeriod = new Period(new_value);
	}

	// The date when the EOB was created.
	get created () {
		return this.__created;
	}

	set created (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// The person who created the explanation of benefit.
	get enterer () {
		return this.__enterer;
	}

	set enterer (new_value) {
		const Reference = require('./Reference');
		this.__enterer = new Reference(new_value);
	}

	// The insurer which is responsible for the explanation of benefit.
	get insurer () {
		return this.__insurer;
	}

	set insurer (new_value) {
		const Reference = require('./Reference');
		this.__insurer = new Reference(new_value);
	}

	// The provider which is responsible for the claim.
	get provider () {
		return this.__provider;
	}

	set provider (new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The provider which is responsible for the claim.
	get organization () {
		return this.__organization;
	}

	set organization (new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// The referral resource which lists the date, practitioner, reason and other supporting information.
	get referral () {
		return this.__referral;
	}

	set referral (new_value) {
		const Reference = require('./Reference');
		this.__referral = new Reference(new_value);
	}

	// Facility where the services were provided.
	get facility () {
		return this.__facility;
	}

	set facility (new_value) {
		const Reference = require('./Reference');
		this.__facility = new Reference(new_value);
	}

	// The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
	get claim () {
		return this.__claim;
	}

	set claim (new_value) {
		const Reference = require('./Reference');
		this.__claim = new Reference(new_value);
	}

	// The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
	get claimResponse () {
		return this.__claimResponse;
	}

	set claimResponse (new_value) {
		const Reference = require('./Reference');
		this.__claimResponse = new Reference(new_value);
	}

	// Processing outcome errror, partial or complete processing.
	get outcome () {
		return this.__outcome;
	}

	set outcome (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication.
	get disposition () {
		return this.__disposition;
	}

	set disposition (new_value) {
		this.__disposition = new_value;
	}

	// Other claims which are related to this claim such as prior claim versions or for related services.
	get related () {
		return this.__related;
	}

	set related (new_value) {
		const ExplanationOfBenefitRelated = require('./ExplanationOfBenefitRelated');
		this.__related = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitRelated(val)) : [new ExplanationOfBenefitRelated(new_value)];
	}

	// Prescription to support the dispensing of Pharmacy or Vision products.
	get prescription () {
		return this.__prescription;
	}

	set prescription (new_value) {
		const Reference = require('./Reference');
		this.__prescription = new Reference(new_value);
	}

	// Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the \'prescription\' and that from the physician becomes the \'original prescription\'.
	get originalPrescription () {
		return this.__originalPrescription;
	}

	set originalPrescription (new_value) {
		const Reference = require('./Reference');
		this.__originalPrescription = new Reference(new_value);
	}

	// The party to be reimbursed for the services.
	get payee () {
		return this.__payee;
	}

	set payee (new_value) {
		const ExplanationOfBenefitPayee = require('./ExplanationOfBenefitPayee');
		this.__payee = new ExplanationOfBenefitPayee(new_value);
	}

	// Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
	get information () {
		return this.__information;
	}

	set information (new_value) {
		const ExplanationOfBenefitInformation = require('./ExplanationOfBenefitInformation');
		this.__information = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitInformation(val)) : [new ExplanationOfBenefitInformation(new_value)];
	}

	// The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
	get careTeam () {
		return this.__careTeam;
	}

	set careTeam (new_value) {
		const ExplanationOfBenefitCareTeam = require('./ExplanationOfBenefitCareTeam');
		this.__careTeam = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitCareTeam(val)) : [new ExplanationOfBenefitCareTeam(new_value)];
	}

	// Ordered list of patient diagnosis for which care is sought.
	get diagnosis () {
		return this.__diagnosis;
	}

	set diagnosis (new_value) {
		const ExplanationOfBenefitDiagnosis = require('./ExplanationOfBenefitDiagnosis');
		this.__diagnosis = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitDiagnosis(val)) : [new ExplanationOfBenefitDiagnosis(new_value)];
	}

	// Ordered list of patient procedures performed to support the adjudication.
	get procedure () {
		return this.__procedure;
	}

	set procedure (new_value) {
		const ExplanationOfBenefitProcedure = require('./ExplanationOfBenefitProcedure');
		this.__procedure = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitProcedure(val)) : [new ExplanationOfBenefitProcedure(new_value)];
	}

	// Precedence (primary, secondary, etc.).
	get precedence () {
		return this.__precedence;
	}

	set precedence (new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field precedence`);
		}
		this.__precedence = new_value;
	}

	// Financial instrument by which payment information for health care.
	get insurance () {
		return this.__insurance;
	}

	set insurance (new_value) {
		const ExplanationOfBenefitInsurance = require('./ExplanationOfBenefitInsurance');
		this.__insurance = new ExplanationOfBenefitInsurance(new_value);
	}

	// An accident which resulted in the need for healthcare services.
	get accident () {
		return this.__accident;
	}

	set accident (new_value) {
		const ExplanationOfBenefitAccident = require('./ExplanationOfBenefitAccident');
		this.__accident = new ExplanationOfBenefitAccident(new_value);
	}

	// The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).
	get employmentImpacted () {
		return this.__employmentImpacted;
	}

	set employmentImpacted (new_value) {
		const Period = require('./Period');
		this.__employmentImpacted = new Period(new_value);
	}

	// The start and optional end dates of when the patient was confined to a treatment center.
	get hospitalization () {
		return this.__hospitalization;
	}

	set hospitalization (new_value) {
		const Period = require('./Period');
		this.__hospitalization = new Period(new_value);
	}

	// First tier of goods and services.
	get item () {
		return this.__item;
	}

	set item (new_value) {
		const ExplanationOfBenefitItem = require('./ExplanationOfBenefitItem');
		this.__item = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitItem(val)) : [new ExplanationOfBenefitItem(new_value)];
	}

	// The first tier service adjudications for payor added services.
	get addItem () {
		return this.__addItem;
	}

	set addItem (new_value) {
		const ExplanationOfBenefitAddItem = require('./ExplanationOfBenefitAddItem');
		this.__addItem = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitAddItem(val)) : [new ExplanationOfBenefitAddItem(new_value)];
	}

	// The total cost of the services reported.
	get totalCost () {
		return this.__totalCost;
	}

	set totalCost (new_value) {
		const Money = require('./Money');
		this.__totalCost = new Money(new_value);
	}

	// The amount of deductable applied which was not allocated to any particular service line.
	get unallocDeductable () {
		return this.__unallocDeductable;
	}

	set unallocDeductable (new_value) {
		const Money = require('./Money');
		this.__unallocDeductable = new Money(new_value);
	}

	// Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable).
	get totalBenefit () {
		return this.__totalBenefit;
	}

	set totalBenefit (new_value) {
		const Money = require('./Money');
		this.__totalBenefit = new Money(new_value);
	}

	// Payment details for the claim if the claim has been paid.
	get payment () {
		return this.__payment;
	}

	set payment (new_value) {
		const ExplanationOfBenefitPayment = require('./ExplanationOfBenefitPayment');
		this.__payment = new ExplanationOfBenefitPayment(new_value);
	}

	// The form to be used for printing the content.
	get form () {
		return this.__form;
	}

	set form (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__form = new CodeableConcept(new_value);
	}

	// Note text.
	get processNote () {
		return this.__processNote;
	}

	set processNote (new_value) {
		const ExplanationOfBenefitProcessNote = require('./ExplanationOfBenefitProcessNote');
		this.__processNote = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitProcessNote(val)) : [new ExplanationOfBenefitProcessNote(new_value)];
	}

	// Balance by Benefit Category.
	get benefitBalance () {
		return this.__benefitBalance;
	}

	set benefitBalance (new_value) {
		const ExplanationOfBenefitBenefitBalance = require('./ExplanationOfBenefitBenefitBalance');
		this.__benefitBalance = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefitBenefitBalance(val)) : [new ExplanationOfBenefitBenefitBalance(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			subType: this.__subType && this.__subType.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			billablePeriod: this.__billablePeriod && this.__billablePeriod.toJSON(),
			created: this.__created,
			enterer: this.__enterer && this.__enterer.toJSON(),
			insurer: this.__insurer && this.__insurer.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			referral: this.__referral && this.__referral.toJSON(),
			facility: this.__facility && this.__facility.toJSON(),
			claim: this.__claim && this.__claim.toJSON(),
			claimResponse: this.__claimResponse && this.__claimResponse.toJSON(),
			outcome: this.__outcome && this.__outcome.toJSON(),
			disposition: this.__disposition,
			related: this.__related && this.__related.map(v => v.toJSON()),
			prescription: this.__prescription && this.__prescription.toJSON(),
			originalPrescription: this.__originalPrescription && this.__originalPrescription.toJSON(),
			payee: this.__payee && this.__payee.toJSON(),
			information: this.__information && this.__information.map(v => v.toJSON()),
			careTeam: this.__careTeam && this.__careTeam.map(v => v.toJSON()),
			diagnosis: this.__diagnosis && this.__diagnosis.map(v => v.toJSON()),
			procedure: this.__procedure && this.__procedure.map(v => v.toJSON()),
			precedence: this.__precedence,
			insurance: this.__insurance && this.__insurance.toJSON(),
			accident: this.__accident && this.__accident.toJSON(),
			employmentImpacted: this.__employmentImpacted && this.__employmentImpacted.toJSON(),
			hospitalization: this.__hospitalization && this.__hospitalization.toJSON(),
			item: this.__item && this.__item.map(v => v.toJSON()),
			addItem: this.__addItem && this.__addItem.map(v => v.toJSON()),
			totalCost: this.__totalCost && this.__totalCost.toJSON(),
			unallocDeductable: this.__unallocDeductable && this.__unallocDeductable.toJSON(),
			totalBenefit: this.__totalBenefit && this.__totalBenefit.toJSON(),
			payment: this.__payment && this.__payment.toJSON(),
			form: this.__form && this.__form.toJSON(),
			processNote: this.__processNote && this.__processNote.map(v => v.toJSON()),
			benefitBalance: this.__benefitBalance && this.__benefitBalance.map(v => v.toJSON())
		});
	}
}

module.exports = ExplanationOfBenefit;
