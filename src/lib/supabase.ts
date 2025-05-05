import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Replace with your own Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Database interface - This will be expanded when we have a schema
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