({
	helperMethod1 : function(component, event, helper) {
		var action= component.get('c.getpicklists');
        action.setCallback(this,function(result){
        var resultValue= result.getReturnValue();
        component.set('v.gend',resultValue);
        });
        $A.enqueueAction(action);
        alert(component.get('v.gend'));
	},
    helperMethod2 : function(component, event, helper) {
		var action= component.get('c.getpicklist1');
        action.setCallback(this,function(result){
        var resultValue= result.getReturnValue();
        component.set('v.caste',resultValue);
        });
        $A.enqueueAction(action);
        alert(component.get('v.caste'));
	}
})