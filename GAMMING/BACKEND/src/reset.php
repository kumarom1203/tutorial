<?php
$mysqli = new mysqli("localhost","root","","gaming_application");
if ($mysqli -> connect_errno) {
  //echo "Failed to connect to MySQL:- " . $mysqli -> connect_error;
  exit();
}


$sql = "TRUNCATE  `initial_condition_log`";
$result = $mysqli->query($sql);

$sql = "TRUNCATE  `initial_condition`";
$result = $mysqli->query($sql);

$sql = "TRUNCATE  `order_card_selected`";
$result = $mysqli->query($sql);


for($team_id = 1111; $team_id<1116; $team_id++){
     resetAll($team_id, $mysqli);
}



function resetAll($team_id, $mysqli){




$sql = "INSERT INTO `initial_condition` (`id`, `workshop_id`, `team_id`, `participant_id`, `year`, `quarter`, `action`, `sub_action`, `action_type`, `CASH`, `AR_Q1`, `AR_Q2`, `AR_Q3`, `AR_Q4`, `STL_Q1`, `STL_Q2`, `STL_Q3`, `STL_Q4`, `LTL`, `EMERGENCY_LOAN`, `OTHER_LIABILITIES`, `M1`, `M1_LOADS`, `M1_OPEX`, `M1_DEPRECIATION`, `M1_SELECTED`, `M2`, `M2_LOADS`, `M2_OPEX`, `M2_DEPRECIATION`, `M2_SELECTED`, `M3`, `M3_LOADS`, `M3_OPEX`, `M3_DEPRECIATION`, `M3_SELECTED`, `M4`, `M4_LOADS`, `M4_OPEX`, `M4_DEPRECIATION`, `M4_SELECTED`, `R_N_D`, `R_N_D_salary`, `SALES`, `SALES_salary`, `ADMIN`, `ADMIN_salary`, `PURCHASING`, `PURCHASING_salary`, `RM_ORDER`, `RM_ORDER_PREV`, `RMWH_UNIT_N_VALUE`, `GIP_UNITS`, `GIP_VALUE`, `FGWH_UNITS`, `FGWH_VALUE`, `MACHINERY`, `EQUIPMENT`, `BUILDINGS`, `SHARE_CAPITAL`, `RESERVES`, `PQI_START`) VALUES (NULL, '1', '$team_id', '0', '1', '1', '1', 'A', 'initialCondition', '14.00', '30.00', '0.00', '0.00', '0.00', '30.00', '0.00', '0.00', '0.00', '20.00', '0.00', '0.00', '5', '2', '4', '1', '0', '10', '3', '4', '2', '0', '15', '4', '4', '3', '0', '0', '0', '0', '0', '0', '1', '0.00', '1', '0.00', '2', '0.00', '1', '0.00', '8', '0', '1', '4', '12', '1', '3', '10', '0', '30', '50.00', '0.00', '1')
";

$result = $mysqli->query($sql);

$sql = "select * from initial_condition where team_id = '$team_id'";
$result = $mysqli->query($sql);

$data = $result->fetch_all(MYSQLI_ASSOC);

//print_r($data);
$data = json_encode($data[0]);

$sql = "insert into initial_condition_log(team_id, participant_id, datas) values('$team_id', 0, '$data')";

echo $sql;
echo "<br><br>";

$result = $mysqli->query($sql);

}
?>


