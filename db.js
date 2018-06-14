var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/inventory', function(err){
    if(err) throw err;
    
    console.log('connection was successful!');

    var inventory = mongoose.model('inventory')
    inventory.findById('5b1f9910be759d261ca12938', function(err, inventory){
        if(err) throw err;

        console.log(inventory);
    });
});