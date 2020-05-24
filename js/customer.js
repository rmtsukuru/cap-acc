function Customer(wants, patience) {
    this.wants = wants || {};
    this.maxPatience = patience || DEFAULT_CUSTOMER_PATIENCE;
    this.patience = this.maxPatience;
}

Customer.prototype.addPatience = function(amount) {
    this.patience += amount;
    if (this.patience > this.maxPatience) {
        this.patience = this.maxPatience;
    }
};

Customer.prototype.removePatience = function(amount) {
    this.addPatience(-1 * amount);
}

function buildCustomer() {
    const patience = DEFAULT_CUSTOMER_PATIENCE * Math.random() + DEFAULT_CUSTOMER_PATIENCE / 2;
    return new Customer({ widget: 1 });
}
