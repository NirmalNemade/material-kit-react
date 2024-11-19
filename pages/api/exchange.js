const soap = require('soap');

const wsdlUrl = 'https://win-3icse76s4gj.sanchar.in:444/EWS/Services.wsdl';

soap.createClient(wsdlUrl, (err, client) => {
  if (err) {
    console.error('Error creating SOAP client:', err);
    return;
  }
  console.log('SOAP Client created:', client);
  // Use the client to call methods on the service njhegdyegf
});
