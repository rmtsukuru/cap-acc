function handleOutput() {
    const netWorth = game.business.cash;

    $('#playerStatus').text(game.player.status);
    $('#widgetCount').text(game.business.inventory.widgets);
    $('#widgetQuality').text(game.business.inventory.widgetQuality);
    $('#customerCount').text(game.business.sales.customers);
    $('#salesEmployees').text(game.business.sales.employees);
    $('#businessCash').text('$' + game.business.cash.toFixed(2).toLocaleString());
    $('#netWorth').text('$' + netWorth.toFixed(2).toLocaleString());
}
