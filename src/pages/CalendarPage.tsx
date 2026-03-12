import React, { useState, useEffect } from 'react';
import {
    Search,
    ChevronDown,
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    FileText,
    Download,
    Calendar,
    X
} from 'lucide-react';
import { createClient } from '../prismicio';
import type { TaxComplianceDocument } from '../prismic-types';
// import { CALENDAR_EVENTS } from '../info/calendar';
import type { CalendarEvent } from '../info/calendar';

const CalendarPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All Categories');
    const [currentTime, setCurrentTime] = useState(new Date());

    // Date Filter State
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isDateDialogOpen, setIsDateDialogOpen] = useState(false);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    // Prismic Data State
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const client = createClient();
                const response = await client.getSingle<TaxComplianceDocument>('tax-compliance-detail');

                if (response.data.tax_and_compilance_group) {
                    const mappedEvents: CalendarEvent[] = response.data.tax_and_compilance_group.map(item => {
                        const date = item.due_date ? new Date(item.due_date) : new Date();
                        // Let's just do a manual format for better accuracy
                        const d = date.getDate().toString().padStart(2, '0');
                        const m = date.toLocaleDateString('en-GB', { month: 'short' });
                        const y = date.getFullYear();
                        const w = date.toLocaleDateString('en-GB', { weekday: 'short' });
                        const finalDateStr = `${d} ${m} ${y}, ${w}`;

                        return {
                            date: finalDateStr,
                            act: item.act_name || '',
                            form: item.form_resource || '',
                            obligation: item.nature_of_compilance || '',
                            status: '' // calculated dynamically via getStatus
                        };
                    });
                    setEvents(mappedEvents);
                }
            } catch (error) {
                console.error("Error fetching calendar events from Prismic:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getStatus = (eventDateStr: string) => {
        const datePart = eventDateStr.split(',')[0].trim();
        const eventDate = new Date(datePart);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        eventDate.setHours(0, 0, 0, 0);

        const diffTime = eventDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return 'Past';
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Tomorrow';
        return 'Upcoming';
    };

    const allFilteredEvents = events.filter(event => {
        const matchesSearch =
            event.obligation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.form.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.act.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = categoryFilter === 'All Categories' || event.act === categoryFilter;

        // Date Range Filtering
        const datePart = event.date.split(',')[0].trim();
        const eventDate = new Date(datePart);
        const matchesStartDate = !startDate || eventDate >= new Date(startDate);
        const matchesEndDate = !endDate || eventDate <= new Date(endDate);

        return matchesSearch && matchesCategory && matchesStartDate && matchesEndDate;
    });

    // Pagination Logic
    const totalItems = allFilteredEvents.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedEvents = allFilteredEvents.slice(startIndex, startIndex + itemsPerPage);

    const categories = ['All Categories', ...new Set(events.map(e => e.act))];

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, categoryFilter, itemsPerPage, startDate, endDate]);

    const handleExport = (type: 'PDF' | 'CSV') => {
        if (type === 'PDF') {
            window.print();
            return;
        }

        const headers = ['Due Date', 'Act', 'Form / Resource', 'Nature of Compliance'];
        const rows = allFilteredEvents.map(event => [
            `"${event.date}"`,
            `"${event.act}"`,
            `"${event.form}"`,
            `"${event.obligation.replace(/"/g, '""')}"`
        ]);

        const content = [headers, ...rows].map(e => e.join(",")).join("\n");
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `compliance_calendar_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-white pb-12 text-sm">
            <style>
                {`
                @media print {
                    nav, .xl\\:flex-row, .mt-6, .mt-8, .pt-8 h1 p, .text-right {
                        display: none !important;
                    }
                    .max-w-\\[1440px\\] {
                        max-width: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    table {
                        width: 100% !important;
                        border-collapse: collapse !important;
                    }
                    th, td {
                        border: 1px solid #e2e8f0 !important;
                        padding: 8px !important;
                        font-size: 10px !important;
                    }
                    th {
                        background-color: #4f46e5 !important;
                        color: white !important;
                        -webkit-print-color-adjust: exact;
                    }
                }
                `}
            </style>
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                            <CalendarIcon size={28} className="text-indigo-600" />
                            Tax & Compliance <span className="text-indigo-600">Calendar</span>
                        </h1>
                        <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest font-bold">Live Compliance Monitoring System</p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-black text-indigo-700 bg-indigo-50/50 px-5 py-2.5 rounded-2xl border border-indigo-100 shadow-sm inline-flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                            {currentTime.toLocaleString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: true
                            })}
                        </div>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col xl:flex-row gap-4 items-center mb-6">
                    <div className="relative w-full xl:flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Find compliance by form, act or obligation..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border-2 border-transparent border-b-gray-100 focus:bg-white focus:border-indigo-400 outline-none transition-all text-sm font-medium"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">

                        {/* Search by Date Button */}
                        <button
                            onClick={() => setIsDateDialogOpen(true)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl border font-bold text-sm uppercase tracking-widest transition-all active:scale-95 shadow-sm ${startDate || endDate
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100'
                                : 'bg-white border-gray-100 text-gray-700 hover:border-indigo-400 hover:text-indigo-600'
                                }`}
                        >
                            <Calendar size={16} />
                            {startDate || endDate ? `${startDate ? 'From ' + startDate : ''} ${endDate ? 'To ' + endDate : ''}`.trim() : 'Search by Date'}
                        </button>

                        <div className="relative w-full sm:w-60 md:w-64">
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="w-full pl-4 pr-10 py-3 bg-gray-50/50 border border-gray-200 rounded-xl appearance-none focus:bg-white focus:border-indigo-400 outline-none text-sm font-bold text-gray-700 cursor-pointer"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>

                        <div className="relative w-44 shrink-0 font-bold">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                className="w-full pl-4 pr-10 py-3 bg-gray-50/50 border border-gray-200 rounded-xl appearance-none focus:bg-white focus:border-indigo-400 outline-none text-sm font-bold text-gray-700 cursor-pointer text-center"
                            >
                                <option value={20}>20 per page</option>
                                <option value={50}>50 per page</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                </div>

                {/* Simple Date Filter Dialog */}
                {isDateDialogOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-base font-bold text-gray-900">Filter by Date</h2>
                                <button
                                    onClick={() => setIsDateDialogOpen(false)}
                                    className="p-1 hover:bg-gray-100 rounded-md transition-colors text-gray-400 hover:text-gray-600"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-600">Start Date</label>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 text-sm font-medium text-gray-900"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-600">End Date</label>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 text-sm font-medium text-gray-900"
                                    />
                                </div>

                                <div className="pt-4 flex flex-col gap-2">
                                    <button
                                        onClick={() => setIsDateDialogOpen(false)}
                                        className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors"
                                    >
                                        Apply Filters
                                    </button>
                                    <button
                                        onClick={() => { setStartDate(''); setEndDate(''); setIsDateDialogOpen(false); }}
                                        className="w-full py-2.5 bg-white border border-gray-200 text-gray-600 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors"
                                    >
                                        Clear All Date Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Compact Grid Table */}
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-4 py-3 text-xs font-bold text-gray-800 uppercase tracking-widest border-r border-gray-100 w-48 text-center bg-indigo-600 text-white">Due Date</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-800 uppercase tracking-widest border-r border-gray-100 w-32 text-center bg-indigo-600 text-white">Act</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-800 uppercase tracking-widest border-r border-gray-100 w-48 text-center bg-indigo-600 text-white">Form / Resource</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-800 uppercase tracking-widest text-center bg-indigo-600 text-white">Nature of Compliance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-24 text-center">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                                                <p className="text-sm font-bold text-gray-500">Loading compliance data...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : paginatedEvents.length > 0 ? (
                                    paginatedEvents.map((event, idx) => {
                                        const dynamicStatus = getStatus(event.date);
                                        return (
                                            <tr key={idx} className="hover:bg-indigo-50/20 transition-all group">
                                                <td className="px-4 py-4 align-top border-r border-gray-100">
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-sm font-bold text-gray-900">{event.date}</span>
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider w-fit border ${dynamicStatus === 'Past' ? 'bg-red-50 text-red-600 border-red-100' :
                                                            dynamicStatus === 'Today' ? 'bg-green-50 text-green-600 border-green-100' :
                                                                dynamicStatus === 'Tomorrow' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                                                    'bg-indigo-50 text-indigo-600 border-indigo-100'
                                                            }`}>
                                                            {dynamicStatus}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 align-top border-r border-gray-100">
                                                    <span className="text-xs font-bold text-indigo-600 uppercase">
                                                        {event.act}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 align-top border-r border-gray-100">
                                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{event.form}</span>
                                                </td>
                                                <td className="px-4 py-4 align-top">
                                                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                                        {event.obligation}
                                                    </p>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-24 text-center">
                                            <div className="flex flex-col items-center gap-3 opacity-50">
                                                <Search size={32} className="text-gray-300" />
                                                <h3 className="text-lg font-bold">No compliance dates found</h3>
                                                <p className="text-sm">Try refining your search or filter.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination & Export Control Bar */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-4">
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                            Showing {Math.min(startIndex + 1, totalItems)} to {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-40 transition-all active:scale-95"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <div className="flex items-center gap-1">
                                {[...Array(totalPages)].map((_, i) => {
                                    const pageNum = i + 1;
                                    if (totalPages > 5 && (pageNum > 1 && pageNum < totalPages && Math.abs(pageNum - currentPage) > 1)) {
                                        if (pageNum === 2 || pageNum === totalPages - 1) return <span key={pageNum} className="px-1 text-gray-400">...</span>;
                                        return null;
                                    }
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => setCurrentPage(pageNum)}
                                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all border ${currentPage === pageNum
                                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                                                : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 shadow-sm'
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                            </div>
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-40 transition-all active:scale-95"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <ExportButton icon={<FileText size={16} />} label="PDF" onClick={() => handleExport('PDF')} />
                        <ExportButton icon={<Download size={16} />} label="CSV" onClick={() => handleExport('CSV')} />
                    </div>
                </div>

                {/* Footnote */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-[11px] text-gray-500 leading-relaxed italic">
                        <span className="font-bold uppercase tracking-wider mr-2 not-italic underline decoration-indigo-200">Note:</span>
                        This calendar is for general guidance. Tax laws change frequently; please consult our professionals to confirm specific dates. We are not liable for errors or omissions.
                    </p>
                </div>

            </div>
        </div>
    );
};

const ExportButton: React.FC<{ icon: React.ReactNode, label: string, onClick?: () => void }> = ({ icon, label, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all active:scale-95 shadow-sm group"
    >
        <span className="text-gray-400 group-hover:text-indigo-500 transition-colors">{icon}</span>
        {label}
    </button>
);

export default CalendarPage;
