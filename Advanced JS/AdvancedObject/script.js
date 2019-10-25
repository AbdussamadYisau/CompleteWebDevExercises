// Advanced objects - reference type, context, instantiation

//Reference type 

var object1 = { value: 10};

var object2 = object1 ;

var object3 = { value: 10};

object1 === object2 ;// True, why? Makes sense because if the value of object1 is changed, that affects the value of object2

object1 === object3; // false, why? Makes sense because if the value of object1 is changed, that doesn't affect the value of object3

// All the other data types apart from object are all properly defined {i.e primitive type } as per they are created by the language JS, while objects are referenced, as per the programmer creates this.
