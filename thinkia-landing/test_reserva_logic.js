const checkReservaDate = (mockNow) => {
    const now = new Date(mockNow);
    const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));

    // Ends March 31, 2026 23:59:59
    const end = new Date(2026, 2, 31, 23, 59, 59);

    if (colombiaTime <= end) {
        return "RESERVA: ENABLED: Reservar mi lugar";
    } else {
        return "RESERVA: DISABLED: Las reservas cerraron";
    }
};

const runTest = (name, dateStr) => {
    console.log(`\n--- Test Case: ${name} (${dateStr}) ---`);
    console.log(checkReservaDate(dateStr));
};

runTest("Today (Feb 9, 2026)", "2026-02-09T15:00:00Z");
runTest("Before Deadline (March 31, 2026 23:00)", "2026-04-01T04:00:00Z"); // UTC for Mar 31 23:00 COT
runTest("After Deadline (April 1, 2026 00:01)", "2026-04-01T05:01:00Z"); // UTC for Apr 1 00:01 COT
