/**
 * Formats a date string to a readable locale-specific format
 * @param dateString - ISO date string or date value
 * @returns Formatted date string (e.g., "Apr 18, 2026")
 */
export const formatDate = (dateString: string | Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(dateString));
};

/**
 * Formats a date string to a readable locale-specific format with time
 * @param dateString - ISO date string or date value
 * @returns Formatted date and time string (e.g., "Apr 18, 2026, 02:30 PM")
 */
export const formatDateTime = (dateString: string | Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateString));
};
