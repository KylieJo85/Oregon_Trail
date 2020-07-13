class wagon{
    constructor(capacity){
        this.capacity=capacity
        this.passengers=[]
    }

getAvailableSeatCount(){

 return this.capacity-this.passengers.length


}


join(traveler){
if(this.getAvailableSeatCount()>0){
this.passengers.push(traveler)
}
}


shouldQuarantine(){
let unhealthyPersonOnWagon=this.passengers.some(oneSickPassenger=>this.passengers===true)

}


totalFood(){

let inTheWagon=this.passengers.reduce((totalAmountOfFood,amongAllPassengers=>totalAmountOfFood)+this.passengers.food,0)

}



}