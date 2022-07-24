<?php

namespace hospital;


// //in_array_row
// function in_array_row($flag,$array) {host
//     foreach ($array as $key => $value) {
//         if($value == $flag) {
//             return true;
//         }
//     }
//     return false;
// }

// //array_combine_new
// function array_combine_new($arr1,$arr2){
//     $finalArray = [];
//     foreach ($arr1 as $value1) {
//         foreach ($arr2 as $value2) {
//             $finalArray[$value1] = $value2;
//         }
//     }
//     return  $finalArra;
// }

// $HospitalObj = new Hospital( 'DY patil','Pune MH',1000 );
// $HospitalObj->getDetails(); //Hospital Name : DY patil, Address : Pune MH, No of beds : 1000

class Hospital{
    public $hospitalName;
    public $address;
    public $noOfBeds;

    public function __construct($hospitalName,$address,$noOfBeds) {
        $this->hospitalName = $hospitalName;
        $this->address = $address;
        $this->noOfBeds = $noOfBeds;
    }

    public function getDetails(){
        return [
            "Hospital Name" => $this->hospitalName,
            "Address" => $this->address,
            "No of beds" => $this->noOfBeds
        ];
    }
}



?>

Table: Customers
    id
    name
    age
    city
Table: Orders
    id
    customer_id
    order_details
    order_date
    Offer_code

result:
    id, customer name, city, order details

order_dat = todaye

select id, name, city from Customers inner join Orders as Customers.id = Orders.customer_id and where order_dat = datenow()