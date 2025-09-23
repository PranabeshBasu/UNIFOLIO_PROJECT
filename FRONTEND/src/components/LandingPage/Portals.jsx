import React from 'react';

// --- SVG Icons for this section (Updated for color consistency) ---
const StudentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-[#0182DF] p-2 rounded-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
);
const AdminIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-[#0182DF] p-2 rounded-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
);
const GovernmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-[#0182DF] p-2 rounded-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" />
    </svg>
);

// --- NEW, IMPROVED SVG Icons for Preview Data ---
const CgpaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
const TotalStudentsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const UniversitiesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);


// --- Reusable PortalCard component (with hover effect) ---
const PortalCard = ({ icon, title, description, buttonText, buttonColor, idPlaceholder, passPlaceholder, previewData }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl">
        <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
                {icon}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
            <form className="space-y-4 mt-6">
                <input type="text" placeholder={idPlaceholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3081BB]" />
                <input type="password" placeholder={passPlaceholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3081BB]" />
                <button type="submit" className={`${buttonColor} w-full text-white py-3 rounded-lg font-bold text-lg hover:bg-[#246494] transition-colors`}>
                    {buttonText}
                </button>
            </form>
        </div>
        <div className="bg-gray-50 p-6 border-t mt-auto">
            <h4 className="font-bold text-gray-700 mb-2">{title} Preview</h4>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
                {previewData.map(item => (
                    <div key={item.label} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.label}: <span className="font-semibold">{item.value}</span></span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


// --- Main Portals section component ---
const Portals = () => (
    <section id="portals" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">A Centralized Hub for Education</h2>
                <p className="text-lg text-gray-600 mt-4">One platform, multiple gateways. Secure access for every stakeholder.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <PortalCard
                    icon={<StudentIcon />}
                    title="Student Portal"
                    description="Access your personalized portfolio"
                    buttonText="Login to Dashboard"
                    buttonColor="bg-[#3081BB]"
                    idPlaceholder="Student ID"
                    passPlaceholder="Password"
                    previewData={[
                        { icon: <CgpaIcon />, label: 'CGPA', value: '8.5/10' },
                    ]}
                />
                <PortalCard
                    icon={<AdminIcon />}
                    title="College Admin Portal"
                    description="Manage institutional data"
                    buttonText="Access Admin Panel"
                    buttonColor="bg-[#3081BB]"
                    idPlaceholder="Admin ID"
                    passPlaceholder="Password"
                    previewData={[
                        { icon: <TotalStudentsIcon />, label: 'Students', value: '12,450' },
                    ]}
                />
                <PortalCard
                    icon={<GovernmentIcon />}
                    title="Government Portal"
                    description="National education oversight"
                    buttonText="Access Portal"
                    buttonColor="bg-[#3081BB]"
                    idPlaceholder="Official ID"
                    passPlaceholder="Secure Password"
                    previewData={[
                        { icon: <UniversitiesIcon />, label: 'Universities', value: '2,500' },
                    ]}
                />
            </div>
        </div>
    </section>
);

export default Portals;

