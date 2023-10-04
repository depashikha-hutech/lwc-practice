public class StudentRegistration {
    
    @AuraEnabled
    public static List<String> getpicklists()
    {
        List<String> pkList=new List<String>();
        Map<String,Schema.SObjectType> allObj=Schema.getGlobalDescribe();
     Map<String,Schema.SObjectField> allFlds=allObj.get('Student_Registration__c').getDescribe().fields.getMap();
     List<Schema.PicklistEntry> picklist=allFlds.get('Gender__c').getDescribe().getPicklistValues();
    for(Schema.PicklistEntry pk : picklist){
      pkList.add(pk.getValue());
        }
        system.debug('pkList'+pkList);
        return pkList;
    }
     @AuraEnabled
    public static List<String> getpicklist1()
    {
        List<String> pkList=new List<String>();
        Map<String,Schema.SObjectType> allObj=Schema.getGlobalDescribe();
     Map<String,Schema.SObjectField> allFlds=allObj.get('Student_Registration__c').getDescribe().fields.getMap();
     List<Schema.PicklistEntry> picklist=allFlds.get('Cast__c').getDescribe().getPicklistValues();
    for(Schema.PicklistEntry pk : picklist){
      pkList.add(pk.getValue());
        }
        system.debug('pkList'+pkList);
        return pkList;
    }
}