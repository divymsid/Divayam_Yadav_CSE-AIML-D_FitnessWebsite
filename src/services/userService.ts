import { supabase } from '../lib/supabase';
import { WorkoutType, UserHealthData } from '../lib/types';

export async function saveUserHealthData(data: UserHealthData): Promise<string> {
  try {
    // In a real app with Supabase properly set up:
    // const { data: result, error } = await supabase
    //   .from('user_health_data')
    //   .insert(data)
    //   .select('id')
    //   .single();
    
    // if (error) throw error;
    // return result.id;
    
    // For demo purposes, simulate a successful save
    await new Promise(resolve => setTimeout(resolve, 800));
    return 'demo-user-id-123';
  } catch (error) {
    console.error('Error saving user data:', error);
    throw new Error('Failed to save user data');
  }
}

export async function saveUserWorkout(
  userId: string,
  workoutType: WorkoutType
): Promise<void> {
  try {
    // In a real app with Supabase properly set up:
    // const { error } = await supabase
    //   .from('user_workouts')
    //   .insert({
    //     user_id: userId,
    //     workout_type: workoutType
    //   });
    
    // if (error) throw error;
    
    // For demo purposes, simulate a successful save
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.error('Error saving workout selection:', error);
    throw new Error('Failed to save workout selection');
  }
}