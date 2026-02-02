type Order = {
  id: string
  items: { price: number; qty: number }[]
  coupon?: string
  userType?: "regular" | "vip"
}

export function calculateTotal(order: Order) {
  let total = 0

  for (let i = 0; i < order.items.length; i++) {
    total = total + order.items[i].price * order.items[i].qty
  }

  if (order.coupon) {
    if (order.coupon === "DISCOUNT10") {
      total = total - total * 0.1
    } else if (order.coupon === "DISCOUNT20") {
      total = total - total * 0.2
    }
  }

  if (order.userType && order.userType === "vip") {
    total = total - total * 0.05
  }

  if (total < 0) {
    total = 0
  }

  return Math.round(total * 100) / 100
}
