import type { LinkCategory } from '../quick-link';

export const gstVatLinks: LinkCategory[] = [
    {
        title: "GST Portals",
        links: [
            { label: "GST Common Portal", href: "https://www.gst.gov.in/" },
            { label: "GST E-way Bill Portal", href: "https://ewaybillgst.gov.in/" },
            { label: "GST Council", href: "https://gstcouncil.gov.in/" }
        ]
    },
    {
        title: "State VAT & Commercial Tax Portals",
        links: [
            { label: "Andhra Pradesh Commercial Taxes", href: "https://www.apct.gov.in/" },
            { label: "Delhi Value Added Tax", href: "http://dvat.gov.in/" },
            { label: "Gujarat Commercial Tax", href: "https://commercialtax.gujarat.gov.in/" },
            { label: "Karnataka Commercial Taxes", href: "https://gst.kar.nic.in/" },
            { label: "Maharashtra Goods and Services Tax", href: "https://www.mahagst.gov.in/" },
            { label: "Tamil Nadu Commercial Taxes", href: "https://www.tnvat.gov.in/" },
            { label: "Telangana Commercial Taxes", href: "https://www.tgct.gov.in/" },
            { label: "West Bengal Commercial Taxes", href: "http://www.wbcomtax.nic.in/" }
        ]
    }
];
