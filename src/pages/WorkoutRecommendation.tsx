import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { Dumbbell, Wind, Cog as Yoga, Brain, Play, Loader2 } from 'lucide-react';
import { WorkoutType, YoutubeVideo } from '../lib/types';
import { getWorkoutVideos } from '../services/youtubeService';
import { saveUserWorkout } from '../services/userService';

const WorkoutRecommendation: React.FC = () => {
  const navigate = useNavigate();
  const userData = useUserStore((state) => state.userData);
  const userId = useUserStore((state) => state.userId);
  const setWorkoutType = useUserStore((state) => state.setWorkoutType);
  
  const [selectedType, setSelectedType] = useState<WorkoutType | null>(null);
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Redirect if no user data
  useEffect(() => {
    if (!userData || !userId) {
      navigate('/onboarding');
    }
  }, [userData, userId, navigate]);
  
  const handleWorkoutSelect = async (type: WorkoutType) => {
    setSelectedType(type);
    setWorkoutType(type);
    setIsLoading(true);
    
    try {
      // In a real app, save the user's workout selection
      await saveUserWorkout(userId!, type);
      
      // Get workout videos
      const fetchedVideos = await getWorkoutVideos(type, userData?.mood || 'Neutral');
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const workoutTypes: { type: WorkoutType; icon: React.ReactNode; description: string }[] = [
    {
      type: 'Yoga',
      icon: <Yoga className="h-8 w-8 text-primary-500" />,
      description: 'Improve flexibility and mindfulness with yoga flows.',
    },
    {
      type: 'Cardio',
      icon: <Wind className="h-8 w-8 text-primary-500" />,
      description: 'Get your heart rate up with energizing cardio.',
    },
    {
      type: 'Strength',
      icon: <Dumbbell className="h-8 w-8 text-primary-500" />,
      description: 'Build muscle and power with strength training.',
    },
    {
      type: 'Meditation',
      icon: <Brain className="h-8 w-8 text-primary-500" />,
      description: 'Focus on mental wellness with guided meditation.',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            What type of workout are you looking for?
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Select a workout type and we'll recommend personalized videos for you
          </p>
        </div>
        
        {/* Workout type selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {workoutTypes.map(({ type, icon, description }) => (
            <button
              key={type}
              onClick={() => handleWorkoutSelect(type)}
              className={`p-6 rounded-lg text-center transition-all ${
                selectedType === type
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 hover:shadow-md hover:scale-[1.02]'
              }`}
            >
              <div className="flex justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{type}</h3>
              <p className={`text-sm ${
                selectedType === type
                  ? 'text-white/90'
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                {description}
              </p>
            </button>
          ))}
        </div>
        
        {/* Video recommendations */}
        {selectedType && (
          <div>
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              {selectedType} Videos Recommended for You
            </h2>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="h-12 w-12 text-primary-500 animate-spin" />
              </div>
            ) : videos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <div 
                    key={video.id} 
                    className="card overflow-hidden hover:shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-fade-in"
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      opacity: 0,
                      animation: `fadeIn 0.5s ease-out ${index * 150}ms forwards`
                    }}
                  >
                    <div className="relative group">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </a>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary-500 transition-colors duration-300">{video.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {video.channelTitle}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <p>No videos found. Please try a different workout type.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutRecommendation;