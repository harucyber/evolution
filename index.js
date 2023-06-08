// Backend Var Setup
var year = 0
var count = 0

function createspecies(age, health, skill){
    count = count + 1;
    class species{
        constructor(age, health, skill){
            this.age = age;
            this.health = health;
            this.skill = skill;
        }
        attribute(){
            this.skill = Math.floor(Math.random()*100); // math.random returns value of less than one, so *100 gives us a int that is 1-99
            return (`${this.age}~${this.health}~${this.skill}`);
        }
    }
    var creater = new species(0, 100, 0);
    return creater.attribute();
}

// Variables Users can Alter
var limyear = 10; // set how many years is the limit of the experiment.

function main(){
    const specieslist = []

    for (var i = 0; i < 10; i++){
        specieslist.push(createspecies(0,0,0));
    }

    // Aging
    for (var year = 0; year < limyear; year++){
        for (var a = 0; a < specieslist.length; a++){

            var species2 = specieslist[a].split("~")[0];
            var ageincrement = Number(species2) + 1;
            specieslist[a] = specieslist[a].replace(species2, ageincrement);
            
        }
    }

}

main();