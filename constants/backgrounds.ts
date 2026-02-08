/**
 * Background Configuration
 *
 * Centralized configuration for all app backgrounds.
 * This is the single source of truth for background-related constants.
 *
 * ## Adding New Backgrounds
 *
 * To add a new background:
 *
 * 1. **Add React Native app image:**
 *    - Add your background image to `assets/images/backgrounds/{name}_bg.png`
 *
 * 2. **Add Widget images (4 variants required):**
 *    - `LokinWidgets/Assets.xcassets/widget_{name}_normal.imageset/`
 *    - `LokinWidgets/Assets.xcassets/widget_{name}_distracted.imageset/`
 *    Each imageset needs the background with the duck mascot pre-composited:
 *    - `_normal`: Happy/focused duck mascot
 *    - `_distracted`: Unhappy/distracted duck mascot
 *
 * 3. **Update this file:**
 *    - Add the new ID to `BackgroundId` type
 *    - Add entry to `BACKGROUNDS` array
 *    - Add entry to `BACKGROUND_SOURCE_MAP`
 *
 * 4. **Update widget Swift code:**
 *    - Add new case in `LokinWidgets/LokinLiveActivity.swift` `backgroundImage()` method
 *
 * ## Architecture
 *
 * - React Native: Stores preference in AsyncStorage, reads from BackgroundContext
 * - iOS Widget: Reads `selectedBackgroundId` from FocusStore (App Groups UserDefaults)
 * - Sync: `handleLockIn()` calls `liveActivity.setBackground()` before starting session
 *
 * @module constants/backgrounds
 */

import { ImageSourcePropType } from 'react-native';

// =============================================================================
// TYPES
// =============================================================================

/**
 * Valid background identifiers.
 * Must match the keys used in FocusStore.swift and LokinLiveActivity.swift
 */
export type BackgroundId = 'coral_bg' | 'fjord_bg' | 'japanese_bg' | 'jungle_bg' | 'pond_bg';

/**
 * Configuration for a single background option
 */
export interface BackgroundConfig {
  /** Unique identifier - must match widget image naming convention */
  id: BackgroundId;
  /** Image source for React Native ImageBackground */
  source: ImageSourcePropType;
  /** Human-readable label for UI display */
  label: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

/**
 * Default background ID used when no preference is saved.
 * IMPORTANT: This must match the default in FocusStore.swift
 * @see Shared/FocusStore.swift selectedBackgroundId getter
 */
export const DEFAULT_BACKGROUND_ID: BackgroundId = 'japanese_bg';

/**
 * All available background options.
 * Order determines display order in BackgroundSelector carousel.
 */
export const BACKGROUNDS: readonly BackgroundConfig[] = [
  {
    id: 'coral_bg',
    source: require('@/assets/images/backgrounds/coral_bg.png'),
    label: 'Coral Reef',
  },
  {
    id: 'fjord_bg',
    source: require('@/assets/images/backgrounds/fjord_bg.png'),
    label: 'Fjord',
  },
  {
    id: 'japanese_bg',
    source: require('@/assets/images/backgrounds/japanese_bg.png'),
    label: 'Japanese Garden',
  },
  {
    id: 'jungle_bg',
    source: require('@/assets/images/backgrounds/jungle_bg.png'),
    label: 'Jungle',
  },
  {
    id: 'pond_bg',
    source: require('@/assets/images/backgrounds/pond_bg.png'),
    label: 'Pond',
  },
] as const;

/**
 * Map for O(1) lookup of background source by ID.
 * Used by BackgroundContext to quickly resolve current background.
 */
export const BACKGROUND_SOURCE_MAP: Record<BackgroundId, ImageSourcePropType> = {
  coral_bg: require('@/assets/images/backgrounds/coral_bg.png'),
  fjord_bg: require('@/assets/images/backgrounds/fjord_bg.png'),
  japanese_bg: require('@/assets/images/backgrounds/japanese_bg.png'),
  jungle_bg: require('@/assets/images/backgrounds/jungle_bg.png'),
  pond_bg: require('@/assets/images/backgrounds/pond_bg.png'),
};

// =============================================================================
// HELPERS
// =============================================================================

/**
 * Get background config by ID.
 * @param id - Background identifier
 * @returns Background config or undefined if not found
 */
export function getBackgroundById(id: BackgroundId): BackgroundConfig | undefined {
  return BACKGROUNDS.find((bg) => bg.id === id);
}

/**
 * Get background source by ID.
 * Falls back to default if ID is invalid.
 * @param id - Background identifier
 * @returns Image source for the background
 */
export function getBackgroundSource(id: BackgroundId): ImageSourcePropType {
  return BACKGROUND_SOURCE_MAP[id] ?? BACKGROUND_SOURCE_MAP[DEFAULT_BACKGROUND_ID];
}

/**
 * Check if a string is a valid background ID.
 * @param id - String to check
 * @returns True if the string is a valid BackgroundId
 */
export function isValidBackgroundId(id: string): id is BackgroundId {
  return id in BACKGROUND_SOURCE_MAP;
}
