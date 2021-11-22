class Pokemon {
    constructor(name, number, type, hp) {
        this.name = name;
        this.number = number;
        this.type = type;
        this.hp = hp;
    }
    static isHealthy(hp) {
        if (hp <= 50) {
            return false;
        }
        else {
            return true;
        }
    }

    static typeAssigned(number) {
        if (number > 0 && number < 25) {
            return this.type = "fire"
        }
        else if (number >= 25 && number < 50) {
            return this.type = "ice"
        }
        else if (number >= 50 && number < 75) {
            return this.type = "water"
        }
        else if (number >= 75 && number < 100) {
            return this.type = "rock"
        }
        else if (this.number > 100) {
            return this.type = "fairy"
        }
    }
    
}

let pikachu = new Pokemon("Pikachu", 1, "fire", 72);

console.log(pikachu);
console.log(Pokemon.typeAssigned(pikachu.number));
console.log(Pokemon.isHealthy(pikachu.hp));
