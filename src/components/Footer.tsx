import React from 'react';
import { Activity, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Activity className="h-6 w-6 text-primary-500" />
              <span className="ml-2 text-xl font-bold">Vitality</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              AI-powered health and fitness to help you live your best life.
            </p>
            <div className="mt-6 flex space-x-4">
            <a
  href="https://github.com/divymsid"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
>
  <Github className="h-5 w-5" />
</a>

<a
  href="https://x.com/divymsid"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
>
  <Twitter className="h-5 w-5" />
</a>

<a
  href="https://www.instagram.com/divym.sid"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
>
  <Instagram className="h-5 w-5" />
</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">Home</Link>
              </li>
              <li>
                <Link to="/onboarding" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">Get Started</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Have questions or feedback? Get in touch with us.
            </p>
            <a 
              href="mailto:divayam.work@gmail.com" 
              className="inline-block text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              divayam.work@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Vitality. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;