function checkDataType(element) {  //function that checks datatype

    if (element.constructor == String) { //checks for string


        console.log("data type  is String");

        return element;
    } else if (isNaN(element) && typeof element == "number") {  //ckecks for NaN
        console.log("datatype is NaN");


    } else if (element.constructor == Number) {  //checks for Number
        console.log("data type is Number")
        return element;


    } else if (element.constructor == Function) { //checks for function


        console.log("data type of is Function")
        return element;
    } else if (element.constructor == Object) { //checks for object

        console.log("data type is Object")

        //  return element;


        var key = Object.keys(element);
        var value = Object.value(element);

        key.map((val, inx) => {       
            console.log(v + ":" + value[i]);

        })



    } else if (element.constructor == Boolean) { //checks for bool value

        console.log("data type is Boolean");
        return element;
    } else if (element == null) { //checks for null value



        console.log("data type is null");
        return element;
    } else if (element.constructor == Array) {  //checks for Array
        if (element[1].constructor == Object) {//if it is an array of object


            console.log(" data type is array of objects");




        } else { //if it is an array


            console.log(" datatype is  Array");
        }

        element.map((element, i) => { //printing array values using map 

            console.log(element);
        })


    } else { //undefined values


        console.log("undefined !! it canot be resolved");
    }




}