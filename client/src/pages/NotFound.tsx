import { useLocation } from 'wouter';

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#F5F2ED] flex flex-col items-center justify-center px-6">
      <span className="font-display text-[12rem] font-semibold text-[#2C3340]/5 leading-none select-none">
        404
      </span>
      <div className="-mt-16 text-center">
        <div className="section-divider mx-auto" />
        <h1 className="font-display text-3xl font-semibold text-[#2C3340] mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-sm text-[#8A8A85] mb-8 max-w-xs mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => setLocation('/')}
          className="px-8 py-3 bg-[#2C3340] text-[#F5F2ED] font-body text-sm hover:bg-[#C4A882] transition-colors duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
