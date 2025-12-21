import jsPDF from "jspdf";


export function generatePDF(results, userInput){
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("investment Report", 14, 15);

    doc.setFontSize(12);
    doc.text(`Initial Investment: ${userInput.intInvestment}`, 14, 30);
    doc.text(`Annual Investment: ${userInput.annInvestment}`, 14, 38);
    doc.text(`Expected Return: ${userInput.expReturn}`, 14, 46);
    doc.text(`Duration: ${userInput.duration}`, 14, 54);
    
    let y = 70;
    results.forEach(r => {
        doc.text(
            `Year ${r.year}: Value ${r.intValue.toFixed(2)}, interest ${r.interest.toFixed(2)}`,
            14,
            y
        );
        y += 8;
        
    });

    doc.save("investment-report.pdf");
}