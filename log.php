<!DOCTYPE html>
<html>

<body>
    <?php

    echo '<table cellspacing="5" cellpadding="5">
      <tr> 
        <td>ID</td> 
        <td>Sensor</td> 
        <td>Location</td> 
        <td>Value 1</td> 
        <td>Value 2</td>
        <td>Value 3</td> 
        <td>Timestamp</td> 
      </tr>';


    $row_id = document . getElementById("cnoise") . innerHTML;
    $row_sensor = document . getElementById("cnoise") . innerHTML;
    $row_location = document . getElementById("cnoise") . innerHTML;
    $row_value1 = document . getElementById("cnoise") . innerHTML;
    $row_value2 = document . getElementById("cnoise") . innerHTML;
    $row_value3 = document . getElementById("cnoise") . innerHTML;
    $row_reading_time = document . getElementById("cnoise") . innerHTML;
    // Uncomment to set timezone to - 1 hour (you can change 1 to any number)
    //$row_reading_time = date("Y-m-d H:i:s", strtotime("$row_reading_time - 1 hours"));
    
    // Uncomment to set timezone to + 4 hours (you can change 4 to any number)
    //$row_reading_time = date("Y-m-d H:i:s", strtotime("$row_reading_time + 4 hours"));
    
    echo '<tr> 
                <td>' . $row_id . '</td> 
                <td>' . $row_sensor . '</td> 
                <td>' . $row_location . '</td> 
                <td>' . $row_value1 . '</td> 
                <td>' . $row_value2 . '</td>
                <td>' . $row_value3 . '</td> 
                <td>' . $row_reading_time . '</td> 
              </tr>';


    ?>
    </table>
</body>

</html>