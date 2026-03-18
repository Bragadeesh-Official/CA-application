import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { allResources } from '../info/links';

const ResourcesPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const resource = category ? allResources[category] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    if (!resource) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested resource category does not exist.</p>
                    <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-950 text-white font-semibold rounded-xl hover:bg-blue-950/90 transition-colors">
                        <Home size={20} />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Breadcrumbs / Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1720px] mx-auto px-8 lg:px-10 py-8">
                    <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link to="/" className="hover:text-blue-950 transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-blue-950 font-medium">Knowledge Bank</span>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-semibold">{resource.title}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                {resource.title}
                            </h1>
                            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
                                Access important portals, forms, and digital services curated for your business needs.
                            </p>
                        </div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 self-start px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-[1720px] mx-auto px-8 lg:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resource.data.map((cat, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-300 overflow-hidden flex flex-col group"
                        >
                            <div className="px-8 py-6 bg-blue-950/5 border-b border-gray-100 group-hover:bg-blue-950/10 transition-colors">
                                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-blue-950 rounded-full" />
                                    {cat.title}
                                </h2>
                            </div>

                            <div className="p-4 flex-1">
                                <div className="flex flex-col gap-1">
                                    {cat.links.map((link, lIdx) => (
                                        <a
                                            key={lIdx}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium text-gray-600 hover:bg-blue-950/5 hover:text-blue-950 transition-all group/link"
                                        >
                                            <span className="flex-1 pr-4">{link.label}</span>
                                            <ExternalLink
                                                size={14}
                                                className="text-gray-300 group-hover/link:text-blue-950/40 opacity-0 group-hover/link:opacity-100 transition-all"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-400 font-medium">
                                {cat.links.length} Links Available
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
