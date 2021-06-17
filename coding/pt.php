
<style type="text/css">
	pre{
	border: 1px solid;
    padding: 13px;
    font-size: 20px;
	}
	h4{
		color: #3f51b5;

	}
  .no_border{
      border: 0px solid;
    padding: 13px;
    font-size: 16px;
  }
  }
</style>
<h4>
Difficulty: Easy
Being greedy for Water:

You are given container full of water. Container can have limited amount of water. 
You also have NN bottles to fill. 
You need to find the maximum numbers of bottles you can fill.
Input:
First Argument contains an integer arg1 capacity of the container.
Second Argument contains an interger arg2 number of bottles(length of array).
Third Argument contains an array arg3 capacities of each bottles.

Output:
You should print maximum number of bottles you can fill.
<br>
Example #1:
    SAMPLE INPUT 
    I: 10 
    II: 5 
    III: [8,5,4,3,2]

    SAMPLE OUTPUT
    3
<br>
Example #2:
    SAMPLE INPUT 
    I: 10 II: 6 III: [1,3,7,2,2,1]

    SAMPLE OUTPUT 
    5
</h4>

<?php
$container = 10;
$botel = 5;
$botelcapacity = [8,5,4,3,2];
sort($botelcapacity);
$tem = 0;
$count = 0;
for($i=0; $i<count($botelcapacity); $i++) { 
	  $tem = $tem + $botelcapacity[$i];
    if($tem<=$container){
       $count++;
    }else{
      break;
    }
}

echo $count;
 
?>


<pre>
$container = 10;
$botel = 5;
$botelcapacity = [8,5,4,3,2];
sort($botelcapacity);
$tem = 0;
$count = 0;
for($i=0; $i < count($botelcapacity); $i++) { 
    $tem = $tem + $botelcapacity[$i];
    if($tem<$container){
       $count++;
    }else{
      break;
    }
}

echo $count;
</pre>

