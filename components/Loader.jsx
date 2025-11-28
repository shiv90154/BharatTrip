export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6">
      {/* Animated Plane */}
      <div className="text-4xl animate-bounce">✈️</div>
      
      {/* Loading Bar */}
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-linear-to-r from-blue-500 to-orange-500 animate-pulse rounded-full"></div>
      </div>
      
      {/* Text */}
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-800">Discovering India...</p>
        <p className="text-sm text-gray-500 mt-1">Packaging your travel experience</p>
      </div>
    </div>
  );
}