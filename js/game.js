const game = {
    timeRate: 1,
    paused: false,
    update: dt => {},
};

function setupGame() {
    game.update = updateGame;
    game.player = {
        status: 'normal',
        fatigue: 0,
    };
    game.business = {
        cash: 1000,
        inventory: {
            silicon: 100,
            widgets: 10,
            widgetQuality: 1,
        },
        sales: {
            customers: [],
            employees: 1,
            widgetPrice: WIDGET_PRICE,
        },
    };
    game.market = {
        prices: {
            silicon: SILICON_PRICE,
        },
        demand: CUSTOMER_RATE,
        maxCustomers: CUSTOMER_MAX,
    };
}

function updatePlayer(dt) {
    if (game.player.fatigue > 0 && Math.random() < REST_RATE) {
        game.player.fatigue--;
    }

    if (game.player.fatigue > 40) {
        game.player.status = 'exhausted';
    } else if (game.player.fatigue > 20) {
        game.player.status = 'fatigued';
    } else if (game.player.fatigue > 10) {
        game.player.status = 'stressed';
    } else {
        game.player.status = 'normal';
    }
}

function updateSales(dt) {
    if (
        Math.random() < game.market.demand &&
        game.business.sales.customers.length < game.market.maxCustomers
    ) {
        game.business.sales.customers.push(buildCustomer());
    }

    if (
        game.business.sales.customers.length > 0 &&
        game.business.sales.employees > 0 &&
        game.business.inventory.widgets > 0 &&
        Math.random() < SALE_RATE * game.business.sales.employees
    ) {
        const customer = game.business.sales.customers.shift();
        if (customer.wants.widget) {
            const quantity = customer.wants.widget;
            game.business.inventory.widgets -= quantity;
            game.business.cash += quantity * game.business.sales.widgetPrice;
        }
    }
    game.business.sales.customers.forEach((customer, i) => {
        customer.removePatience(dt * PATIENCE_LOSS_RATE);
        if (customer.patience <= 0) {
            game.business.sales.customers.splice(i, 1);
        }
    });
}

function updateBusiness(dt) {
    updateSales(dt);
}

function updateGame(dt) {
    updatePlayer(dt);
    updateBusiness(dt);
    handleOutput();
}
