import type { LinkCategory } from '../quick-link';

export const easeOfDoingBusiness: LinkCategory[] = [
    {
        title: "Taxation Compliance",
        links: [
            { label: "Income Tax E-filing", href: "https://www.incometax.gov.in/" },
            { label: "ITR-V Status Tracker", href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/itrStatus" },
            { label: "Apply for PAN Online", href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
            { label: "Apply for TAN Online", href: "https://tin.tin.nsdl.com/tan/form49B.html" },
            { label: "OLTAS Challan Payment Status", href: "https://tin.tin.nsdl.com/oltas/index.html" }
        ]
    },
    {
        title: "Corporate Compliance",
        links: [
            { label: "MCA Master Data Verification", href: "https://www.mca.gov.in/content/mca/global/en/home.html" },
            { label: "CIN / Company Search", href: "https://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do" },
            { label: "Verify Signatory Details", href: "https://www.mca.gov.in/mcafoportal/viewSignatoryDetails.do" }
        ]
    },
    {
        title: "Labor & Social Security",
        links: [
            { label: "EPF Employer Portal", href: "https://unifiedportal-emp.epfindia.gov.in/epfo/" },
            { label: "ESIC Employer Portal", href: "https://www.esic.gov.in/" },
            { label: "PF Balance Inquiry", href: "https://passbook.epfindia.gov.in/MemberPassBook/Login" },
            { label: "PF Claim Status", href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/" }
        ]
    }
];
