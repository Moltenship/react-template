/**
 * Assertion function to check for null or undefined.
 * @param value Value to check.
 */
export function assertNonNull<T>(value: T | null | undefined): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error('Value is not supposed to be null or undefined');
  }
}
