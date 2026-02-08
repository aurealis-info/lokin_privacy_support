/**
 * Onboarding Constants
 *
 * Contains configuration and mock data for the guided onboarding experience.
 *
 * @module constants/onboarding
 */

import type { ScoreDataPoint } from '@/types/user';

// =============================================================================
// SESSION CONFIGURATION
// =============================================================================

/**
 * Duration of the onboarding demo session in seconds
 */
export const ONBOARDING_SESSION_DURATION = 5;

// =============================================================================
// MOCK DATA
// =============================================================================

/**
 * Mock score history for the onboarding demo session.
 * Creates a smooth linear progression from 0 to 100 over 5 seconds.
 * 20 data points per second (50ms intervals) for very smooth graph animation.
 */
export const ONBOARDING_MOCK_SCORE_HISTORY: ScoreDataPoint[] = Array.from(
  { length: ONBOARDING_SESSION_DURATION * 20 + 1 }, // 101 points for 5 seconds
  (_, i) => ({
    timestamp: i * 50, // 50ms intervals
    score: Math.round((i / (ONBOARDING_SESSION_DURATION * 20)) * 100),
  })
);

/**
 * Mock tasks for the onboarding task tutorial
 */
export const ONBOARDING_MOCK_TASKS = [
  { id: 'task_1', text: 'Review chapter notes', completed: false },
  { id: 'task_2', text: 'Practice problems 1-5', completed: false },
  { id: 'task_3', text: 'Summarize key concepts', completed: false },
] as const;

/**
 * Task tutorial phases in order
 */
export type TaskTutorialPhase =
  | 'intro'
  | 'complete_task'
  | 'add_task'
  | 'complete_new'
  | 'done';
