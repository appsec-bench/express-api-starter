export function calculateDiscount(isPremium) {
  if (isPremium) {
    return 0.10;
  }

  return 0.05;
}
