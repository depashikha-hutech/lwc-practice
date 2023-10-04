import { LightningElement, api} from 'lwc';

export default class Child extends LightningElement {
   // uppercaseItemName = 'default value';
   // @api
   // get itemName(){
      //  return this.uppercaseItemName;
    
    //}
//set will return value of property
   // set itemName(value){
   //     this.uppercaseItemName = value.toUpperCase();//value will be strind
    //}

   @api firstName ='Sanjay'; // private prkoperty
}