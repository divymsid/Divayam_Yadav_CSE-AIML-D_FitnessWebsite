import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-primary-500 mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn btn-primary inline-flex items-center"
        >
          <Home className="mr-2 h-5 w-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;