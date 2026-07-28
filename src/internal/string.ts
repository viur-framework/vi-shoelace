/** Converts the first letter of a string to uppercase */
export function uppercaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/** Escapes regex special characters so a string can be safely used as a literal match inside a RegExp */
export function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
