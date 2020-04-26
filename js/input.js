function setupInput() {
    $('#buildWidget').click(() => {
        game.business.inventory.widgets++;
        game.player.fatigue++;
    });
}
