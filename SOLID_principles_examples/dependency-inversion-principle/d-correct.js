// Creating an interface between the Store and the Stripe classes, such as 
// StripePaymentProcessor allows changing the payment method without the need
// to modify the Store class at all

// To switch from Stripe to PayPal, creating a PayPalPaymentProcessor and PayPal
// class is sufficient. The instance of the Store is then created with the relevant
// payment processor class

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PayPalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new PayPal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
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
    console.log(`${user} made payment of $${amountInDollars} with PayPal`);
  }
}

const store1 = new Store(new StripePaymentProcessor("John"));
store1.purchaseBike(2);
store1.purchaseHelmet(2);

const store2 = new Store(new PayPalPaymentProcessor("John"));
store2.purchaseBike(2);
store2.purchaseHelmet(2);
