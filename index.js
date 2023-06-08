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
var limyear = 40; // set how many years is the limit of the experiment.

function main(){
    const specieslist = []

    for (var i = 0; i < 10; i++){
        specieslist.push(createspecies(0,0,0));
    }

    // Time Progression
    for (var year = 0; year < limyear; year++){

        // Increase Age of Each Subject
        for (var a = 0; a < specieslist.length; a++){
            var localage = specieslist[a].split("~")[0];
            var ageincrement = Number(localage) + 1;
            specieslist[a] = specieslist[a].replace(localage, ageincrement);
        }


        for (var b = 0; b < specieslist.length; b++){
            // Decrease Health (based on scaled age factor) of Each Subject
            var localhp = specieslist[b].split("~")[1];
            var healthchange = Math.floor(1 - (Math.random()));

            // Decrease Health (based on skilled factor) of Each Subject
            var healthchange = (Number(healthchange) - (1 - specieslist[b].split("~")[2]/100));
            healthchange = (Number(localhp) + Number(healthchange));

            // Change HP based on HP Change
            specieslist[b] = specieslist[b].replace(localhp, healthchange);
        }

    }
    console.log(specieslist)
    

}

main();