import Image from "next/image";

const Header = () => {
  return (
    <div className="container flex h-[60px] shrink-0 items-center justify-between px-4 lg:h-[80px] lg:px-0">
      <a href="/" className="flex items-center gap-2">
        <Image
          unoptimized
          src="/favicon.png"
          alt="Logo"
          width={48}
          height={48}
        />
        <span className="text-xl font-bold text-gray-900">StudiPedia AI</span>
      </a>
      <nav className="flex items-center space-x-6">
        <a 
          href="/docs" 
          className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
        >
          Docs
        </a>
        <a 
          href="/about" 
          className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
        >
          About
        </a>
        <a 
          href="/legal" 
          className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
        >
          Legal
        </a>
        <a 
          href="/settings" 
          className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
        >
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Header;
