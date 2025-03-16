function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    let payee = grossSalary > 24000 ? grossSalary * 0.25 : grossSalary * 0.1;  

    let nhif = grossSalary > 50000 ? 1500 : 1200;

    let nssf = grossSalary * 0.06;

    let netSalary = grossSalary - (payee + nhif + nssf);

    return {
        GrossSalary: grossSalary,
        PAYE: payee,
        NHIF: nhif,
        NSSF: nssf,
        NetSalary: netSalary
    };
}

console.log(calculateNetSalary(50000, 10000));