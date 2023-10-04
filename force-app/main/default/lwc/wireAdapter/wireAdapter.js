import { LightningElement,api,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
//import PHONE_FIELD from '@salesforce/schema/Account.Phone';  // import through api

export default class WireAdapter extends LightningElement {

    @ api recordId;
    
    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,"Account.Phone"]})// through string
    record; //fetch data and error
    // below line is ternary operater  and syntax to fetch data
    get name(){
        return this.record.data ? getFieldValue(this.record.data,NAME_FIELD):'';
        // return this.record.data.fields.Name.value;---return value from and templatesand true condition in html side
    }

    get phone(){
        return this.record.data ? getFieldValue(this.record.data,'Account.Phone'):'';
    }
}