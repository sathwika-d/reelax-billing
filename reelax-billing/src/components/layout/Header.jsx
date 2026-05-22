import { Search, Plus, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-[56px] bg-white border-b border-gray-200 flex items-center px-4 gap-3 sticky top-0 z-50">
      {/* search — hidden on very small screens, shown from sm up */}
      <div className="hidden sm:flex flex-1 max-w-[380px]">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Find influencers to collaborate with"
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* mobile search icon only */}
      <button className="sm:hidden p-2 text-gray-500 border border-gray-200 rounded-lg">
        <Search className="w-4 h-4" />
      </button>

      <div className="flex-1" />

      {/* right side actions */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
          <span>⚡</span>
          <span className="hidden xs:inline">Upgrade</span>
          <span className="xs:hidden">Up</span>
        </button>

        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Create Campaign</span>
          <span className="sm:hidden">Campaign</span>
        </button>

        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer flex-shrink-0">
          <span className="text-white text-xs font-bold">AP</span>
        </div>

        <button className="text-gray-500 hover:text-gray-700 p-1 flex-shrink-0">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
