type Order = {
  id: string
  items: { price: number; qty: number }[]
  coupon?: string
  userType?: "regular" | "vip"
}

/**
 * Calculate the final total for an order.
 * - Subtotal is sum(price * qty) for all items
 * - Coupon discounts are applied first (if recognised)
 * - VIP discount (5%) is applied on the resulting amount
 * - Result is clamped to a minimum of 0 and rounded to 2 decimals
 */

const COUPON_RATES: Record<string, number> = {
  DISCOUNT10: 0.1,
  DISCOUNT20: 0.2,
}

const VIP_MULTIPLIER = 0.95

const round2 = (n: number) => Math.round(n * 100) / 100

export function calculateTotal(order: Order): number {
  let subtotal = 0
  for (const item of order.items) {
    subtotal += item.price * item.qty
  }

  const couponRate = COUPON_RATES[order.coupon ?? ""] ?? 0
  const multiplier = (1 - couponRate) * (order.userType === "vip" ? VIP_MULTIPLIER : 1)

  const total = Math.max(0, subtotal * multiplier)

  return round2(total)
}
