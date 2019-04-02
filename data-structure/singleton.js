
var Singleton = (function () {
    var instance;

    function init() {
        function privateMethod() {
            console.log("I am private");
        }

        var privateVariable = "I am also private";
        var privateRandomNumber = Math.random();

        return {
            publicMethod: function () {
                console.log("The public can see me");
            },

            publicProperty: "I am also public",

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true
