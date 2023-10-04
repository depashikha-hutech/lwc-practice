import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { getRecord } from 'lightning/uiRecordApi';
export default class WireApexdemo extends LightningElement {

    @api recordId;
    @wire(getContacts,{accId :'$recordId'})
    contacts; //  property will have data and error
} 