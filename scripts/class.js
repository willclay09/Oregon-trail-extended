class Traveler {
    constructor (name, food){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt(){
        (this.food += 2)
    }
    eat(){
        if(this.food <= 0){
          return this.isHealthy = false
        }
        return(this.food -= 1)
    }
}

class Wagon {
    constructor (capacity, passengers){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
         return(this.capacity - this.passengers.length)
    }
    join(traveler){
        if (this.getAvailableSeatCount() > 0){
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine(){
        const healthy = this.passengers.some(traveler => traveler.isHealthy === false) 
        return healthy
    }
    totalFood(){
        let total = 0
       for(let index = 0; index < this.passengers.length; index += 1){
        total += this.passengers[index].food
       }
       return total
    }
}