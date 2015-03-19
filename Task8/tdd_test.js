TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello World!", result);
}); 

TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?

    assert.equals("helo World!", result);
}); 

TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello World!", result);

   });

TestMyCode.run("testing oyama Siphula function", function(assert){
var result= oyama();
    //is the result as we expected?
assert.equals("oyama Siphula",result);
//an example of an error by not to put an exlamation(!) mark to expected result
});

TestMyCode.run("testing oyama Siphula function", function(assert){
var result = oyama();
    //is the result as we expected?
assert.equals("oyama Siphla!",result);

});

TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?

    assert.equals("hello World!", result);
}); 