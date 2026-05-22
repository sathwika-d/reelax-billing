// reusable field atoms — kept dead simple so they're easy to compose

export function InputField({ label, placeholder, optional = false, type = 'text', value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-800">
        {label}
        {optional && <span className="text-gray-400 font-normal ml-1">(Optional)</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md text-gray-800 placeholder-gray-400 bg-white transition-all duration-150 hover:border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

export function SelectField({ label, options = [], value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-800">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md text-gray-600 bg-white transition-all duration-150 hover:border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer appearance-none pr-9"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {/* custom chevron */}
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
