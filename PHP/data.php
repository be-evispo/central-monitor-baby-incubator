<?php

$api_key_value_1 = "amNcozreYgayth";
$api_key_value_2 = "qatWljskxMEgNN";
$api_key_value_3 = "ftmgseogdpAgck";

$api_key = $client = $Sskin = $Schamber = $humadity = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    getdata();
    $key = 1;
} 

function getdata()
{
    $api_key = test_input($_POST["api_key"]);
    $client = test_input($_POST["client"]);
    $clientt[$client] = test_input($_POST["client"]);
    $data[$client] = test_input($_POST["Data"]);
    $Sskin[$client] = test_input($_POST["Sskin"]);
    $Schamber[$client] = test_input($_POST["Schamber"]);
    $humadity[$client] = test_input($_POST["humadity"]);

    $arr['1']['client'] = $clientt['1']; //a random value
    $arr['1']['Data'] = $data['1']; //a random value
    $arr['1']['Sskin'] = $Sskin['1']; //a random value
    $arr['1']['Schamber'] = $Schamber['1']; //a random value
    $arr['1']['humadity'] = $humadity['1']; //a random value
    
    $arr['2']['client'] = $clientt['2']; //a random value
    $arr['2']['Data'] = $data['2']; //a random value
    $arr['2']['Sskin'] = $Sskin['2']; //a random value
    $arr['2']['Schamber'] = $Schamber['2']; //a random value
    $arr['2']['humadity'] = $humadity['2']; //a random value
    
    $arr['3']['client'] = $clientt['3']; //a random value
    $arr['3']['Data'] = $data['3']; //a random value
    $arr['3']['Sskin'] = $Sskin['3']; //a random value
    $arr['3']['Schamber'] = $Schamber['3']; //a random value
    $arr['3']['humadity'] = $humadity['3']; //a random value
    
    $arr['4']['client'] = $clientt['4']; //a random value
    $arr['4']['Data'] = $data['4']; //a random value
    $arr['4']['Sskin'] = $Sskin['4']; //a random value
    $arr['4']['Schamber'] = $Schamber['4']; //a random value
    $arr['4']['humadity'] = $humadity['4']; //a random value

    $json = json_encode($arr); //convert the array in json format 
    echo "$json"; //send the json response

    /* Save the response and client data to a file locally on server*/
    $t = time();
    $date_time = date('H:i:s', $t);

    $ip = $_SERVER["REMOTE_ADDR"]; //IP address of client requesting the data

    $str = " Server Time: $date_time \n\n Client IP: $ip \n\n Data sent: $json";
    file_put_contents("data.json", $json); //save the data in a text file
}
function readdata()
{
    $json = file_get_contents('data.json');

    // Decode the JSON file
    $json_data = json_decode($json, true);

    // Display data
    print_r($json_data);
}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function test_connection()
{
    $ch = curl_init('http://192.168.137.230');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute
    curl_exec($ch);

    // Check if any error occured
    if (!curl_errno($ch)) {
        $info = curl_getinfo($ch);
        echo 'Took ' . $info['total_time'] . ' seconds to send a request to ' . $info['url'];
    }
    // Close handle
    curl_close($ch);

}

?>


