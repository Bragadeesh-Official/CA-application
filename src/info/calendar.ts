export interface CalendarEvent {
    date: string;
    status: 'Past' | 'Tomorrow' | 'Today' | string;
    act: string;
    form: string;
    obligation: string;
    color?: string;
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
    {
        date: "02 Mar 2026, Mon",
        status: "Past",
        act: "Income Tax",
        form: "Form 26QB",
        obligation: "Deposit of TDS u/s 194-IA on payment made for purchase of property in January.",
        color: "blue"
    },
    {
        date: "02 Mar 2026, Mon",
        status: "Past",
        act: "Income Tax",
        form: "Form 26QC",
        obligation: "Deposit of TDS u/s 194-IB @ 5% on total payment of Rent more than 50,000 pm by individual or HUF (not liable to tax audit) during FY 25-26, where lease has terminated in January.",
        color: "blue"
    },
    {
        date: "02 Mar 2026, Mon",
        status: "Past",
        act: "Income Tax",
        form: "Form 26QD",
        obligation: "Deposit of TDS on certain payments made by individual/HUF u/s 194M for January.",
        color: "blue"
    },
    {
        date: "02 Mar 2026, Mon",
        status: "Past",
        act: "Income Tax",
        form: "Form 26QE",
        obligation: "Deposit of TDS on transfer of virtual digital asset u/s 194S, by an exchange, for January.",
        color: "blue"
    },
    {
        date: "07 Mar 2026, Sat",
        status: "Past",
        act: "Income Tax",
        form: "27C",
        obligation: "e-Filing of Declaration received by seller in February from buyer for obtaining goods without collection of tax (TCS).",
        color: "blue"
    },
    {
        date: "07 Mar 2026, Sat",
        status: "Past",
        act: "Income Tax",
        form: "Challan No. ITNS-281",
        obligation: "Payment of TDS/TCS deducted/collected in February.",
        color: "blue"
    },
    {
        date: "07 Mar 2026, Sat",
        status: "Past",
        act: "FEMA",
        form: "ECB-2",
        obligation: "Return of External Commercial Borrowings for February.",
        color: "purple"
    },
    {
        date: "10 Mar 2026, Tue",
        status: "Tomorrow",
        act: "Goods and Services Tax",
        form: "GSTR-7",
        obligation: "Monthly Return by Tax Deductors for February.",
        color: "green"
    },
    {
        date: "10 Mar 2026, Tue",
        status: "Tomorrow",
        act: "Goods and Services Tax",
        form: "GSTR-8",
        obligation: "Monthly Return by e-commerce operators for February.",
        color: "green"
    },
    {
        date: "11 Mar 2026, Wed",
        status: "3 days",
        act: "Goods and Services Tax",
        form: "GSTR-1",
        obligation: "Monthly Return of Outward Supplies for February for taxpayers with turnover > 5 crore or non-QRMP.",
        color: "green"
    },
    {
        date: "13 Mar 2026, Fri",
        status: "5 days",
        act: "Income Tax",
        form: "Form 15G/15H",
        obligation: "Filing of declarations received in February to the Commissioner of Income-tax.",
        color: "blue"
    },
    {
        date: "15 Mar 2026, Sun",
        status: "Upcoming",
        act: "Income Tax",
        form: "Advance Tax",
        obligation: "Fourth installment of advance tax for the assessment year 2026-27.",
        color: "blue"
    },
    {
        date: "15 Mar 2026, Sun",
        status: "Upcoming",
        act: "EPF",
        form: "ECR",
        obligation: "Monthly contribution and return filing for Provident Fund for February.",
        color: "orange"
    },
    {
        date: "20 Mar 2026, Fri",
        status: "Upcoming",
        act: "Goods and Services Tax",
        form: "GSTR-3B",
        obligation: "Monthly return and payment of tax for taxpayers with turnover > 5 crore for February.",
        color: "green"
    },
    {
        date: "20 Mar 2026, Fri",
        status: "Upcoming",
        act: "ESI",
        form: "Monthly Contribution",
        obligation: "Payment of Employee State Insurance contribution for February.",
        color: "red"
    },
    {
        date: "25 Mar 2026, Wed",
        status: "Upcoming",
        act: "Goods and Services Tax",
        form: "ITC-04",
        obligation: "Quarterly statement of goods sent to job worker and received back for January-March quarter.",
        color: "green"
    },
    {
        date: "30 Mar 2026, Mon",
        status: "Upcoming",
        act: "Income Tax",
        form: "Form 67",
        obligation: "Statement of income from a country outside India and Foreign Tax Credit for the previous year.",
        color: "blue"
    },
    {
        date: "31 Mar 2026, Tue",
        status: "Upcoming",
        act: "Income Tax",
        form: "Revised Return",
        obligation: "Last date to file belated/revised income tax return for Assessment Year 2025-26.",
        color: "blue"
    },
    {
        date: "31 Mar 2026, Tue",
        status: "Upcoming",
        act: "Companies Act",
        form: "MSME-1",
        obligation: "Half-yearly return with Registrar for outstanding payments to MSME suppliers.",
        color: "purple"
    },
    {
        date: "31 Mar 2026, Tue",
        status: "Upcoming",
        act: "Goods and Services Tax",
        form: "LUT (Letter of Undertaking)",
        obligation: "Renewal of Letter of Undertaking for export of goods/services without payment of IGST for FY 2026-27.",
        color: "green"
    }
];
