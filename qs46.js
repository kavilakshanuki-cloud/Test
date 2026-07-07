function main() {
    lowestQuotation(25000, 18000, 22000, 20000);
}

function lowestQuotation(company1, company2, company3, company4) {

    if (company1 <= company2 && company1 <= company3 && company1 <= company4) {
        console.log("Company 1 has the lowest quotation: " + company1);
    } else if (company2 <= company1 && company2 <= company3 && company2 <= company4) {
        console.log("Company 2 has the lowest quotation: " + company2);
    } else if (company3 <= company1 && company3 <= company2 && company3 <= company4) {
        console.log("Company 3 has the lowest quotation: " + company3);
    } else {
        console.log("Company 4 has the lowest quotation: " + company4);
    }
}

main();