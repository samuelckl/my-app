export default function SkillCard({ logo: Logo, title, description }) {
    return (
      <div className="flex flex-col items-center bg-white shadow-md w-42 sm:w-42 my-2 p-4 hover:bg-blue-100 rounded-lg font-sans">
        {/* Logo */}
        <div className="sm:h-14 sm:w-14 sm:mb-3 h-12 w-12 mb-2 flex items-center justify-center text-orange-500">
          <Logo className="h-full w-full" />
        </div>
  
        {/* Title */}
        <div className="font-bold text-l sm:text-xl mb-2 text-gray-800 text-center">{title}</div>
  
        {/* Description */}
        <div className="text-xs text-gray-600 text-center">{description}</div>
      </div>
    );
  }