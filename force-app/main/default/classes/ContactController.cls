public with sharing class ContactController {
  //auraenabled is used to call method of apex class in lwc 
  //cacheable=true helps to caches the lists of particular ojects that you will be able to returning
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId){
        try {
            return[
                SELECT AccountId,Id,FirstName ,LastName
                FROM Contact WHERE AccountId =:accId
                WITH SECURITY_ENFORCED
            ];
            // with sharing----- record label Security and
            //SECURITY_ENFORCED------- also with field label Security
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}