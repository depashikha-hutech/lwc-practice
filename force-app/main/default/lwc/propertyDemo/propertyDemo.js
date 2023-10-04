import { LightningElement , api } from 'lwc';

export default class PropertyDemo extends LightningElement {

    message = 'Private Property';
    @ api recordId;
    status = 'Public Property';
}
