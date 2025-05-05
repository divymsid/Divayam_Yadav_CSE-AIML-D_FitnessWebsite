import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useUserStore } from '../store/userStore';
import { UserHealthData, MoodOption } from '../lib/types';

const UserForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const setUserData = useUserStore((state) => state.setUserData);
  const setUserId = useUserStore((state) => state.setUserId);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<UserHealthData>();
  
  const moodOptions: MoodOption[] = ['Great', 'Good', 'Neutral', 'Bad', 'Awful'];
  
  const onSubmit: SubmitHandler<UserHealthData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Save to Zustand store first for UI state
      setUserData(data);
      
      // In a real app with Supabase properly set up:
      // const { data: result, error } = await supabase
      //   .from('user_health_data')
      //   .insert(data)
      //   .select('id')
      //   .single();
      
      // if (error) throw error;
      // setUserId(result.id);
      
      // For demo, simulate a successful save
      await new Promise(resolve => setTimeout(resolve, 1500));
      setUserId('demo-user-id-123');
      
      // Navigate to workout selection
      navigate('/recommendations');
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('There was an error saving your data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Tell Us About Yourself</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Help us create the perfect fitness experience for you
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="form-error">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Your email address"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="height" className="form-label">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  className="form-input"
                  placeholder="Height in cm"
                  {...register('height', { 
                    required: 'Height is required',
                    min: {
                      value: 50,
                      message: 'Height must be at least 50cm'
                    },
                    max: {
                      value: 250,
                      message: 'Height must be less than 250cm'
                    }
                  })}
                />
                {errors.height && <p className="form-error">{errors.height.message}</p>}
              </div>
              
              <div>
                <label htmlFor="weight" className="form-label">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  className="form-input"
                  placeholder="Weight in kg"
                  {...register('weight', { 
                    required: 'Weight is required',
                    min: {
                      value: 20,
                      message: 'Weight must be at least 20kg'
                    },
                    max: {
                      value: 300,
                      message: 'Weight must be less than 300kg'
                    }
                  })}
                />
                {errors.weight && <p className="form-error">{errors.weight.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="form-label">How are you feeling today?</label>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {moodOptions.map((mood) => (
                  <label 
                    key={mood}
                    className="flex flex-col items-center p-3 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <input
                      type="radio"
                      value={mood}
                      className="sr-only peer"
                      {...register('mood', { required: 'Please select your mood' })}
                    />
                    <span className="text-2xl mb-1 transform transition-all duration-300 peer-checked:scale-110 peer-checked:bg-primary-100 dark:peer-checked:bg-primary-500/20 peer-checked:rounded-full peer-checked:p-2 peer-checked:shadow-[0_0_15px_rgba(var(--primary-500-rgb),0.5)] dark:peer-checked:shadow-[0_0_20px_rgba(var(--primary-500-rgb),0.7)]">
                      {mood === 'Great' && '😁'}
                      {mood === 'Good' && '🙂'}
                      {mood === 'Neutral' && '😐'}
                      {mood === 'Bad' && '🙁'}
                      {mood === 'Awful' && '😫'}
                    </span>
                    <span className="text-sm text-center transition-all duration-300 peer-checked:text-primary-500 dark:peer-checked:text-primary-400 peer-checked:font-medium">{mood}</span>
                  </label>
                ))}
              </div>
              {errors.mood && <p className="form-error mt-2">{errors.mood.message}</p>}
            </div>
            
            <div>
              <label htmlFor="mental_state" className="form-label">Tell us more about how you're feeling mentally</label>
              <textarea
                id="mental_state"
                rows={3}
                className="form-input"
                placeholder="I'm feeling energized and motivated today..."
                {...register('mental_state', { 
                  required: 'Please tell us about your mental state',
                  minLength: {
                    value: 10,
                    message: 'Please provide at least 10 characters'
                  }
                })}
              ></textarea>
              {errors.mental_state && <p className="form-error">{errors.mental_state.message}</p>}
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Saving...
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;