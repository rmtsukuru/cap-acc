function handleOutput() {
    const netWorth = game.business.cash;

    $('#playerStatus').text(game.player.status);
    $('#widgetCount').text(game.business.inventory.widgets);
    $('#widgetQuality').text(game.business.inventory.widgetQuality);
    $('#siliconCount').text(game.business.inventory.silicon + ' units');
    $('#siliconPrice').text('$' + game.market.prices.silicon.toFixed(2).toLocaleString());
    $('#customerCount').text(game.business.sales.customers.length);
    $('#salesEmployees').text(game.business.sales.employees);
    $('#widgetPrice').text('$' + game.business.sales.widgetPrice.toFixed(2).toLocaleString());
    $('#businessCash').text('$' + game.business.cash.toFixed(2).toLocaleString());
    $('#netWorth').text('$' + netWorth.toFixed(2).toLocaleString());
}
