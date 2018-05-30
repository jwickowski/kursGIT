var romanTests = [
function Ito1(romanInstance){
    var result = romanInstance.toArabic("I");
    return result === 1;
},
function IIto2(romanInstance){
    var result = romanInstance.toArabic("II");
    return result === 2;
},
];

for(var i = 0; i < romanTests.length; i++){
    var romanTest = romanTests[i];
    var romanInstance = Object.create(Roman);
    var testResult  = romanTest(romanInstance);
    if(testResult){
        console.log("Test '" + romanTest.name + "' Passed");
    }
    else{
        console.log("Test '" +romanTest.name + "' Failed!!!!!!!!!!!!!");
    }
}