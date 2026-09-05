export function calculateDiscount(isPremium) {
  if (isPremium) {
    return 0.05;
  }

  return 0.10;
}
