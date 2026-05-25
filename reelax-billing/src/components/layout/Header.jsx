import { Search, Plus, Menu } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full relative">
      {/* Top decorative gradient border */}
      <div className="h-2 w-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24]" />
      
      <header className="h-[72px] bg-[#F4F6FA] flex items-center justify-between px-6 sticky top-0 z-50 font-sans">
        
        {/* Search Input Box */}
        <div className="hidden sm:flex w-full max-w-[420px]">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Find influencers to collaborate with"
              className="w-full pl-4 pr-10 py-2.5 text-sm bg-white border border-[#93C5FD] rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-[18px] h-[18px]" />
          </div>
        </div>

        {/* Mobile search icon variant */}
        <button className="sm:hidden p-2.5 text-gray-500 bg-white border border-[#93C5FD] rounded-lg shadow-sm">
          <Search className="w-[18px] h-[18px]" />
        </button>

        {/* Right side controls block */}
        <div className="flex items-center gap-3">
          
          {/* Upgrade Button */}
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#EAB308] hover:bg-yellow-600 rounded-lg transition-colors shadow-sm">
            {/* Custom Faceted Diamond SVG */}
            <svg 
              className="w-5 h-5 text-white fill-current" 
              viewBox="0 0 512 512"
            >
              {/* Top central sparkle line */}
              <line x1="256" y1="10" x2="256" y2="85" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
              {/* Top left sparkle line */}
              <line x1="150" y1="50" x2="200" y2="105" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
              {/* Top right sparkle line */}
              <line x1="362" y1="50" x2="312" y2="105" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />

              {/* Diamond Body Geometry */}
              {/* Left crown facet */}
              <polygon points="20,230 110,230 155,130 90,130" opacity="0.85" />
              {/* Left-center crown facet */}
              <polygon points="110,230 256,230 256,130 155,130" opacity="0.95" />
              {/* Right-center crown facet */}
              <polygon points="256,230 402,230 357,130 256,130" opacity="1.0" />
              {/* Right crown facet */}
              <polygon points="402,230 492,230 422,130 357,130" opacity="0.90" />
              
              {/* Outer left pavilion facet */}
              <polygon points="20,230 170,230 256,490" opacity="0.75" />
              {/* Center pavilion facet */}
              <polygon points="170,230 342,230 256,490" opacity="0.90" />
              {/* Outer right pavilion facet */}
              <polygon points="342,230 492,230 256,490" opacity="0.80" />
            </svg>
            <span className="hidden xs:inline text-[15px]">Upgrade</span>
            <span className="xs:hidden">Up</span>
          </button>

          {/* Create Campaign Button */}
          <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
            <Plus className="w-4 h-4 stroke-[3]" />
            <span className="hidden sm:inline">Create Campaign</span>
            <span className="sm:hidden">Campaign</span>
          </button>

          {/* Combined Profile & Menu Capsule Pill Wrapper */}
          <div className="flex items-center gap-2.5 bg-white pl-1.5 pr-3 py-1 rounded-full border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors h-10">
            {/* User Avatar Circle */}
            <div className="w-7 h-7 rounded-full bg-[#60A5FA] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            
            {/* Hamburger Icon */}
            <Menu className="w-4 h-4 text-gray-700 stroke-[2.5]" />
          </div>

        </div>
      </header>
    </div>
  );
}
