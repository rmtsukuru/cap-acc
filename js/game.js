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
            widgets: 10,
            widgetQuality: 1,
        },
        sales: {
            customers: 0,
            employees: 1,
        },
    }
}

function updatePlayer(dt) {
    if (game.player.fatigue > 0 && Math.random() < REST_RATE) {
        game.player.fatigue--;
    }

    if (game.player.fatigue > 10) {
        game.player.status = 'fatigued';
    } else {
        game.player.status = 'normal';
    }
}

function updateSales(dt) {
    if (Math.random() < CUSTOMER_RATE) {
        game.business.sales.customers++;
    }

    if (
        game.business.sales.customers > 0 &&
        game.business.sales.employees > 0 &&
        game.business.inventory.widgets > 0 &&
        Math.random() < SALE_RATE * game.business.sales.employees
    ) {
        game.business.sales.customers--;
        game.business.inventory.widgets--;
        game.business.cash += WIDGET_PRICE;
    }
}

function updateBusiness(dt) {
    updateSales(dt);
}

function updateGame(dt) {
    updatePlayer(dt);
    updateBusiness(dt);
    handleOutput();
}
