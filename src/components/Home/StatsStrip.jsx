export default function StatsStrip() {
    const stats = [
      { value: '250+', label: 'Campaigns' },
      { value: '50M+', label: 'Client Reach in Social Media' },
      { value: '12000+', label: 'Creative Production' },
      { value: '70+', label: 'Twitter Trending in Top 5' },
      { value: '25+', label: 'Events Managed' },
      { value: '20+', label: 'VVIP Program Live' },
      { value: '350+', label: 'Employment Generation' },
      { value: '25 Lacs+', label: 'Database Management' },
    ];
  
    return (
      <section className="bg-white px-6 ">

        {/* Horizontal line */}
        <div className="w-full h-px bg-gray-300 mb-10" />
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-semibold text-black">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-gray-300 mt-10" />
      </section>
    );
  }
  