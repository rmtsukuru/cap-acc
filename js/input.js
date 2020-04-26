function buySilicon(units) {
    if (game.business.cash >= game.market.prices.silicon * units) {
        game.business.cash -= game.market.prices.silicon * units;
        game.business.inventory.silicon += units;
    }
}

function setupInput() {
    $('#buildWidget').click(() => {
        if (game.business.inventory.silicon > 0) {
            game.business.inventory.widgets++;
            game.player.fatigue++;
            game.business.inventory.silicon--;
        }
    });

    $('#buySilicon').click(() => {
        buySilicon(1);
    });

    $('#buySilicon10').click(() => {
        buySilicon(10);
    });

    $('#buySilicon100').click(() => {
        buySilicon(100);
    });
}
