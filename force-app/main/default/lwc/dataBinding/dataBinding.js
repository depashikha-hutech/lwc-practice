import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
//     firstName = '';
//     lastName = '';
//         handelChange(event){
//         const field = event.target.name;
//         if(field==='Fname'){
//             this.firstName=event.target.value;
//         }else if(field==='Lname'){
//             this.lastName=event.target.value;
//     }
// }
// //getter
// get uppercasedFullName(){
//     return `${this.firstName}${this.lastName}`.toUpperCase();
// }
firstName = '';
 lastName = '';

handleClick(event){
    var input = this.template.querySelectorAll("lightning-input");
    input.forEach(function(element) {
        if(element.name == 'fname')
        this.firstName = element.value;
    else if(element.name == 'lname')
    this.lastName = element.value;
          },this);
}
}