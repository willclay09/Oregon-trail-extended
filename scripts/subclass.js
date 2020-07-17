class Doctor extends Traveler {
    constructor (name, food){
    super (name, food)
}
heal(traveler){
    traveler.isHealthy = true
}
}
class Hunter extends Traveler {
    constructor(name, food){
    super (name, food)
    this.food = 2
}
hunt(){
    (this.food += 5)
}
eat(){
   if(this.food < 2){
       this.food = 0
       this.isHealthy = false
   } else {
     (this.food -= 2)
   }
}
   
giveFood(traveler, numOfFoodUnits){
    if(this.food >= numOfFoodUnits){
        traveler.food += numOfFoodUnits
        this.food -= numOfFoodUnits
    }
}
}