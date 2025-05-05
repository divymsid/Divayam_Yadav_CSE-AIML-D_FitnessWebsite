import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, BarChart, Brain, ArrowRight, Check } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 dark:from-primary-900/30 dark:to-accent-900/30"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Health <span className="text-primary-500">&</span> Fitness
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Your personal AI fitness coach that adapts to your needs, mood, and goals.
              Get personalized workout recommendations and stay motivated with our smart
              health platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/onboarding" className="btn btn-primary">
                Get Started
              </Link>
              <a href="#features" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Personalized Fitness Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our AI analyzes your health data, preferences, and mood to create
              the perfect workout plan just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Workout Plans</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Personalized exercise routines based on your fitness level, goals, and preferences.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor your progress, track vital metrics, and see how your fitness improves over time.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mental Wellness</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mood-adaptive recommendations that consider your mental state and energy levels.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligent analysis of your patterns to suggest improvements and optimize results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get started with Vitality in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Info</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tell us about yourself, your fitness goals, and how you're feeling today.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Workout Type</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select your preferred workout style: Yoga, Cardio, Strength, or Meditation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Personalized Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive AI-curated workout videos and routines tailored to your specific needs.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/onboarding" className="btn btn-primary">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials/Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Vitality
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We're not just another fitness app. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Personalization</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Workout recommendations based on your mood and energy level</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Adapts to your progress and adjusts difficulty accordingly</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Learns your preferences over time for better recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Combines physical fitness with mental wellness</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">AI assistant provides health and fitness advice anytime</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Curated content from top fitness experts on YouTube</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/onboarding" className="btn btn-primary">
              Transform Your Fitness Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;