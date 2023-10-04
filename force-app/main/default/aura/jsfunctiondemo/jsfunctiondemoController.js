({
	handelClick : function(component, event, helper) {
        component.set("v.Message","Clicked the button");
		
	},
    
    anotherhandelClick : function(component, event, helper) {
       //component.set("v.Message2","Clicked to submit");
        var btn = event.getSource();
        var msg = btn.get("v.label")
        component.set("v.Message2",msg);
        
		
},
    doInit : function(component, event, helper) {
        component.set("v.Message","Intialized the button");
		component.set("v.Message2","button intialized")
	},
    doInit : function(component, event, helper) {
        var url = $A.get('$Resource.nameofyourimagefromstaticresource');
        component.set('v.backgroundImageURL', url);
    } 
    
})