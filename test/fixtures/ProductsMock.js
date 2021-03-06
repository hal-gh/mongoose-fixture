/*
 *  File: Products.js
 *  Generated by: Mongoose-Fixture (v0.2.0)
 *
 */

// @callback must be returned
// expects (err, object)
// object can be an array of data-documents, or a kwarg['dataFixtures']

module.exports = function(mongoose, callback){

    // standard callback error
    var error = null;

    // create your data documents using object-literals
    var fixture = [];
    
    /*
     * Example of adding a data document/fixture item 
     */
    fixture.push({
        // by not defining an _id mongoose-fixture
        // will by default set a mongo ObjectID
        // defining one manually will override mongoDB
        name:'Some Test Data',
        tags:['test','data']
    });
    
    // an additional example
    fixture.push({
        name:'More Test Data',
        tags:['test','data','more']
    });
    
    
    // mongoose-fixture expects implementor to return
    // the callback passed in context
    return callback(error, fixture);
};
