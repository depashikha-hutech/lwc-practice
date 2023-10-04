({ 
    doinit : function(component, event, helper) {
		var action= component.get('c.getPickList');
        action.setCallback(this,function(result){
        var resultValue= result.getReturnValue();
        component.set('v.gend',resultValue);
        });
        $A.enqueueAction(action);
        alert(component.get('v.gend'));
	}
})