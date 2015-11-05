var Nemo = require("../");
var nemo = Nemo({
  'driver': {
    'browser': 'firefox'
  },
  'data': {
    'baseUrl': 'https://www.paypal.com'
  }
}, function (err) {
  //always check for errors!
  if (!!err) {
    console.log('Error during Nemo setup', err);
  }
  nemo.events.on('nemo.foo', function (arg) {
     console.log('arrrrgh', arg);
  });
  nemo.events.emit('nemo.foo', 'poopoo');
  nemo.driver.get(nemo.data.baseUrl);
  nemo.driver.getCapabilities().
    then(function (caps) {
      console.info("Nemo successfully launched", caps.caps_.browserName);
    });
  nemo.driver.quit();
});