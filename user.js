class User {
    constructor() {
        this.index = null;
        this.email = null
        this.input = null;
        this.q1 = null;
        this.q2 = null;
        this.q3 = null;
    }

    updateCount(count) {
        database.ref('/').update({
            peopleCOunt: count
        });
    }

    update() {
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).set({
            input: this.input,
            email: this.email,
            q1:this.q1,
            q2: this.q2,
            q3:this.q3
        });
    }
}