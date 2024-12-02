import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-gray-100 animate-bounce mb-8">
          404
        </h1>
        
        {/* Animated Message */}
        <div className="space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            The page you're looking for seems to have vanished into the digital void.
          </p>
        </div>

        {/* Animated Button */}
        <Link 
          to="/"
          className="inline-block mt-8 px-8 py-3 text-lg font-medium text-gray-900 bg-gray-100 
                     rounded-lg transform hover:scale-105 transition-all duration-300 
                     hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
