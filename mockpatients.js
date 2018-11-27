

const Address = require('./standards/3_0_1/Address.js');
const HumanName = require('./standards/3_0_1/HumanName.js');
const Narrative = require('./standards/3_0_1/Narrative.js');
const Patient = require('./standards/3_0_1/Patient');
const Bundle = require('./standards/3_0_1/Bundle');
const BundleEntry = require('./standards/3_0_1/BundleEntry');
const BundleLink = require('./standards/3_0_1/BundleLink');
const Identifier = require('./standards/3_0_1/Identifier');
const CodeableConcept = require('./standards/3_0_1/CodeableConcept');
const Coding = require('./standards/3_0_1/Coding');
const Period = require('./standards/3_0_1/Period.js');

// patient 1
var patient1 = new Patient();
patient1.id = "6619378668";

patient1Identifiers = new Array();

patient1Identifier1 = new Identifier();
patient1Identifiers.push(patient1Identifier1);
patient1Identifier1.value = "6619378668";
patient1Identifier1.use = "official";
patient1Identifier1.type = new CodeableConcept();
patient1Identifier1.type.coding = new Array();
patient1Identifier1TypeCode = new Coding();
patient1Identifier1TypeCode.code = "MR";
patient1Identifier1.type.coding.push(patient1Identifier1TypeCode);
patient1Identifier1.system = "urn://exscribe.com/ehr";

patient1Identifier2 = new Identifier();
patient1Identifiers.push(patient1Identifier2);
patient1Identifier2.value = "333-80-1619";
patient1Identifier2.use = "official";
patient1Identifier2.type = new CodeableConcept();
patient1Identifier2.type.coding = new Array();
patient1Identifier2TypeCode = new Coding();
patient1Identifier2TypeCode.code = "SB";
patient1Identifier2.type.coding.push(patient1Identifier2TypeCode);

patient1.identifier = patient1Identifiers;

patient1.text = new Narrative();
patient1.text.status = "generated";
patient1.text.div = "<div>Dr Illa Willeson III</div>";

patient1.name = new Array();

// old name patient 1
patient1Name = new HumanName();
patient1.name.push(patient1Name);
patient1Name.prefix = "Dr";
patient1Name.given = new Array();
patient1Name.given.push("Illa");
patient1Name.family = "Willeson";
patient1Name.suffix = "III";
patient1Name.period = new Period();
patient1Name.period.start = "1/30/1984";
patient1Name.period.end = "6/30/2009";

// new name patient 1
patient1Name2 = new HumanName();
patient1.name.push(patient1Name2);
patient1Name2.prefix = "Dr";
patient1Name2.given = new Array();
patient1Name2.given.push("Illa");
patient1Name2.family = "Stevenson";
patient1Name2.period = new Period();
patient1Name2.period.start = "6/30/2009";

patient1.gender = "female";
patient1.birthDate = "1984-01-30";

patient1Addr = new Address();
patient1Addr.use = "home";
patient1Addr.type = "postal";
patient1Addr.line = new Array();
patient1Addr.line.push("0003 Gulseth Street");
patient1Addr.city = "Bloomington";
patient1Addr.state = "IL";
patient1Addr.postalCode = "61709";
patient1Addr.country = "USA";

patient1.address = new Array();
patient1.address.push(patient1Addr);

//patient 2
var patient2 = new Patient();
patient2.id = "8007250697";

patient2.Identifier = new Array();
patient2Identifier = new Identifier();
patient2.Identifier.push(patient2Identifier);
patient2Identifier.value = "8007250697";
patient2Identifier.use = "official";
patient2Identifier.type = "Mrs";
patient2Identifier.system = "urn://exscribe.com/ehr";

patient2.text = new Narrative();
patient2.text.status = "generated";
patient2.text.div = "<div>Astra Divall</div>";
patient2.name = new Array();
patient2Name = new HumanName();
patient2.name.push(patient2Name);
patient2Name.family = "Divall";
patient2Name.given = new Array();
patient2Name.given.push("Astra");
patient2.gender = "female";
patient2.birthDate = "1973-02-07";

patient2Addr = new Address();
patient2Addr.use = "home";
patient2Addr.type = "postal";
patient2Addr.line = new Array();
patient2Addr.line.push("0206 David Place");
patient2Addr.city = "Boston";
patient2Addr.state = "MA";
patient2Addr.postalCode = "02216";
patient2Addr.country = "USA";
patient2.address = new Array();
patient2.address.push(patient2Addr);

//patient 3
var patient3 = new Patient();
patient3.id = "6867144748";

patient3.Identifier = new Array();
patient3Identifier = new Identifier();
patient3.Identifier.push(patient3Identifier);
patient3Identifier.value = "6867144748";
patient3Identifier.use = "official";
patient3Identifier.type = "Mr";
patient3Identifier.system = "urn://exscribe.com/ehr";

patient3.text = new Narrative();
patient3.text.status = "generated";
patient3.text.div = "<div>Sully Kitchaside</div>";
patient3.name = new Array();
patient3Name = new HumanName();
patient3.name.push(patient3Name);
patient3Name.family = "Kitchaside";
patient3Name.given = new Array();
patient3Name.given.push("Sully");
patient3.gender = "male";
patient3.birthDate = "1945-11-21";

patient3Addr = new Address();
patient3Addr.use = "home";
patient3Addr.type = "postal";
patient3Addr.line = new Array();
patient3Addr.line.push("15 Kenwood Trail");
patient3Addr.city = "Des Moines";
patient3Addr.state = "IA";
patient3Addr.postalCode = "50981";
patient3Addr.country = "USA";
patient3.address = new Array();
patient3.address.push(patient3Addr);

//patient 4
var patient4 = new Patient();
patient4.id = "1912772485";

patient4.Identifier = new Array();
patient4Identifier = new Identifier();
patient4.Identifier.push(patient4Identifier);
patient4Identifier.value = "1912772485";
patient4Identifier.use = "official";
patient4Identifier.type = "Mr";
patient4Identifier.system = "urn://exscribe.com/ehr";

patient4.text = new Narrative();
patient4.text.status = "generated";
patient4.text.div = "<div>Lizzy Favela</div>";
patient4.name = new Array();
patient4Name = new HumanName();
patient4.name.push(patient4Name);
patient4Name.family = "Favela";
patient4Name.given = new Array();
patient4Name.given.push("Lizzy");
patient4.gender = "female";
patient4.birthDate = "1945-11-21";

patient4Addr = new Address();
patient4Addr.use = "home";
patient4Addr.type = "postal";
patient4Addr.line = new Array();
patient4Addr.line.push("524 Porter Park");
patient4Addr.city = "Huntington";
patient4Addr.state = "WV";
patient4Addr.postalCode = "25716";
patient4Addr.country = "USA";
patient4.address = new Array();
patient4.address.push(patient4Addr);

//patient 5
var patient5 = new Patient();
patient5.id = "3487946874";

patient5.Identifier = new Array();
patient5Identifier = new Identifier();
patient5.Identifier.push(patient5Identifier);
patient5Identifier.value = "3487946874";
patient5Identifier.use = "official";
patient5Identifier.type = "Ms";
patient5Identifier.system = "urn://exscribe.com/ehr";

patient5.text = new Narrative();
patient5.text.status = "generated";
patient5.text.div = "<div>Randie Godmar</div>";
patient5.name = new Array();
patient5Name = new HumanName();
patient5.name.push(patient5Name);
patient5Name.family = "Godmar";
patient5Name.given = new Array();
patient5Name.given.push("Randie");
patient5.gender = "male";
patient5.birthDate = "1971-03-15";

patient5Addr = new Address();
patient5Addr.use = "home";
patient5Addr.type = "postal";
patient5Addr.line = new Array();
patient5Addr.line.push("96 Harbort Avenue");
patient5Addr.city = "Portsmouth";
patient5Addr.state = "VA";
patient5Addr.postalCode = "23705";
patient5Addr.country = "USA";
patient5.address = new Array();
patient5.address.push(patient5Addr);

//patient 6
var patient6 = new Patient();
patient6.id = "9343603010";

patient6.Identifier = new Array();
patient6Identifier = new Identifier();
patient6.Identifier.push(patient6Identifier);
patient6Identifier.value = "9343603010";
patient6Identifier.use = "official";
patient6Identifier.type = "";
patient6Identifier.system = "urn://exscribe.com/ehr";

patient6.text = new Narrative();
patient6.text.status = "generated";
patient6.text.div = "<div>Dew Truitt</div>";
patient6.name = new Array();
patient6Name = new HumanName();
patient6.name.push(patient6Name);
patient6Name.family = "Truitt";
patient6Name.given = new Array();
patient6Name.given.push("Dew");
patient6.gender = "male";
patient6.birthDate = "1935-07-02";

patient6Addr = new Address();
patient6Addr.use = "home";
patient6Addr.type = "postal";
patient6Addr.line = new Array();
patient6Addr.line.push("8 Kedzie Hill");
patient6Addr.city = "Monticello";
patient6Addr.state = "MN";
patient6Addr.postalCode = "55565";
patient6Addr.country = "USA";
patient6.address = new Array();
patient6.address.push(patient6Addr);

//patient 7
var patient7 = new Patient();
patient7.id = "4044537585";

patient7.Identifier = new Array();
patient7Identifier = new Identifier();
patient7.Identifier.push(patient7Identifier);
patient7Identifier.value = "4044537585";
patient7Identifier.use = "official";
patient7Identifier.type = "Mrs";
patient7Identifier.system = "urn://exscribe.com/ehr";

patient7.text = new Narrative();
patient7.text.status = "generated";
patient7.text.div = "<div>Ralina Bummfrey</div>";
patient7.name = new Array();
patient7Name = new HumanName();
patient7.name.push(patient7Name);
patient7Name.family = "Bummfrey";
patient7Name.given = new Array();
patient7Name.given.push("Ralina");
patient7.gender = "female";
patient7.birthDate = "1932-03-07";

patient7Addr = new Address();
patient7Addr.use = "home";
patient7Addr.type = "postal";
patient7Addr.line = new Array();
patient7Addr.line.push("6471 Holy Cross Avenue");
patient7Addr.city = "Hartford";
patient7Addr.state = "CT";
patient7Addr.postalCode = "06140";
patient7Addr.country = "USA";
patient7.address = new Array();
patient7.address.push(patient7Addr);

//patient 8
var patient8 = new Patient();
patient8.id = "5639788240";

patient8.Identifier = new Array();
patient8Identifier = new Identifier();
patient8.Identifier.push(patient8Identifier);
patient8Identifier.value = "5639788240";
patient8Identifier.use = "official";
patient8Identifier.type = "Ms";
patient8Identifier.system = "urn://exscribe.com/ehr";

patient8.text = new Narrative();
patient8.text.status = "generated";
patient8.text.div = "<div>Svend Menzies</div>";
patient8.name = new Array();
patient8Name = new HumanName();
patient8.name.push(patient8Name);
patient8Name.family = "Menzies";
patient8Name.given = new Array();
patient8Name.given.push("Svend");
patient8.gender = "female";
patient8.birthDate = "1984-07-30";

patient8Addr = new Address();
patient8Addr.use = "home";
patient8Addr.type = "postal";
patient8Addr.line = new Array();
patient8Addr.line.push("3 Dayton Avenue");
patient8Addr.city = "Detroit";
patient8Addr.state = "MI";
patient8Addr.postalCode = "48295";
patient8Addr.country = "USA";
patient8.address = new Array();
patient8.address.push(patient8Addr);

//patient 9
var patient9 = new Patient();
patient9.id = "6014807888";

patient9.Identifier = new Array();
patient9Identifier = new Identifier();
patient9.Identifier.push(patient9Identifier);
patient9Identifier.value = "6014807888";
patient9Identifier.use = "official";
patient9Identifier.type = "Mrs";
patient9Identifier.system = "urn://exscribe.com/ehr";

patient9.text = new Narrative();
patient9.text.status = "generated";
patient9.text.div = "<div>Maribel Gentsch</div>";
patient9.name = new Array();
patient9Name = new HumanName();
patient9.name.push(patient9Name);
patient9Name.suffix = "IV";
patient9Name.family = "Gentsch";
patient9Name.given = new Array();
patient9Name.given.push("Maribel");
patient9.gender = "female";
patient9.birthDate = "1991-05-01";

patient9Addr = new Address();
patient9Addr.use = "home";
patient9Addr.type = "postal";
patient9Addr.line = new Array();
patient9Addr.line.push("25046 Twin Pines Crossing");
patient9Addr.city = "Shawnee Mission";
patient9Addr.state = "KS";
patient9Addr.postalCode = "66205";
patient9Addr.country = "USA";
patient9.address = new Array();
patient9.address.push(patient9Addr);

//patient 10
var patient10 = new Patient();
patient10.id = "8740784851";

patient10.Identifier = new Array();
patient10Identifier = new Identifier();
patient10.Identifier.push(patient10Identifier);
patient10Identifier.value = "8740784851";
patient10Identifier.use = "official";
patient10Identifier.type = "";
patient10Identifier.system = "urn://exscribe.com/ehr";

patient10.text = new Narrative();
patient10.text.status = "generated";
patient10.text.div = "<div>Thain Murt</div>";
patient10.name = new Array();
patient10Name = new HumanName();
patient10.name.push(patient10Name);
patient10Name.suffix = "Jr";
patient10Name.family = "Murt";
patient10Name.given = new Array();
patient10Name.given.push("Thain");
patient10.gender = "female";
patient10.birthDate = "1935-11-13";

patient10Addr = new Address();
patient10Addr.use = "home";
patient10Addr.type = "postal";
patient10Addr.line = new Array();
patient10Addr.line.push("583 Upham Crossing");
patient10Addr.city = "Pittsburgh";
patient10Addr.state = "PA";
patient10Addr.postalCode = "15240";
patient10Addr.country = "USA";
patient10.address = new Array();
patient10.address.push(patient10Addr);

// bundle
var allPatients = new Bundle();
allPatients.total = 10;
allPatients.id = 'd9359126-89b4-4c42-92c6-c1df73189bb5';
allPatients.type = 'searchset';
allPatients.link = new Array();

allPatients_link = new BundleLink();
allPatients.link.push(allPatients_link);
allPatients_link.relation = "self";
allPatients_link.url="http:localhost:3000/Patient";

allPatients.entry = new Array();

allPatientsEntry1 = new BundleEntry();
allPatientsEntry1.resource = patient1;
allPatientsEntry1.fullUrl = "http:localhost:3000/Patient/6619378668";

allPatientsEntry2 = new BundleEntry();
allPatientsEntry2.resource = patient2;
allPatientsEntry2.fullUrl = "http:localhost:3000/Patient/8007250697";

allPatientsEntry3 = new BundleEntry();
allPatientsEntry3.resource = patient3;
allPatientsEntry3.fullUrl = "http:localhost:3000/Patient/6867144748";

allPatientsEntry4 = new BundleEntry();
allPatientsEntry4.resource = patient4;
allPatientsEntry4.fullUrl = "http:localhost:3000/Patient/1912772485";

allPatientsEntry5 = new BundleEntry();
allPatientsEntry5.resource = patient5;
allPatientsEntry5.fullUrl = "http:localhost:3000/Patient/3487946874";

allPatientsEntry6 = new BundleEntry();
allPatientsEntry6.resource = patient6;
allPatientsEntry6.fullUrl = "http:localhost:3000/Patient/9343603010";

allPatientsEntry7 = new BundleEntry();
allPatientsEntry7.resource = patient7;
allPatientsEntry7.fullUrl = "http:localhost:3000/Patient/4044537585";

allPatientsEntry8 = new BundleEntry();
allPatientsEntry8.resource = patient8;
allPatientsEntry8.fullUrl = "http:localhost:3000/Patient/5639788240";

allPatientsEntry9 = new BundleEntry();
allPatientsEntry9.resource = patient9;
allPatientsEntry9.fullUrl = "http:localhost:3000/Patient/6014807888";

allPatientsEntry10 = new BundleEntry();
allPatientsEntry10.resource = patient10;
allPatientsEntry10.fullUrl = "http:localhost:3000/Patient/8740784851";

allPatients.entry.push(allPatientsEntry1);
allPatients.entry.push(allPatientsEntry2);
allPatients.entry.push(allPatientsEntry3);
allPatients.entry.push(allPatientsEntry4);
allPatients.entry.push(allPatientsEntry5);
allPatients.entry.push(allPatientsEntry6);
allPatients.entry.push(allPatientsEntry7);
allPatients.entry.push(allPatientsEntry8);
allPatients.entry.push(allPatientsEntry9);
allPatients.entry.push(allPatientsEntry10);

// export the data as functions
module.exports = {
    getPatient1: function() {
        return patient1;
    },
    getPatient2: function() {
        return patient2;
    },
    getPatient3: function() {
        return patient3;
    },
    getPatient4: function() {
        return patient4;
    },
    getPatient5: function() {
        return patient5;
    },
    getPatient6: function() {
        return patient6;
    },
    getPatient7: function() {
        return patient7;
    },
    getPatient8: function() {
        return patient8;
    },
    getPatient9: function() {
        return patient9;
    },
    getPatient10: function() {
        return patient10;
    },
    getAllPatients: function() {
        return allPatients;
    },
    getPatientsArray: function() {
        return [
            patient1,
            patient2,
            patient3,
            patient4,
            patient5,
            patient6,
            patient7,
            patient8,
            patient9,
            patient10,
        ];
    },
};
