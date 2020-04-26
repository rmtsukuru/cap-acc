$(() => {
    setupInput();
    setupGame();

    const update = () => {
        const dt = UPDATE_RATE / game.timeRate;
        if (!game.paused) {
            game.update(dt);
        }
        setTimeout(update, dt);
    };

    update();
});
