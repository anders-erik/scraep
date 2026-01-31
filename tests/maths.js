import test from "node:test";
import assert from "node:assert/strict";

test("calculateTotal", async () => {
  const cartItems = [{ price: 20 }, { price: 30 }];

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  assert.equal(totalPrice, 50);
});