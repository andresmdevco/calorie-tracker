import { useMemo, useReducer, type ReactNode } from 'react';
import { activityReducer, initialState } from '../reducers/activity-reducer';
import { categories } from '../data/categories';
import type { Activity } from '../types';
import { ActivityContext } from './ActivityContext';

type ActivityProviderProps = {
  children: ReactNode;
};

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  // Contadores
  const caloriesConsumed = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) => (activity.category === 1 ? total + activity.calories : total),
        0,
      ),
    [state.activities],
  );
  const caloriesBurned = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) => (activity.category === 2 ? total + activity.calories : total),
        0,
      ),
    [state.activities],
  );
  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [caloriesConsumed, caloriesBurned],
  );

  const categoryName = useMemo(
    () => (category: Activity['category']) =>
      categories.map((cat) => (cat.id === category ? cat.name : '')),
    [],
  );

  const isEmptyActivities = useMemo(() => state.activities.length === 0, [state.activities]);

  return (
    <ActivityContext.Provider
      value={{
        state,
        dispatch,
        caloriesConsumed,
        caloriesBurned,
        netCalories,
        categoryName,
        isEmptyActivities,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
