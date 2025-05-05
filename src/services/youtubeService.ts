import { YoutubeVideo, WorkoutType, MoodOption } from '../lib/types';

// Simulated YouTube data - in a real app this would call the YouTube API
export async function getWorkoutVideos(
  workoutType: WorkoutType,
  mood: MoodOption = 'Neutral',
): Promise<YoutubeVideo[]> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock data based on workout type
  switch (workoutType) {
    case 'Yoga':
      return [
        {
          id: 'v7AYKMP6rOE',
          title: '20 Minute Full Body Yoga Flow For Beginners',
          thumbnail: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Yoga With Adriene',
          publishedAt: '2021-01-15',
          description: 'This 20 minute Full Body Yoga Flow is perfect for beginners to help improve flexibility and build strength.'
        },
        {
          id: 'b1H3xO3x_Js',
          title: 'Morning Yoga for Energy and Focus',
          thumbnail: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Yoga With Kassandra',
          publishedAt: '2021-03-22',
          description: 'Start your day with this energizing morning yoga routine designed to wake up your body and mind.'
        },
        {
          id: 'j7rKKpwdXNE',
          title: 'Gentle Yoga for Relaxation and Stress Relief',
          thumbnail: 'https://images.pexels.com/photos/4534772/pexels-photo-4534772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Yoga By Candace',
          publishedAt: '2021-05-10',
          description: 'Unwind with this gentle yoga practice designed to release tension and promote relaxation.'
        }
      ];
    case 'Cardio':
      return [
        {
          id: 'ml6cT4AZdqI',
          title: '30-Minute HIIT Cardio Workout with Warm Up',
          thumbnail: 'https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'POPSUGAR Fitness',
          publishedAt: '2021-02-18',
          description: 'Get your heart rate up and burn calories with this 30-minute HIIT cardio workout.'
        },
        {
          id: 'qWKUVFrv-yw',
          title: '20-Minute Low Impact Cardio Workout',
          thumbnail: 'https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Body Project',
          publishedAt: '2021-01-30',
          description: 'A joint-friendly cardio workout that\'s perfect for beginners or those looking for a lower impact option.'
        },
        {
          id: 'BHY0FxzoKZE',
          title: '45-Minute Tabata Cardio Training',
          thumbnail: 'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Fitness Blender',
          publishedAt: '2021-04-05',
          description: 'Challenge yourself with this intense 45-minute tabata-style cardio workout to maximize calorie burn.'
        }
      ];
    case 'Strength':
      return [
        {
          id: 'eMJi9dZ_RQU',
          title: 'Full Body Strength Workout - No Equipment Needed',
          thumbnail: 'https://images.pexels.com/photos/4164519/pexels-photo-4164519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Heather Robertson',
          publishedAt: '2021-03-05',
          description: 'Build strength throughout your entire body with this bodyweight workout that requires no equipment.'
        },
        {
          id: 'BQgp4qjN_tA',
          title: 'Dumbbell Strength Training for Beginners',
          thumbnail: 'https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Caroline Girvan',
          publishedAt: '2021-02-25',
          description: 'Learn the fundamentals of strength training with this beginner-friendly dumbbell workout.'
        },
        {
          id: 'Z0w8q1y_-9U',
          title: 'Upper Body Strength - Chest, Back, and Arms',
          thumbnail: 'https://images.pexels.com/photos/6550856/pexels-photo-6550856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'MadFit',
          publishedAt: '2021-06-12',
          description: 'Focus on your upper body with this targeted strength workout for chest, back, and arms.'
        }
      ];
    case 'Meditation':
      return [
        {
          id: 'O-6f5wQXSu8',
          title: '10-Minute Meditation for Beginners',
          thumbnail: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Headspace',
          publishedAt: '2021-01-10',
          description: 'A perfect introduction to meditation for beginners with simple techniques to calm your mind.'
        },
        {
          id: 'inpok4MKVLM',
          title: 'Sleep Meditation - Fall Asleep Fast',
          thumbnail: 'https://images.pexels.com/photos/8001929/pexels-photo-8001929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'The Honest Guys',
          publishedAt: '2021-04-02',
          description: 'This guided meditation is designed to help you wind down and fall asleep quickly.'
        },
        {
          id: 'QHkXvPq2pQE',
          title: 'Stress Relief Meditation - 15 Minutes',
          thumbnail: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          channelTitle: 'Great Meditation',
          publishedAt: '2021-03-15',
          description: 'Release tension and stress with this calming 15-minute guided meditation practice.'
        }
      ];
    default:
      return [];
  }
}