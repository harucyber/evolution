// Var Setup
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
            return (`~${this.age}~${this.health}~${this.skill}`);
        }
    }
    var creater = new species(0, 100, 0);
    return creater.attribute();
}



function main(){
    console.log(createspecies(0,0,0));
    // call additional functions here
}

main();