const checkDate = (mockNow) => {
    // Create date object for Colombia time
    // We simulate "now" by passing a date string or object
    const now = new Date(mockNow);
    // In the real code: const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));
    // Here we just use the mockNow as the "Colombia Time" for simplicity, or we try to replicate the conversion.
    // Let's replicate the conversion to be sure.
    const colombiaTimeStr = now.toLocaleString("en-US", { timeZone: "America/Bogota" });
    const colombiaTime = new Date(colombiaTimeStr);

    console.log(`Mock Now (UTC): ${now.toISOString()}`);
    console.log(`Colombia Time: ${colombiaTime.toString()}`);

    // Define ranges
    // Month is 0-indexed: March is 2
    const start = new Date(2026, 2, 10, 0, 0, 0); // March 10, 2026 00:00:00
    const end = new Date(2026, 2, 31, 23, 59, 59); // March 31, 2026 23:59:59

    console.log(`Start: ${start.toString()}`);
    console.log(`End: ${end.toString()}`);

    if (colombiaTime < start) {
        return "DISABLED: Disponible del 10 al 31 de marzo";
    } else if (colombiaTime >= start && colombiaTime <= end) {
        return "ENABLED: Pagar programa completo";
    } else {
        return "DISABLED: Inscripciones cerradas";
    }
};

// Test Case 1: Before Range (Today: Feb 9, 2026)
console.log("--- Test Case 1: Today (Feb 9, 2026) ---");
console.log("Result:", checkDate("2026-02-09T15:00:00Z")); // UTC

// Test Case 2: In Range (March 15, 2026)
console.log("\n--- Test Case 2: In Range (March 15, 2026) ---");
console.log("Result:", checkDate("2026-03-15T15:00:00Z")); // UTC

// Test Case 3: After Range (April 1, 2026)
console.log("\n--- Test Case 3: After Range (April 1, 2026) ---");
console.log("Result:", checkDate("2026-04-01T15:00:00Z")); // UTC
