function solve(){
    let fighter=(name)=>({
        name,
        health:100,
        stamina:100
    });
    const mage=(name)=>({ 
        name,
        health:100,
        mana:100
    });

}
let create = solve();
const scorcher = create.mage("Scorcher");
console.log(scorcher)
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);