import { createContext, type Dispatch } from 'react';
import type { ActivityActions, ActivityState } from '../reducers/activity-reducer';
import type { Activity } from '../types';

type ActivityContextProps = {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
  caloriesConsumed: number;
  caloriesBurned: number;
  netCalories: number;
  categoryName: (category: Activity['category']) => string[];
  isEmptyActivities: boolean;
};

export const ActivityContext = createContext<ActivityContextProps>(null!);
