var PRICE_PER_KM = 10;
class Uber{
      constructor(){
            this.price ;
            this.km ;
      }


      calculatePrice(){
            this.price = this.km * PRICE_PER_KM;
      }

      setkm(kmsTravelled){
            this.km = kmsTravelled;
            this.calculatePrice();
      } 

      getPrice(){
             return this.price;
      }

}


const uber = new Uber();
uber.setkm(46);
console.log( "uber price " +  uber.getPrice()); 