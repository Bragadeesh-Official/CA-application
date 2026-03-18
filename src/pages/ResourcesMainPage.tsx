import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Link as LinkIcon, Download, FileText, ArrowRight } from 'lucide-react';
import { allResources } from '../info/links';

const ResourcesMainPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const resourceKeys = Object.keys(allResources);

    const getIconForCategory = (key: string) => {
        switch (key) {
            case 'quick-link': return <LinkIcon className="text-blue-950" size={28} />;
            case 'important-link': return <ExternalLink className="text-blue-600" size={28} />;
            case 'gst-vat-link': return <FileText className="text-teal-600" size={28} />;
            case 'ease-of-doing-business': return <Download className="text-purple-600" size={28} />;
            default: return <FileText className="text-blue-950" size={28} />;
        }
    };

    const getColorClass = (key: string) => {
        switch (key) {
            case 'quick-link': return 'hover:border-blue-950/20 hover:shadow-blue-950/10 group-hover:text-blue-950';
            case 'important-link': return 'hover:border-blue-600/20 hover:shadow-blue-600/10 group-hover:text-blue-600';
            case 'gst-vat-link': return 'hover:border-teal-600/20 hover:shadow-teal-600/10 group-hover:text-teal-600';
            case 'ease-of-doing-business': return 'hover:border-purple-600/20 hover:shadow-purple-600/10 group-hover:text-purple-600';
            default: return 'hover:border-blue-950/20 hover:shadow-blue-950/10 group-hover:text-blue-950';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1720px] mx-auto px-8 lg:px-10 py-16 md:py-24 text-center">
                    <h2 className="text-blue-950 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Knowledge Base</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Important Resources
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Access our comprehensive collection of important links, portals, and tools curated specifically to support your business compliance and growth.
                    </p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-[1720px] mx-auto px-8 lg:px-10 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resourceKeys.map((key) => {
                        const category = allResources[key];
                        const totalLinks = category.data.reduce((acc, curr) => acc + curr.links.length, 0);
                        const hoverClass = getColorClass(key);
                        
                        return (
                            <div
                                key={key}
                                onClick={() => navigate(`/resources/${key}`)}
                                className={`group p-8 rounded-[2.5rem] bg-white border border-gray-100 transition-all duration-500 cursor-pointer flex flex-col gap-6 hover:shadow-2xl hover:-translate-y-1 ${hoverClass.split(' ')[0]} ${hoverClass.split(' ')[1]}`}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                    {getIconForCategory(key)}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className={`text-2xl font-bold text-gray-900 transition-colors ${hoverClass.split(' ')[2]}`}>
                                        {category.title}
                                    </h4>
                                    <p className="text-gray-600 text-[15px] leading-relaxed">
                                        Explore {totalLinks} essential links across {category.data.length} sub-categories designed for {category.title.toLowerCase()}.
                                    </p>
                                </div>

                                <div className={`mt-auto flex items-center gap-2 font-bold text-sm transition-transform group-hover:translate-x-2 ${hoverClass.split(' ')[2].replace('group-hover:', '')}`}>
                                    View Link Directory
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ResourcesMainPage;
