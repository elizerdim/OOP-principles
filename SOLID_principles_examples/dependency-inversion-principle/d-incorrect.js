// Store class is tightly coupled with Stripe class, so changing the payment
// method from Stripe to PayPal requires a lot of modifications on the Store class

class Store {
  constructor(user) {
    // this.stripe = new Stripe(user);
    this.paypal = new PayPal();
    this.user = user;
  }

  purchaseBike(quantity) {
    // this.stripe.makePayment(200 * quantity * 100);
    this.paypal.makePayment(this.user, 200 * quantity);
  }

  purchaseHelmet(quantity) {
    // this.stripe.makePayment(15 * quantity * 100);
    this.paypal.makePayment(this.user, 15 * quantity);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

class PayPal {
  makePayment(user, amountInDollars) {
    console.log(
      `${user} made payment of $${amountInDollars} with PayPal`
    );
  }
}

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
