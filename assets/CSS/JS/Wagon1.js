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
let personsInWagon=this.passengers.some(travelers=>this.passengers===true)





}



totalFood(){
let allPassengersInTheWagon=this.passengers.reduce((travelers,totalAmountOfFood)=>travelers+this.passengers,0)
}




}