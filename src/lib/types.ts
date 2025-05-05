// This file will eventually be auto-generated from Supabase
export interface Database {
  public: {
    Tables: {
      user_health_data: {
        Row: {
          id: string;
          name: string;
          email: string;
          height: number;
          weight: number;
          mood: string;
          mental_state: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          height: number;
          weight: number;
          mood: string;
          mental_state: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          height?: number;
          weight?: number;
          mood?: string;
          mental_state?: string;
          created_at?: string;
        };
      };
      user_workouts: {
        Row: {
          id: string;
          user_id: string;
          workout_type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          workout_type: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          workout_type?: string;
          created_at?: string;
        };
      };
    };
  };
}

export type UserHealthData = Database['public']['Tables']['user_health_data']['Insert'];
export type UserWorkout = Database['public']['Tables']['user_workouts']['Insert'];

export type MoodOption = 'Great' | 'Good' | 'Neutral' | 'Bad' | 'Awful';
export type WorkoutType = 'Yoga' | 'Cardio' | 'Strength' | 'Meditation';

export interface YoutubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}