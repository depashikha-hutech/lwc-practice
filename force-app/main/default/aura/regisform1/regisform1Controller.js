({
	  doInit : function(component, event, helper) {
		alert('do init');
         helper.helperMethod1(component, event, helper);
         helper.helperMethod2(component, event, helper);
	},
    dosave :function(component, event, helper) {
        alert(JSON.stringify(component.get('v.Reg')))
    }
})