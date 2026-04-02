const checkFullPriceDate = (mockNow) => {
    const now = new Date(mockNow);
    const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));

    const start = new Date(2026, 2, 10, 0, 0, 0); // March 10, 2026
    const end = new Date(2026, 2, 31, 23, 59, 59); // March 31, 2026

    if (colombiaTime < start) {
        return "FULL PRICE: DISABLED: Disponible del 10 al 31 de marzo";
    } else if (colombiaTime >= start && colombiaTime <= end) {
        return "FULL PRICE: ENABLED: Pagar programa completo";
    } else {
        return "FULL PRICE: DISABLED: Inscripciones cerradas";
    }
};

const checkPreventaDate = (mockNow) => {
    const now = new Date(mockNow);
    const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));

    // Ends March 10, 2026 00:00:00
    const end = new Date(2026, 2, 10, 0, 0, 0);

    if (colombiaTime < end) {
        return "PREVENTA: ENABLED: Pagar preventa";
    } else {
        return "PREVENTA: DISABLED: Preventa finalizada";
    }
};

const runTest = (name, dateStr) => {
    console.log(`\n--- Test Case: ${name} (${dateStr}) ---`);
    console.log(checkFullPriceDate(dateStr));
    console.log(checkPreventaDate(dateStr));
};

runTest("Today (Feb 9, 2026)", "2026-02-09T15:00:00Z");
runTest("In Range (March 15, 2026)", "2026-03-15T15:00:00Z");
runTest("Transition Point (March 10, 2026 00:01)", "2026-03-10T05:01:00Z"); // UTC for 00:01 COT
