import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-serif font-bold text-[#815331]">404</h1>
        <p className="mb-2 text-3xl font-semibold">Page Not Found</p>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="flex items-center justify-center bg-[#815331] text-white px-6 py-3 rounded-lg hover:bg-[#6b4129] transition-colors mx-auto">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
