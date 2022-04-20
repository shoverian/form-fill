var formContent = [
        changeEffectiveDate = {
            selector: document.querySelector("#ChangeEffectiveDate"),
            val: "04/31/2022"
        },
        // CUSTOMER INFO
        fullLegalName = {
            selector: document.querySelector("#fullLegalName"),
            val: "Testy McTesterson",
        },
        suffix = {
            selector: document.querySelector("#suffix"),
            val: 1,
        },
        customerPhone = { 
            selector: document.querySelector("#customerPhone"),
            val: "(555)555-5555",
        },
        customerPhone2 = {
            selector: document.querySelector("#bestWayReachPhoneNumber"),
            val: "(555)555-5555",
        },
        prefferedContactMethod = { 
            selector: document.querySelector("#PreferredContactMethod_2"),
            val: true,
        },
        // ADDRESS
        addressStreet = { 
            selector: document.querySelector("#lhAddressdesktop"),
            val: "123 Fake St",
        },
        addressUnit = { 
            selector: document.querySelector("#suitedesktop"),
            val: "Apt 2",
        },
        addressCity = { 
            selector: document.querySelector("#lhCitydesktop"),
            val: "Test City",
        },
        addressZip = { 
            selector: document.querySelector("#lhZipdesktop"),
            val: "23238",
        },
        // UNIQUE
        reasonForChange = { 
            selector: document.querySelector("#resonforchangedesktop"),
            val: 1,
        },
        //VEHICLE
        vehicleVin = {
            selector: document.querySelector("#vin"),
            val: "1HGCE1899RA009926",
        },
        vehicleYear = {
            selector: document.querySelector("#vYear"),
            val: 2021,
        },
        vehicleMake = {
            selector: document.querySelector("#vMake"),
            val: "Dodge",
        },
        vehicleModel = {
            selector: document.querySelector("#vModel"),
            val: "Ram",
        },
        vehiclePurchaseDate = {
            selector: document.querySelector("#pchDate"),
            val: "04/01/2022",
        },
        vehiclePrimaryDriver = {
            selector: document.querySelector("#NewVehicle_Primary_Driver"),
            val: "Testy McTesterson",
        },
        vehicleRegisteredOwners = {
            selector: document.querySelector("#NewVehicle_Registered_Owner"),
            val: "Testy and Testier McTesterson",
        },
        vehicleRegistrationState = {
            selector: document.querySelector("#SelectReg"),
            val: 55, // VA - Virginia
        },
        vehicleUsage = {
            selector: document.querySelector("#usageSelect"),
            val: 2, // Commuting to Work/School
        },
        vehicleDaysOperated = {
            selector: document.querySelector("#numDaysOp"),
            val: 5,
        },
        vehicleMilesDriven = {
            selector: document.querySelector("#distanceOp"),
            val: 10,
        },
        // COVERAGES - LIMITS/DEDUCTIBLES
        coverageOtherThanCollision = {
            selector: document.querySelector("#cvNonCollision"),
            val: 3, // $50 Deductible
        },
        coverageCollision = {
            selector: document.querySelector("#cvCollision"),
            val: 3, // $100 Deductible
        },
        coverageTowingAndLabor = {
            selector: document.querySelector("#cvTowLabor"),
            val: 3, // $75 Limit
        },
        coverageTransportationExpense = {
            selector: document.querySelector("#rentalReimb"),
            val: 3, // $900 Limit
        },
        // COVERAGES - OPTIONAL
        optionalRideshare = {
            selector: document.querySelector("#newVehicleReplacement"),
            val: true,
        },
        optionalAccidentForgiveness = {
            selector: document.querySelector("#rideshareCoverage"),
            val: true,
        },
        optionalNewVehicleReplacement = {
            selector: document.querySelector("#accidentForgiveness"),
            val: true,
        },
        //LIENHOLDER
        hasLienholder = {
            selector: document.querySelector("#LienholderYes"),
            val: true,
        },
        lienholderName = {
            selector: document.querySelector("#lhName"),
            val: "My Local Bank",
        },
        lienholderStreet = {
            selector: document.querySelector("#lhAddress"),
            val: "321 Fake St",
        },
        lienholderUnit = {
            selector: document.querySelector("#suite"),
            val: "Bldg 4",
        },
        lienholderCity = {
            selector: document.querySelector("#lhCity"),
            val: "Nowheresville",
        },
        lienholderState = {
            selector: document.querySelector("#SelectLhReg"),
            val: 55, // VA - Virginia
        },
        lienholderZip = {
            selector: document.querySelector("#lhZip"),
            val: 23238,
        },
        // APPLY TO
        productPolicy = { 
            // Select first policy in group
            selector: document.querySelector("[id^='policy--']"),
            val: true,
        },
        // COMMENT/DISCLAIMER
        comment = { 
            selector: document.querySelector("#commentsdesktop"),
            val: "This is a test comment.",
        },
        disclaimer = { 
            selector: document.querySelector("#disclaimerdesktop"),
            val: true,
        },
]

const fillForm = (arr) => {
    [...arr].forEach((item) => {
        // Check if selector exists continue
        if (item.selector) {
            // If the element is a text field, fill in string
            if (item.selector.type == 'text') {
                item.selector.value = item.val
            }
            // If the element is a radio or checkbox, check element
            if (item.selector.type == 'radio' || 'checkbox') {
                item.selector.checked = item.val
            }
            if (item.selector.type == 'select-one') {
                item.selector.selectedIndex = item.val
            }
        }
    })
}