const prefixTranslations: Record<string, string> = {
  'Dr.': 'د.',
  'Mr.': 'السيد',
  'Ms.': 'الآنسة',
  'Mrs.': 'السيدة',
  'Nurse': 'ممرضة',
}

/**
 * Doctors' `prefix` field is always stored as the English word
 * (see admin/fields/PrefixField.tsx). On the public site, translate
 * it to Arabic when the current locale is "ar"; otherwise pass it
 * through unchanged. Falls back to the original value if it's ever
 * something unmapped, rather than rendering blank.
 */
export function getLocalizedPrefix(prefix: string | undefined | null, locale: string): string {
  if (!prefix) return ''

  if (locale === 'ar') {
    return prefixTranslations[prefix] ?? prefix
  }

  return prefix
}