<!DOCTYPE html>
<html lang="en">
<head>
  <title>API LIST</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
  .panel-default>.panel-heading {
    color: #f5f5f5;
    background-color: #337ab7;
    border-color: #337ab7;
}
.panel-default {
    border-color: #337ab7;
}
  </style>
</head>
<body>
<div>

 <table class="table table-bordered">
<?php


$team_id = $_GET['t'];

$mysqli = new mysqli("localhost","root","","provabbusinessgame");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$sql = "SELECT * FROM initial_condition_log where team_id='$team_id'";

$result = $mysqli->query($sql);

// Fetch all




$data = $result->fetch_all(MYSQLI_ASSOC);

$k = 0;


foreach($data as $key){
	$k++;
	$datas=json_decode($key['datas']);
	$team_id = $key['team_id'];
	$participant_id = $key['participant_id'];
	?>
	
	<?php
	if($k == 1){
		echo "<thead><tr><td>S.N</td><td>TEAM</td><td>PARTICIPANT</td>";
		foreach($datas as $col => $val){
			echo "<td>".$col."</td>";
		}
		echo "<tr></thead><tbody>";
		
		
	}
	?>
	
	
	<?php
	
		echo "<tr><td>$k</td><td>$team_id</td><td>$participant_id</td>";
		foreach($datas as $col => $val){
			echo "<td>".$val."</td>";
		}
		echo "<tr></thead><tbody>";
		
		
	
	?>
	 
	 
	
	
   
	<?php
	
}

$mysqli -> close();
?>
 </tbody>

</table>

</div>

</body>
</html>
