function Fighter(obj) {
    let data = obj;
    let name = data.name;
    let damage = data.damage;
    let hp = data.hp;
    let agility = data.agility;
    let wins = 0;
    let losses = 0;
    this.getName = function () {
        return name;
    }
    this.getDamage = function () {
        return damage;
    }
    this.getAgility = function () {
        return agility;
    }
    this.getHealth = function () {
        return hp;
    }
    this.dealDamage = function (damage) {
        if (hp > 0 && hp > damage) {
            hp -= damage;
        } else {
            hp = 0;
        }
    }
    this.attack = function (defFighter) {
        let maxSuccess = 100;
        let successAttack = maxSuccess - defFighter.getAgility();
        let randomSuccess = Math.random() * maxSuccess;
        if (successAttack >= randomSuccess) {
            defFighter.dealDamage(damage);
            console.log(`${name} make ${damage} damage to ${defFighter.getName()}`);
        } else {
            console.log(`${name} attack missed`);
        }
    }
    this.logCombatHistory = function () {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
    }
    this.heal = function (heal) {
            hp += heal;
            console.log(`${name} has HP: ${hp}`);
    }
    this.addWin = function () {
        wins += 1;
    }
    this.addLoss = function () {
        losses += 1;
    }
}

function battle(fighter1, fighter2) {
    let fighter1HP = fighter1.getHealth();
    let fighter2HP = fighter2.getHealth();
    if (fighter1HP > 0 && fighter2HP > 0) {
        while (fighter1HP > 0 && fighter2HP > 0) {
            if (fighter1HP > 0) {
                fighter1.attack(fighter2);
                fighter2HP = fighter2.getHealth();
            }
            if (fighter2HP > 0) {
                fighter2.attack(fighter1);
                fighter1HP = fighter1.getHealth();
            }
        }
        if (fighter1HP > 0) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} beat ${fighter2.getName()}`);
        } else {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} beat ${fighter1.getName()}`);
        }
        return console.log(`${fighter1.getName()} HP:${fighter1HP} ${fighter2.getName()} HP:${fighter2HP}`);
    } else {
        if (fighter1HP === 0) {
            return console.log(`${fighter1.getName()} is dead and can't fight`);
        } else {
            return console.log(`${fighter2.getName()} is dead and can't fight`);
        }
    }
}
