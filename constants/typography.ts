/**
 * Typography System
 * Centralized typography definitions using iOS San Francisco system font
 */

import { TextStyle } from 'react-native';
import { moderateScale as ms } from '@/utils/responsive';
import { FONT_SIZE } from '@/utils/responsive';

// =============================================================================
// FONT WEIGHTS
// =============================================================================

/** Regular font weight (400) */
export const FONT_WEIGHT_REGULAR = '400';

/** Medium font weight (500) */
export const FONT_WEIGHT_MEDIUM = '500';

/** Semi-bold font weight (600) */
export const FONT_WEIGHT_SEMI_BOLD = '600';

/** Bold font weight (700) */
export const FONT_WEIGHT_BOLD = '700';

/** Bold font weight as string */
export const FONT_WEIGHT_BOLD_STRING = 'bold';

// =============================================================================
// SECTION TITLES
// =============================================================================

/** Section title typography (28pt, Bold) */
export const TYPOGRAPHY_SECTION_TITLE: TextStyle = {
  fontSize: FONT_SIZE.title2,
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(30),
};

/** Large section title typography (34pt, Bold) */
export const TYPOGRAPHY_LARGE_SECTION_TITLE: TextStyle = {
  fontSize: FONT_SIZE.title1,
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(41),
};

// =============================================================================
// STAT VALUES AND LABELS
// =============================================================================

/** Large stat value typography (52pt, Bold) */
export const TYPOGRAPHY_LARGE_STAT_VALUE: TextStyle = {
  fontSize: ms(52),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(52),
};

/** Stat value typography (36pt, Bold) */
export const TYPOGRAPHY_STAT_VALUE: TextStyle = {
  fontSize: ms(36),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(36),
};

/** Medium stat value typography (28pt, Bold) */
export const TYPOGRAPHY_MEDIUM_STAT_VALUE: TextStyle = {
  fontSize: ms(28),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(28),
};

/** Stat label typography (13pt, Medium) */
export const TYPOGRAPHY_STAT_LABEL: TextStyle = {
  fontSize: ms(13),
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  lineHeight: ms(18),
};

/** Small stat label typography (12pt, Medium) */
export const TYPOGRAPHY_SMALL_STAT_LABEL: TextStyle = {
  fontSize: ms(12),
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  lineHeight: ms(12),
};

// =============================================================================
// BODY TEXT
// =============================================================================

/** Body text typography (17pt, Regular) */
export const TYPOGRAPHY_BODY: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_REGULAR as TextStyle['fontWeight'],
  lineHeight: ms(24),
};

/** Body text medium typography (17pt, Medium) */
export const TYPOGRAPHY_BODY_MEDIUM: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  lineHeight: ms(24),
};

/** Body text semi-bold typography (17pt, Semi-Bold) */
export const TYPOGRAPHY_BODY_SEMI_BOLD: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(24),
};

/** Body text bold typography (17pt, Bold) */
export const TYPOGRAPHY_BODY_BOLD: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(19),
};

// =============================================================================
// BUTTON TEXT
// =============================================================================

/** Button text typography (20pt, Bold) */
export const TYPOGRAPHY_BUTTON: TextStyle = {
  fontSize: FONT_SIZE.title3,
  fontWeight: FONT_WEIGHT_BOLD_STRING as TextStyle['fontWeight'],
  lineHeight: ms(26),
};

/** Small button text typography (17pt, Semi-Bold) */
export const TYPOGRAPHY_BUTTON_SMALL: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(20),
};

// =============================================================================
// TIMELINE AND TIME DISPLAY
// =============================================================================

/** Timeline time typography (15pt, Semi-Bold) */
export const TYPOGRAPHY_TIMELINE_TIME: TextStyle = {
  fontSize: FONT_SIZE.subhead,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(20),
};

/** Timeline date typography (15pt, Semi-Bold) */
export const TYPOGRAPHY_TIMELINE_DATE: TextStyle = {
  fontSize: FONT_SIZE.subhead,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(20),
};

/** Duration text typography (20pt, Bold) */
export const TYPOGRAPHY_DURATION: TextStyle = {
  fontSize: FONT_SIZE.title3,
  fontWeight: FONT_WEIGHT_BOLD,
  lineHeight: ms(26),
};

// =============================================================================
// STATUS AND TAGS
// =============================================================================

/** Status tag typography (12pt, Semi-Bold) */
export const TYPOGRAPHY_STATUS_TAG: TextStyle = {
  fontSize: FONT_SIZE.caption,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(16),
};

/** Caption text typography (12pt, Regular) */
export const TYPOGRAPHY_CAPTION: TextStyle = {
  fontSize: FONT_SIZE.caption,
  fontWeight: FONT_WEIGHT_REGULAR,
  lineHeight: ms(16),
};

/** Caption medium typography (12pt, Medium) */
export const TYPOGRAPHY_CAPTION_MEDIUM: TextStyle = {
  fontSize: FONT_SIZE.caption,
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  lineHeight: ms(16),
};

// =============================================================================
// SESSION OVER SCREEN
// =============================================================================

/** Session over title typography (20pt, Regular) */
export const TYPOGRAPHY_SESSION_OVER_TITLE: TextStyle = {
  fontSize: ms(20),
  fontWeight: FONT_WEIGHT_REGULAR as TextStyle['fontWeight'],
  lineHeight: ms(24),
};

/** Session over title bold typography (20pt, Bold) */
export const TYPOGRAPHY_SESSION_OVER_TITLE_BOLD: TextStyle = {
  fontSize: ms(20),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(24),
};

/** Session over body typography (20pt, Bold) */
export const TYPOGRAPHY_SESSION_OVER_BODY: TextStyle = {
  fontSize: ms(20),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(28),
};

/** Session over small typography (12pt, Bold) */
export const TYPOGRAPHY_SESSION_OVER_SMALL: TextStyle = {
  fontSize: ms(12),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(16.8),
};

/** Session over large typography (24pt, Bold) */
export const TYPOGRAPHY_SESSION_OVER_LARGE: TextStyle = {
  fontSize: ms(24),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(33.6),
};

/** Session over button typography (20pt, Medium) */
export const TYPOGRAPHY_SESSION_OVER_BUTTON: TextStyle = {
  fontSize: ms(20),
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  lineHeight: ms(24),
};

// =============================================================================
// LOCKED IN SCREEN
// =============================================================================

/** Locked in timer typography (48pt, Bold) */
export const TYPOGRAPHY_LOCKED_IN_TIMER: TextStyle = {
  fontSize: FONT_SIZE.display,
  fontWeight: FONT_WEIGHT_BOLD_STRING as TextStyle['fontWeight'],
  lineHeight: ms(58),
};

/** Locked in subtitle typography (20pt, Medium) */
export const TYPOGRAPHY_LOCKED_IN_SUBTITLE: TextStyle = {
  fontSize: FONT_SIZE.title3,
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  lineHeight: ms(26),
};

// =============================================================================
// STATS PAGE
// =============================================================================

/** Stats page title typography (28pt, Bold) */
export const TYPOGRAPHY_STATS_TITLE: TextStyle = {
  fontSize: FONT_SIZE.title2,
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(29),
};

/** Stats page small title typography (12.5pt, Bold) */
export const TYPOGRAPHY_STATS_SMALL_TITLE: TextStyle = {
  fontSize: ms(12.5),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(15),
};

/** Stats page label typography (12pt, Semi-Bold) */
export const TYPOGRAPHY_STATS_LABEL: TextStyle = {
  fontSize: ms(12),
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(16),
};

/** Stats page value typography (28pt, Bold) */
export const TYPOGRAPHY_STATS_VALUE: TextStyle = {
  fontSize: ms(28),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(28),
};

/** Stats page large value typography (32pt, Bold) */
export const TYPOGRAPHY_STATS_LARGE_VALUE: TextStyle = {
  fontSize: ms(32),
  fontWeight: FONT_WEIGHT_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(32),
};

/** Stats page unit typography (14pt, Semi-Bold) */
export const TYPOGRAPHY_STATS_UNIT: TextStyle = {
  fontSize: ms(14),
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(14),
};

/** Stats page small text typography (9pt, Regular) */
export const TYPOGRAPHY_STATS_SMALL_TEXT: TextStyle = {
  fontSize: ms(9),
  fontWeight: FONT_WEIGHT_REGULAR as TextStyle['fontWeight'],
  lineHeight: ms(11),
};

/** Stats page medium text typography (14pt, Medium) */
export const TYPOGRAPHY_STATS_MEDIUM_TEXT: TextStyle = {
  fontSize: ms(14),
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  lineHeight: ms(14),
};

/** Stats page label medium typography (13pt, Semi-Bold) */
export const TYPOGRAPHY_STATS_LABEL_MEDIUM: TextStyle = {
  fontSize: ms(13),
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  lineHeight: ms(18),
};

// =============================================================================
// GRAPH AND CHART
// =============================================================================

/** Graph label typography (10pt, Regular) */
export const TYPOGRAPHY_GRAPH_LABEL: TextStyle = {
  fontSize: ms(10),
  fontWeight: FONT_WEIGHT_REGULAR as TextStyle['fontWeight'],
  fontFamily: undefined,
};

/** Graph label semi-bold typography (10pt, Semi-Bold) */
export const TYPOGRAPHY_GRAPH_LABEL_SEMI_BOLD: TextStyle = {
  fontSize: ms(10),
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  fontFamily: undefined,
};

// =============================================================================
// TAB BAR
// =============================================================================

/** Tab bar label typography (10pt, Medium) */
export const TYPOGRAPHY_TAB_BAR_LABEL: TextStyle = {
  fontSize: ms(10),
  fontWeight: FONT_WEIGHT_MEDIUM as TextStyle['fontWeight'],
  fontFamily: undefined,
};

// =============================================================================
// HEADER
// =============================================================================

/** Header title typography (28pt, Bold) */
export const TYPOGRAPHY_HEADER_TITLE: TextStyle = {
  fontSize: FONT_SIZE.title2,
  fontWeight: FONT_WEIGHT_BOLD_STRING as TextStyle['fontWeight'],
  fontFamily: undefined,
  lineHeight: ms(36),
};

/** Header subtitle typography (15pt, Regular) */
export const TYPOGRAPHY_HEADER_SUBTITLE: TextStyle = {
  fontSize: FONT_SIZE.subhead,
  fontWeight: FONT_WEIGHT_REGULAR as TextStyle['fontWeight'],
  fontFamily: undefined,
  lineHeight: ms(20),
};

// =============================================================================
// TIMER PICKER
// =============================================================================

/** Timer picker text typography (17pt, Regular) */
export const TYPOGRAPHY_TIMER_PICKER: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_REGULAR as TextStyle['fontWeight'],
  fontFamily: undefined,
  lineHeight: ms(24),
};

/** Timer picker label typography (22pt, Semi-Bold) */
export const TYPOGRAPHY_TIMER_PICKER_LABEL: TextStyle = {
  fontSize: FONT_SIZE.headline,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  fontFamily: undefined,
  lineHeight: ms(24),
};

/** Timer picker button typography (17pt, Semi-Bold) */
export const TYPOGRAPHY_TIMER_PICKER_BUTTON: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as TextStyle['fontWeight'],
  fontFamily: undefined,
  lineHeight: ms(24),
};

// =============================================================================
// SETTINGS
// =============================================================================

/** Settings text typography (17pt, Regular) */
export const TYPOGRAPHY_SETTINGS: TextStyle = {
  fontSize: FONT_SIZE.body,
  fontWeight: FONT_WEIGHT_REGULAR as TextStyle['fontWeight'],
  fontFamily: undefined,
  lineHeight: ms(22),
};
