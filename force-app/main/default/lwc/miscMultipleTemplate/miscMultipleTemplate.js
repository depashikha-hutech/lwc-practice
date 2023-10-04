import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';
export default class MiscMultipleTemplate extends LightningElement {
    tempelateOne = true;
    render(){
        return this.tempelateOne ? templateOne : templateTwo;
    }
    switchTemplate(){
        this.tempelateOne = this.tempelateOne ===true ? false : true;

    }
}