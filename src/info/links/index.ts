import { quickLinks } from './quick-link';
import { importantLinks } from './important-link';
import { gstVatLinks } from './gst-vat-link';
import { easeOfDoingBusiness } from './ease-of-doing-business';
import type { LinkCategory } from './quick-link';

export const allResources: Record<string, { title: string; data: LinkCategory[] }> = {
    'quick-link': {
        title: 'Quick Links',
        data: quickLinks
    },
    'important-link': {
        title: 'Important Links',
        data: importantLinks
    },
    'gst-vat-link': {
        title: 'GST/VAT Links',
        data: gstVatLinks
    },
    'ease-of-doing-business': {
        title: 'Ease Of Doing Business',
        data: easeOfDoingBusiness
    }
};
