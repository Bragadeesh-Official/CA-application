export interface LinkItem {
    label: string;
    href: string;
}

export interface LinkCategory {
    title: string;
    links: LinkItem[];
}

export const quickLinks: LinkCategory[] = [
    {
        title: "Income Tax",
        links: [
            { label: "E-payment of Taxes", href: "https://eportal.incometax.gov.in/iec/foservices/#/e-pay-tax-prelogin/user-details" },
            { label: "Income Tax Assessee Login", href: "https://eportal.incometax.gov.in/iec/foservices/#/login" },
            { label: "Verify PAN (from Name & DOB)", href: "https://incometaxindia.gov.in/Pages/tax-services/online-pan-verification.aspx" },
            { label: "Status of Tax Refund", href: "https://tin.tin.nsdl.com/oltas/refundstatuslogin.html" },
            { label: "ITR-V Receipt Status", href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/itrStatus" },
            { label: "Know Your AO", href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/knowYourAO" },
            { label: "Online New PAN Application/ Correction of PAN", href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
            { label: "TAN Login", href: "https://www.tdscpc.gov.in/app/login.xhtml" },
            { label: "OLTAS Challan Status", href: "https://tin.tin.nsdl.com/oltas/index.html" },
            { label: "Verify Form 16A/16", href: "https://www.tdscpc.gov.in/app/tapn/tdstcscredit.xhtml" },
            { label: "Know TAN", href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/knowYourTAN" },
            { label: "Online TAN Application/Correction", href: "https://tin.tin.nsdl.com/tan/form49B.html" }
        ]
    },
    {
        title: "Service Tax/ Excise",
        links: [
            { label: "E-payment of Service Tax/ Excise", href: "https://www.cbic.gov.in/" },
            { label: "Know Challan Status", href: "https://echallan.parivahan.gov.in/index/accused-challan" },
            { label: "Assessee Search & Login", href: "https://cbic-gst.gov.in/cbec-portal-ui/?sabs" }
        ]
    },
    {
        title: "Ministry of Corporate Affairs",
        links: [
            { label: "MCA Portal", href: "https://www.mca.gov.in/" },
            { label: "Track SRN/Payment/Transaction", href: "https://www.mca.gov.in/content/mca/global/en/home.html" },
            { label: "MCA Login", href: "https://www.mca.gov.in/content/mca/global/en/login.html" }
        ]
    },
    {
        title: "Human Resources / Industrial Relations",
        links: [
            { label: "ESIC Portal Login", href: "https://www.esic.gov.in/login" },
            { label: "ESIC Employer Portal", href: "https://www.esic.gov.in/" },
            { label: "EPFO Portal", href: "https://www.epfindia.gov.in/" },
            { label: "PF Employer Login", href: "https://unifiedportal-emp.epfindia.gov.in/epfo/" },
            { label: "PF Employee Login", href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/" }
        ]
    },
    {
        title: "State VAT",
        links: [
            { label: "Delhi VAT Portal", href: "http://dvat.gov.in/" },
            { label: "Maharashtra VAT Portal", href: "https://www.mahagst.gov.in/" }
        ]
    },
    {
        title: "Professional Bodies",
        links: [
            { label: "ICAI", href: "https://www.icai.org/" },
            { label: "ICAI SSP Student/Member Login", href: "https://ssp.icai.org/" },
            { label: "ICSI", href: "https://www.icsi.edu/home/" }
        ]
    },
    {
        title: "Property Registration (TN)",
        links: [
            { label: "TNVreginet Portal", href: "https://tnreginet.gov.in/portal/" }
        ]
    },
    {
        title: "Others",
        links: [
            { label: "RBI", href: "https://www.rbi.org.in/" },
            { label: "SEBI", href: "https://www.sebi.gov.in/" },
            { label: "NSE", href: "https://www.nseindia.com/" },
            { label: "BSE", href: "https://www.bseindia.com/" }
        ]
    }
];
