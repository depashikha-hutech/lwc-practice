public class ShopifyIntegration {
    public static void getCustomers() {
        // Local Variables
        String responseBody;
        
        // Making Callouts using HTTP Requests
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        
        // Provide URL of the Shopify store to HTTP requests
        String url = 'https://admin.shopify.com/store/salesforceintegrationhutech/';
        String endPointValue = url + '/admin/customers.json';
        req.setEndpoint(endPointValue);
        
        // Adding certificate to HTTP Requests
        req.setClientCertificateName('Shopify');
        
        // Providing Username and Password
        String username = 'depashikha@hutechsolutions.com';
        String password = 'Deepa@12s';
        Blob headerValue = Blob.valueOf(username + ':' + password);
        String authorizationHeader = 'Basic ' + EncodingUtil.base64Encode(headerValue);
        req.setHeader('Authorization', authorizationHeader);
        req.setHeader('content-type', 'application/json');
        
        // Use GET Method as we are retrieving data from Shopify
        req.setMethod('GET');
        
        try {
            HttpResponse res = http.send(req);
            System.debug('res*****' + res);
            responseBody = res.getBody();
            System.debug('ResponseBody*****' + responseBody);
            
            if (res.getStatusCode() == 200 && responseBody != null) {
                ShopifyCustomerJSON customerList = ShopifyCustomerJSON.parse(responseBody);
                List<Account> accList = new List<Account>();
                
                for (ShopifyCustomerJSON.Customers customer : customerList.customers) {
                    Account acc = new Account();
                    acc.Name = customer.first_name + ' ' + customer.last_name;
                    acc.Shopify_Id__c = String.valueOf(customer.id);
                    acc.Phone = String.valueOf(customer.phone);
                    accList.add(acc);
                }
                
                if (!accList.isEmpty()) {
                    upsert accList Shopify_Id__c;
                }
            } else {
                System.debug(res.getStatusCode());
                System.debug(res.getStatus());
                // Handle Error
            }
        } catch (Exception e) {
            System.debug('exception: ' + e);
        }
    }
}