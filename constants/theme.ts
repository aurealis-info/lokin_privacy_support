/**
 * LOKIN Color Palette
 * Centralized color definitions for the application
 */

import { Platform } from 'react-native';

// =============================================================================
// OPACITY CONSTANTS
// Hex values for alpha channel (append to color hex codes)
// =============================================================================

/**
 * Opacity constants for consistent transparency values throughout the app.
 * Append to hex color codes: e.g., `PRIMARY_PURPLE + OPACITY.light`
 *
 * Hex value to percentage conversion:
 * - 1A = 10%, 33 = 20%, 4D = 30%, 80 = 50%, CC = 80%
 */
export const OPACITY = {
  /** 10% opacity - Extra light transparency for minimal effects */
  faint: '1A',
  /** 18% opacity - Very light transparency for subtle borders (original '30') */
  subtle: '30',
  /** 30% opacity - Light transparency for overlays */
  light: '4D',
  /** 50% opacity - Medium transparency for hover states */
  medium: '80',
  /** 80% opacity - Heavy transparency for strong overlays */
  heavy: 'CC',
} as const;

// =============================================================================
// PRIMARY BRAND COLORS - BOOK-INSPIRED PALETTE
// =============================================================================

/** Primary brand color - purple/violet (#833afd) */
export const PRIMARY_PURPLE = '#833afd';

/** Soft blue for backgrounds */
export const SOFT_BLUE = '#9EC2EE';

/** Orange from books - for actions, warnings, active states */
export const BOOK_ORANGE = '#FE692C';

/** Green from books - for success, completed states */
export const BOOK_GREEN = '#038D32';

/** Red color for errors, missed states, and progress indicators */
export const ERROR_RED = '#FF1500';

// =============================================================================
// TO-DO LIST SPECIFIC COLORS
// =============================================================================

/** Border and accent purple for to-do list (#8B5CF6 - Vibrant Violet) */
export const TODO_BORDER_PURPLE = '#8B5CF6';

/** Action green for completed tasks (#65D268 - Success Green) */
export const TODO_ACTION_GREEN = '#65D268';

/** Gradient start color for add task button (#5B4EFF - Deep Blurple) */
export const TODO_GRADIENT_START = '#5B4EFF';

/** Gradient end color for add task button (#9D4EFF - Lighter Purple) */
export const TODO_GRADIENT_END = '#9D4EFF';

/** See more text color (periwinkle) */
export const TODO_SEE_MORE_COLOR = '#7C8CE0';

/** Off-white for text on colored backgrounds */
export const TEXT_WHITE = '#F6F9FC';

/** Pure white for cards and primary text */
export const PURE_WHITE = '#FFFFFF';

/** Gray for secondary text (minimal use) */
export const GRAY_SECONDARY = '#666666';


// =============================================================================
// TAB BAR COLORS
// =============================================================================

/** White background for tab bar */
export const TAB_BAR_BACKGROUND = '#FFFFFF';

/** Light gray border for tab bar top border */
export const TAB_BAR_BORDER_COLOR = '#F0F0F0';

/** Blue color for active/selected tab icons */
export const TAB_BAR_ACTIVE_ICON_COLOR = PRIMARY_PURPLE;

/** Blue color for active/selected tab labels */
export const TAB_BAR_ACTIVE_LABEL_COLOR = PRIMARY_PURPLE;

/** Gray color for inactive/unselected tab icons */
export const TAB_BAR_INACTIVE_ICON_COLOR = GRAY_SECONDARY;

/** Gray color for inactive/unselected tab labels */
export const TAB_BAR_INACTIVE_LABEL_COLOR = GRAY_SECONDARY;

/** Blue background for home tab icon circle */
export const TAB_BAR_HOME_ICON_BG = PRIMARY_PURPLE;

/** Blue shadow color for home tab icon circle */
export const TAB_BAR_HOME_ICON_SHADOW_COLOR = PRIMARY_PURPLE;

/** Off-white color for icon inside home tab circle */
export const TAB_BAR_HOME_ICON_INNER_COLOR = TEXT_WHITE;


/** Soft blue background for cards and containers (alias for SOFT_BLUE) */
export const LIGHT_PURPLE_BG = SOFT_BLUE;

/** Soft blue background for summary boxes and graph containers (alias for SOFT_BLUE) */
export const LIGHT_BLUE_BG = SOFT_BLUE;

// =============================================================================
// ACCENT AND STATUS COLORS
// =============================================================================

/** Green color for success/positive actions */
export const ACCENT_GREEN = BOOK_GREEN;

/** Green color for online/active status */
export const STATUS_ONLINE = BOOK_GREEN;

/** Orange color for active session indicators */
export const STATUS_ACTIVE = BOOK_ORANGE;

/** High contrast green accent (meets 4.5:1 contrast ratio) */
export const ACCENT_GREEN_NEW = BOOK_GREEN;

/** Orange accent for errors/warnings (meets 4.5:1 contrast ratio) */
export const ACCENT_RED_NEW = BOOK_ORANGE;

// =============================================================================
// BACKGROUND COLORS
// =============================================================================

/** Main application background color (root container only) */
export const BACKGROUND_MAIN = SOFT_BLUE;

/** Secondary background for subtle variations */
export const BACKGROUND_LIGHT = SOFT_BLUE;

/** Pure white background for cards and elevated surfaces */
export const CARD_WHITE = PURE_WHITE;

/** Light gray background for secondary cards/boxes */
export const CARD_BACKGROUND = '#F0F0F0';

// =============================================================================
// TEXT COLORS
// =============================================================================

/** Primary text color for main content on light backgrounds */
export const TEXT_PRIMARY = '#000000';

/** Text color for dark themed elements (legacy naming - actually white) */
export const TEXT_DARK = '#FFFFFF';

/** Secondary text color for less important information */
export const TEXT_SECONDARY = GRAY_SECONDARY;

/** Tertiary text color for placeholders and disabled states */
export const TEXT_LIGHT = '#999999';

// TEXT_WHITE is now defined in PRIMARY BRAND COLORS section above

// =============================================================================
// PROGRESS AND UI ELEMENT COLORS
// =============================================================================

/** Blue color for progress gradient start */
export const PROGRESS_TEAL = PRIMARY_PURPLE;

/** Blue color for progress gradient end and UI accents */
export const PROGRESS_BLUE = PRIMARY_PURPLE;

/** Blue color for text underlines and name highlights */
export const UNDERLINE_BLUE = PRIMARY_PURPLE;

// =============================================================================
// SCORE COLOR SCHEME
// =============================================================================

/** Purple color for excellent scores (90-100) - matches brand */
export const SCORE_COLOR_EXCELLENT = '#833afd';

/** Green color for great scores (80-89) */
export const SCORE_COLOR_GREAT = '#3dca4b';

/** Orange color for good scores (70-79) */
export const SCORE_COLOR_GOOD = '#F09A45';

/** Red color for fair scores (below 70) */
export const SCORE_COLOR_FAIR = '#F60000';

// =============================================================================
// SESSION OVER SCREEN COLORS
// =============================================================================

/** Blue color for graph lines and text on session over screen */
export const SESSION_OVER_PURPLE = PRIMARY_PURPLE;

/** Background color for full-screen session over overlay */
export const SESSION_OVER_BACKGROUND = SOFT_BLUE;

/** Text color for user name on session over screen */
export const SESSION_OVER_USER_NAME_COLOR = TEXT_DARK;

/** Green text color for "locked in" message on session over screen */
export const SESSION_OVER_LOCKED_IN_TEXT_COLOR = ACCENT_GREEN_NEW;

/** White text color for summary box on session over screen */
export const SESSION_OVER_SUMMARY_TEXT_COLOR = TEXT_WHITE;

/** White text color for focus labels on session over screen */
export const SESSION_OVER_FOCUS_LABEL_COLOR = TEXT_WHITE;

/** White text color for focus percentage on session over screen */
export const SESSION_OVER_FOCUS_PERCENTAGE_COLOR = TEXT_WHITE;

/** Text color for graph label on session over screen */
export const SESSION_OVER_GRAPH_LABEL_COLOR = TEXT_DARK;

/** Light blue background for buttons */
export const BUTTON_BG = SOFT_BLUE;

/** Blue border color for buttons */
export const BUTTON_BORDER = PRIMARY_PURPLE;

/** Blue text color for buttons on session over screen */
export const SESSION_OVER_BUTTON_TEXT_COLOR = PRIMARY_PURPLE;

/** Background color for exit report button on session over screen */
export const SESSION_OVER_EXIT_BUTTON_BG = PRIMARY_PURPLE;

/** Background color for share button on session over screen */
export const SESSION_OVER_SHARE_BUTTON_BG = PRIMARY_PURPLE;

/** Red color for progress bar remaining portion on session over screen */
export const SESSION_OVER_PROGRESS_BAR_RED = ERROR_RED;

/** Light blue background for summary boxes */
export const SUMMARY_BOX_BG = SOFT_BLUE;

/** Semi-transparent blue for diagonal stripe pattern */
export const STRIPE_PURPLE = 'rgba(118, 203, 253, 0.3)';

// =============================================================================
// STATS PAGE COLORS
// =============================================================================

/** Background color for stats page */
export const STATS_BACKGROUND = TEXT_WHITE;

/** Primary blue accent color for stats page */
export const STATS_BLUE = PRIMARY_PURPLE;

/** Light blue background for stat cards */
export const STATS_CARD_BG = LIGHT_BLUE_BG;

/** Gray color for incomplete/neutral states */
export const STATS_GRAY = '#B8B8B8';

/** Light blue for secondary elements on stats page */
export const STATS_LIGHT_BLUE = BUTTON_BG;

/** Primary text color for stats page */
export const STATS_TEXT_DARK = TEXT_DARK;

/** Blue color for text elements on stats page */
export const STATS_PAGE_TEXT_COLOR = PRIMARY_PURPLE;

/** Blue color for icons on stats page */
export const STATS_PAGE_ICON_COLOR = PRIMARY_PURPLE;

/** Blue color for borders on stats page */
export const STATS_PAGE_BORDER_COLOR = PRIMARY_PURPLE;

/** Blue color for stat values on stats page */
export const STATS_PAGE_VALUE_COLOR = PRIMARY_PURPLE;

/** Blue color for separators on stats page */
export const STATS_PAGE_SEPARATOR_COLOR = PRIMARY_PURPLE;

/** Blue color for progress indicators on stats page */
export const STATS_PAGE_PROGRESS_COLOR = PRIMARY_PURPLE;

/** Blue color for dots on stats page */
export const STATS_PAGE_DOT_COLOR = PRIMARY_PURPLE;

/** Blue color for graph elements on stats page */
export const STATS_PAGE_GRAPH_COLOR = PRIMARY_PURPLE;

/** Text color for user name on stats page */
export const STATS_PAGE_USER_NAME_COLOR = STATS_TEXT_DARK;

/** Blue text color for date range on stats page */
export const STATS_PAGE_DATE_RANGE_COLOR = STATS_PAGE_TEXT_COLOR;

/** Blue text color for history link on stats page */
export const STATS_PAGE_HISTORY_LINK_COLOR = STATS_PAGE_TEXT_COLOR;

/** Secondary text color for top stat labels */
export const STATS_PAGE_TOP_STAT_LABEL_COLOR = TEXT_SECONDARY;

/** Blue text color for week day labels */
export const STATS_PAGE_WEEK_DAY_LABEL_COLOR = STATS_PAGE_TEXT_COLOR;

/** Secondary text color for time stat labels */
export const STATS_PAGE_TIME_STAT_LABEL_COLOR = TEXT_SECONDARY;

/** Blue text color for time stat units */
export const STATS_PAGE_TIME_STAT_UNIT_COLOR = STATS_PAGE_TEXT_COLOR;

/** Secondary text color for percentage stat labels */
export const STATS_PAGE_PERCENTAGE_STAT_LABEL_COLOR = TEXT_SECONDARY;

// =============================================================================
// UI STATE COLORS
// =============================================================================

/** Red color for missed daily streak day circle background */
export const DAILY_STREAK_MISSED_CIRCLE_BG = ERROR_RED;

// =============================================================================
// DAILY STREAK DIV COLORS
// =============================================================================

/** Background color for daily streak container */
export const DAILY_STREAK_CONTAINER_BG = LIGHT_PURPLE_BG;

/** Text color for "Daily Streak" title */
export const DAILY_STREAK_TITLE_TEXT_COLOR = TEXT_WHITE;

/** Text color for day labels (Sunday, Monday, etc.) */
export const DAILY_STREAK_DAY_LABEL_TEXT_COLOR = TEXT_WHITE;

/** Background color for day box rectangles */
export const DAILY_STREAK_DAY_BOX_BG = CARD_WHITE;

/** Border color for day box rectangles */
export const DAILY_STREAK_DAY_BOX_BORDER_COLOR = LIGHT_BLUE_BG;

/** Background color for today's day box */
export const DAILY_STREAK_DAY_BOX_TODAY_BG = LIGHT_PURPLE_BG;

/** Border color for today's day box */
export const DAILY_STREAK_DAY_BOX_TODAY_BORDER_COLOR = STATS_PAGE_BORDER_COLOR;

/** Background color for completion circle (green check) */
export const DAILY_STREAK_COMPLETION_CIRCLE_BG = ACCENT_GREEN;

/** Background color for future day circle */
export const DAILY_STREAK_FUTURE_CIRCLE_BG = LIGHT_BLUE_BG;

/** Orange color for flame icons and streak indicators */
export const FLAME_ORANGE = BOOK_ORANGE;

/** Icon color for daily streak check/miss icons (white on colored backgrounds) */
export const DAILY_STREAK_ICON_COLOR = PURE_WHITE;

// =============================================================================
// FOCUS QUALITY DIV COLORS
// =============================================================================

/** Background color for focus quality container */
export const FOCUS_QUALITY_CONTAINER_BG = LIGHT_PURPLE_BG;

/** Text color for "Focus Quality" title */
export const FOCUS_QUALITY_TITLE_TEXT_COLOR = TEXT_WHITE;

/** Border color for focus quality container */
export const FOCUS_QUALITY_CONTAINER_BORDER_COLOR = STATS_CARD_BG;

/** Background color for time stat cards (average session, best streak) */
export const FOCUS_QUALITY_TIME_STAT_CARD_BG = CARD_WHITE;

/** Border color for time stat cards */
export const FOCUS_QUALITY_TIME_STAT_CARD_BORDER_COLOR = STATS_PAGE_BORDER_COLOR + OPACITY.subtle;

/** Text color for time stat values */
export const FOCUS_QUALITY_TIME_STAT_VALUE_COLOR = STATS_PAGE_VALUE_COLOR;

/** Text color for time stat units */
export const FOCUS_QUALITY_TIME_STAT_UNIT_COLOR = STATS_PAGE_TEXT_COLOR;

/** Text color for time stat labels */
export const FOCUS_QUALITY_TIME_STAT_LABEL_COLOR = TEXT_SECONDARY;

/** Icon color for time stat icons */
export const FOCUS_QUALITY_TIME_STAT_ICON_COLOR = STATS_PAGE_ICON_COLOR;

/** Background color for percentage stat cards (hit target, efficiency) */
export const FOCUS_QUALITY_PERCENTAGE_STAT_CARD_BG = CARD_WHITE;

/** Border color for percentage stat cards */
export const FOCUS_QUALITY_PERCENTAGE_STAT_CARD_BORDER_COLOR = STATS_PAGE_BORDER_COLOR + OPACITY.subtle;

/** Text color for percentage stat values */
export const FOCUS_QUALITY_PERCENTAGE_STAT_VALUE_COLOR = STATS_PAGE_VALUE_COLOR;

/** Text color for percentage stat labels */
export const FOCUS_QUALITY_PERCENTAGE_STAT_LABEL_COLOR = TEXT_SECONDARY;

/** Icon color for percentage stat icons */
export const FOCUS_QUALITY_PERCENTAGE_STAT_ICON_COLOR = STATS_PAGE_ICON_COLOR;

/** Background color for progress bar container */
export const FOCUS_QUALITY_PROGRESS_BAR_BG = LIGHT_BLUE_BG;

// =============================================================================
// SCREEN-SPECIFIC BACKGROUNDS
// =============================================================================

/** Light blue background for locked-in study session screen */
export const LOCKED_IN_BG = SOFT_BLUE;

/** Light blue background for app splash/launch screen */
export const SPLASH_BACKGROUND = '#E6F4FE';

// =============================================================================
// SHADOW AND OVERLAY COLORS
// =============================================================================

/** Black color for shadows (iOS HIG standard) */
export const SHADOW_COLOR = '#000000';

/** Semi-transparent black overlay for modals */
export const MODAL_OVERLAY = 'rgba(0, 0, 0, 0.4)';

// =============================================================================
// BORDER AND DIVIDER COLORS
// =============================================================================

/** Light gray color for subtle borders and dividers */
export const BORDER_LIGHT_GRAY = '#E0E0E0';

/** Strong border color */
export const BORDER_DARK = TEXT_DARK;

// =============================================================================
// SETTINGS PAGE COLORS
// =============================================================================

/** Background color for settings page */
export const SETTINGS_PAGE_BACKGROUND = '#ffffff';

/** Background color for settings cards */
export const SETTINGS_CARD_BG = CARD_WHITE;

/** Dark text color for settings items (on white background) */
export const SETTINGS_TEXT_COLOR = '#000000';

/** Color for dividers between settings items */
export const SETTINGS_DIVIDER_COLOR = 'rgba(184, 184, 184, 0.22)';

/** Dark icon color for settings items (on white background) */
export const SETTINGS_ICON_COLOR = '#1D1B20';

/** Text color for version number */
export const SETTINGS_VERSION_TEXT_COLOR = TEXT_SECONDARY;

// =============================================================================
// HOME PAGE COLORS
// =============================================================================

/** Blue color for section titles on home page */
export const HOME_PAGE_SECTION_TITLE_COLOR = PRIMARY_PURPLE;

/** Blue color for stat values on home page */
export const HOME_PAGE_STAT_VALUE_COLOR = PRIMARY_PURPLE;

/** Blue color for stat labels on home page */
export const HOME_PAGE_STAT_LABEL_COLOR = PRIMARY_PURPLE;

/** Blue color for timeline elements on home page */
export const HOME_PAGE_TIMELINE_COLOR = PRIMARY_PURPLE;

/** Blue shadow color for timeline dots */
export const HOME_PAGE_TIMELINE_SHADOW_COLOR = PRIMARY_PURPLE;

/** Background color for Lock In button */
export const LOCK_IN_BUTTON_COLOR = PRIMARY_PURPLE;

/** Shadow color for Lock In button */
export const LOCK_IN_BUTTON_SHADOW_COLOR = PRIMARY_PURPLE;

/** Text color for Lock In button */
export const LOCK_IN_BUTTON_TEXT_COLOR = '#FFFFFF';

/** Blue text color for Show More button */
export const SHOW_MORE_BUTTON_COLOR = PRIMARY_PURPLE;

/** Blue color for circular timer button ring */
export const CIRCULAR_TIMER_BUTTON_COLOR = PRIMARY_PURPLE;

/** Primary text color for header greeting */
export const HOME_PAGE_HEADER_GREETING_COLOR = PRIMARY_PURPLE;

/** Secondary text color for header subtitle */
export const HOME_PAGE_HEADER_SUBTITLE_COLOR = TEXT_SECONDARY;

/** Green color for completed time display */
export const HOME_PAGE_COMPLETED_TIME_COLOR = BOOK_GREEN;

/** Primary text color for session goal names */
export const HOME_PAGE_SESSION_GOAL_COLOR = TEXT_DARK;

/** Secondary text color for session duration */
export const HOME_PAGE_SESSION_DURATION_COLOR = TEXT_SECONDARY;

/** White text color for status tags */
export const HOME_PAGE_STATUS_TAG_TEXT_COLOR = TEXT_WHITE;

/** Blue text color for toggle buttons */
export const HOME_PAGE_TOGGLE_BUTTON_TEXT_COLOR = PRIMARY_PURPLE;

/** Background color for toggle switch when on */
export const HOME_PAGE_TOGGLE_SWITCH_ON_BACKGROUND_COLOR = PRIMARY_PURPLE;

/** Border color for toggle switch when on */
export const HOME_PAGE_TOGGLE_SWITCH_ON_BORDER_COLOR = PRIMARY_PURPLE;

/** Blue color for activity indicator */
export const HOME_PAGE_ACTIVITY_INDICATOR_COLOR = PRIMARY_PURPLE;

// =============================================================================
// LOCKED IN SCREEN COLORS
// =============================================================================

/** Background color for timer box on locked-in screen */
export const LOCKED_IN_TIMER_BG = SOFT_BLUE;

/** Shadow color for timer box */
export const LOCKED_IN_TIMER_SHADOW = SOFT_BLUE;

/** Border color for End Session button */
export const LOCKED_IN_BUTTON_BORDER = BOOK_GREEN;

/** Text color for End Session button */
export const LOCKED_IN_BUTTON_TEXT = BOOK_GREEN;

/** Orange background color for End Session button */
export const LOCKED_IN_END_SESSION_BUTTON_BACKGROUND = BOOK_ORANGE;

/** Green color for End Session button border and text */
export const LOCKED_IN_END_SESSION_BUTTON_ORANGE = BOOK_GREEN;

/** Green shadow color for End Session button */
export const LOCKED_IN_END_SESSION_BUTTON_SHADOW = BOOK_GREEN;

/** White text color for timer display */
export const LOCKED_IN_TIMER_TEXT_COLOR = TEXT_WHITE;

// =============================================================================
// TIMER PICKER COLORS
// =============================================================================

/** Blue color for timer picker values and labels */
export const TIMER_PICKER_COLOR = PRIMARY_PURPLE;

/** Primary text color for timer picker buttons */
export const TIMER_PICKER_BUTTON_TEXT_COLOR = TEXT_DARK;

// =============================================================================
// LINK AND INTERACTIVE COLORS
// =============================================================================

/** Blue color for links and hyperlinks */
export const LINK_BLUE = PRIMARY_PURPLE;

// =============================================================================
// ICON COLORS
// =============================================================================

/** Pure white color for icons on colored backgrounds */
export const ICON_WHITE = PURE_WHITE;

// =============================================================================
// SESSION HISTORY COLORS
// =============================================================================

/** White background for session history cards */
export const SESSION_CARD_BG = CARD_WHITE;

/** Opacity value for score-based tinting on session cards */
export const SESSION_CARD_TINT_OPACITY = 0.12;

// =============================================================================
// DARK MODE COLORS
// =============================================================================

/** Light text color for dark backgrounds */
export const DARK_TEXT = '#ECEDEE';

/** Dark background color for dark mode */
export const DARK_BACKGROUND = '#151718';

/** Icon color for dark mode */
export const DARK_ICON = '#9BA1A6';

/** Dark card background for dark mode */
export const DARK_CARD_BACKGROUND = '#2A2A2A';

/** Secondary text color for dark mode */
export const DARK_TEXT_SECONDARY = '#9BA1A6';

/** Tertiary text color for dark mode */
export const DARK_TEXT_LIGHT = '#687076';

// =============================================================================
// LEGACY COLOR OBJECTS
// =============================================================================

export const Colors = {
  light: {
    text: TEXT_DARK,
    background: BACKGROUND_MAIN,
    tint: TAB_BAR_ACTIVE_ICON_COLOR,
    icon: TEXT_SECONDARY,
    tabIconDefault: TAB_BAR_INACTIVE_ICON_COLOR,
    tabIconSelected: TAB_BAR_ACTIVE_ICON_COLOR,
    primaryPurple: PRIMARY_PURPLE,
    lightPurpleBg: LIGHT_PURPLE_BG,
    accentGreen: ACCENT_GREEN,
    cardBackground: CARD_BACKGROUND,
    textSecondary: TEXT_SECONDARY,
    textLight: TEXT_LIGHT,
    statusOnline: STATUS_ONLINE,
    statusActive: STATUS_ACTIVE,
  },
  dark: {
    text: DARK_TEXT,
    background: DARK_BACKGROUND,
    tint: TAB_BAR_ACTIVE_ICON_COLOR,
    icon: DARK_ICON,
    tabIconDefault: DARK_ICON,
    tabIconSelected: TAB_BAR_ACTIVE_ICON_COLOR,
    primaryPurple: PRIMARY_PURPLE,
    lightPurpleBg: LIGHT_PURPLE_BG,
    accentGreen: ACCENT_GREEN,
    cardBackground: DARK_CARD_BACKGROUND,
    textSecondary: DARK_TEXT_SECONDARY,
    textLight: DARK_TEXT_LIGHT,
    statusOnline: STATUS_ONLINE,
    statusActive: STATUS_ACTIVE,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
