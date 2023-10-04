public class regsi2 {
    
    @AuraEnabled
    public static List<String> getPicklist()
    {
        List<String> pkList=new List<String>();
        Map<String,Schema.SObjectType> allObj=Schema.getGlobalDescribe();
     Map<String,Schema.SObjectField> allFlds=allObj.get('Student_Registration__c').getDescribe().fields.getMap();
     List<Schema.PicklistEntry> pickList=allFlds.get('Gender__c').getDescribe().getPickListValues();
     for(Schema.PicklistEntry pk : pickList){
      pkList.add(pk.getValue());
        }
        system.debug('pkList'+pkList);
        return pkList;
    }
}