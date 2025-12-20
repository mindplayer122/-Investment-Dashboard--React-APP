export function calInvResult({intInvestment,annInvestment,expReturn, duration}) {
    const result = [];

    let totalInvestment = intInvestment;
    let totalInterest = 0;


    for(let year = 1; year <= duration; year++) {
        const interest = totalInvestment *(expReturn/100);
        totalInterest += interest;

        totalInvestment += interest + annInvestment;

        result.push({
            year,
            intValue: totalInvestment,
            interest: interest,
            totalInterest:totalInterest,
            invCapital: intInvestment + annInvestment * year
        });
    }

    return result;
}