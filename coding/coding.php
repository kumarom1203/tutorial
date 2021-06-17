
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
<h4>1. REVERSE A NUMBER</h4>

<?php
$num = 123456;
echo "Original Number: ".$num."<br>";
$rev = 0;
for ($i=$num; $i>1  ; $i = $i/10) { 
	$rev = ($rev*10) + $i%10;
}
echo "Reverse Number: ".$rev."<br>"; 
?>
<pre>
$num = 123456;
$rev = 0;
for($i=$num; $i>1; $i = $i/10){ 
   $rev = ($rev*10) + $i%10;
}
echo "Reverse Number: ".$rev;
</pre>



<h4>2. REVERSE A STRING</h4>

<?php
$str = "ABCDEFM";
echo "Original String: ".$str."<br>";
$rev = '';
for ($i=strlen($str)-1; $i>=0  ; $i--) { 
	$rev = $rev.''.$str[$i];
}
echo "Reverse String: ".$rev."<br>"; 
?>

<pre>
$str = "ABCDEFM";
$rev = '';
for($i=strlen($str)-1; $i>=0  ; $i--){ 
   $rev = $rev.''.$str[$i];
}
echo "Reverse String: ".$rev;
</pre>


<h4>3. CHECK WHERE NUMBER IS ARMSTRONG OR NOT</h4>

<?php
$num = 153;
echo "Original Number: ".$num."<br>";
$total = 0;
for ($i=$num; $i>1  ; $i = $i/10) {
    $rem = $i%10; 
	$total = $total + ($rem*$rem*$rem);
}
if($total == $num){
	echo "Number is armstrom";
}else{
	echo "Number is not armstrom";
}

 
?>

<pre>
$num = 153;
echo "Original Number: ".$num;
$total = 0;
for($i=$num; $i>1; $i = $i/10){
   $rem = $i%10; 
   $total = $total + ($rem*$rem*$rem);
}
if($total == $num){
   echo "Number is Armstrong";
}else{
   echo "Number is not Armstrong";
}

</pre>


<h4>4. CALCULATE SUM OF EACH NUMBER FROM STRING 4,5,9, 8, 6</h4>

<?php
$str = '4,5,9, 8, 6';
echo "Original String: ".$str."<br>";
$total = 0;
$arr = explode(',', $str);

for ($i=0; $i<count($arr); $i++) {
    
	$total = $total + $arr[$i];
}
echo "Sum of String: ".$total."<br>";
?>

<pre>

$str = '4,5,9, 8, 6';
echo "Original String: ".$str;
$total = 0;
$arr = explode(',', $str);
for ($i=0; $i< count($arr); $i++) {
   $total = $total + $arr[$i];
}
echo "Sum of String: ".$total;

</pre>

<h4>5. SORT AN ARRAY [5, 1, 3, 2, 9, 4, 8, 6]</h4>

<?php
$arr = [5, 1, 3, 2, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']<br>';

for ($i=0; $i < count($arr) ; $i++) { 
	for ($j=$i+1; $j < count($arr); $j++) { 
		if($arr[$i] > $arr[$j]){
            $temp = $arr[$i];
            $arr[$i] = $arr[$j];
            $arr[$j] = $temp;
		}
	}
}

echo "Sorted Array [".implode(',', $arr).']<br>';

?>

<pre>
$arr = [5, 1, 3, 2, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']';

for($i=0; $i < count($arr) ; $i++) { 
   
   for ($j=$i+1; $j < count($arr); $j++) { 
      
      if($arr[$i] > $arr[$j]){
       
        $temp = $arr[$i];
        $arr[$i] = $arr[$j];
        $arr[$j] = $temp;

     }
   }
}

echo "Sorted Array [".implode(',', $arr).']';
</pre>



<h4>6. FIND MIN AND MAX FROM ARRAY [5, 1, 3, 2, 9, 4, 8, 6]</h4>

<?php
$arr = [5, 1, 3, 2, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']<br>';
$max = $arr[0];
$min = $arr[0];
for ($i=1; $i < count($arr) ; $i++) { 
	if($max<$arr[$i]){
       $max = $arr[$i]; 
	}
	if($min>$arr[$i]){
       $min = $arr[$i]; 
	}
}
echo "Max: ".$max."<br>";
echo "Min: ".$min."<br>";
?>

<pre>
$arr = [5, 1, 3, 2, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']';
$max = $arr[0];
$min = $arr[0];
for ($i=1; $i < count($arr) ; $i++) {

   if($max<$arr[$i]){

      $max = $arr[$i];

   }

   if($min>$arr[$i]){

      $min = $arr[$i];

   }
}
echo "Max: ".$max;
echo "Min: ".$min;

</pre>


<h4>7. FIND PAIR OF ELEMENT FROM ARRAY [5, 1, 3, 2, 9, 4, 8, 6] WHOSE SUM IS 10</h4>

<?php
$arr = [5, 1, 3, 2, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']<br>';
for ($i=0; $i < count($arr) ; $i++) { 
	for ($j=$i+1; $j < count($arr); $j++) { 
		if($arr[$i] + $arr[$j] == 10){
           $pair[] = "[".$arr[$i].", ".$arr[$j]."]"; 
		}
	}
}


echo "Paired Number ".implode(', ', $pair).'<br>';

?>

<pre>
$arr = [5, 1, 3, 2, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']';
for($i=0; $i < count($arr); $i++) {

   for($j=$i+1; $j < count($arr); $j++) { 

      if($arr[$i] + $arr[$j] == 10){

         $pair[] = "[".$arr[$i].", ".$arr[$j]."]"; 
      
      }
   }
}


echo "Paired Number ".implode(', ', $pair).'';

</pre>


<h4>8. SEARCH 10 IN THIS ARRAY [5, 1, 3, 2, 10, 9, 4, 8, 6] </h4>

<?php
$arr = [5, 1, 3, 2, 10, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']<br>';
$found = 0;
$find = 10;
for ($i=0; $i < count($arr) ; $i++) { 
	if($arr[$i] == $find){
		$found = 1;
		break;
	}
}

if($found){
	echo "$find Found this is array";
}else{
	echo "$find Not found this is array";
}

?>

<pre>
$arr = [5, 1, 3, 2, 10, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']';
$found = 0;
$find = 10;

for ($i=0; $i < count($arr) ; $i++) { 

	if($arr[$i] == $find){

		$found = 1;
		break;

	}

}

if($found){
	echo "$find Found this is array";
}else{
	echo "$find Not found this is array";
}

</pre>


<h4>9. REMOVE ALL DUPLICATE ELEMENT FROM ARRAY [5, 6, 9, 2, 8, 9, 4, 8, 6]</h4>

<?php
$arr = [5, 6, 9, 2, 8, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']<br>';
for($i=0; $i < count($arr) ; $i++) {
      $new[$arr[$i]] = $arr[$i]; 
}
echo "Unique Array [".implode(',', $new).']<br>';
?>

<pre>
$arr = [5, 6, 9, 2, 8, 9, 4, 8, 6];

echo "Original Array [".implode(',', $arr).']';

for($i=0; $i < count($arr); $i++) {

   $new[$arr[$i]] = $arr[$i]; 

}

echo "Unique Array [".implode(',', $new).']';
</pre>

<h4>10. FIND ALL DUPLICATE ELEMENT FROM ARRAY [8,5, 6, 9, 2, 8, 9, 4, 8, 6]</h4>

<?php
$arr = [8,5, 6, 9, 2, 8, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']<br>';
for($i=0; $i < count($arr) ; $i++) {
     for ($j=$i+1; $j < count($arr) ; $j++) { 
     	  if($arr[$i] == $arr[$j]){
              $dup[] = $arr[$i];
              $udup[$arr[$i]] = $arr[$i];
     	  }

     }

}
echo "Duplicate Array [".implode(',', $dup).']<br>';
echo "Unique Duplicate Array [".implode(',', $udup).']<br>';
?>

<pre>
$arr = [8,5, 6, 9, 2, 8, 9, 4, 8, 6];
echo "Original Array [".implode(',', $arr).']';
for($i=0; $i < count($arr) ; $i++) {

     for ($j=$i+1; $j < count($arr) ; $j++) { 

     	  if($arr[$i] == $arr[$j]){

              $dup[] = $arr[$i];
              $udup[$arr[$i]] = $arr[$i];

     	  }

     }

}
echo "Duplicate Array [".implode(',', $dup).']';
echo "Unique Duplicate Array [".implode(',', $udup).']';


</pre>


<h4>11. Find missing number in sorted array [1, 2, 5, 8, 9, 11, 12, 13, 15]</h4>

<?php
$arr = [1, 2, 5, 8, 9, 11, 12, 13, 15];
echo "Original Array [".implode(',', $arr).']<br>';
for($i=0; $i < count($arr)-1 ; $i++) {
  
  if($arr[$i+1] - $arr[$i] == 1){

  }else{
  	$diff = $arr[$i+1] - $arr[$i];
  	for ($j=0; $j<$diff-1; $j++) { 
  		$missing[] = $arr[$i] + $j + 1;
  	}
  }

}
echo "Missing Array [".implode(',', $missing).']<br>';

?>

<pre>
$arr = [1, 2, 5, 8, 9, 11, 12, 13, 15];
echo "Original Array [".implode(',', $arr).']';

for($i=0; $i < count($arr)-1 ; $i++) {
  
  if($arr[$i+1] - $arr[$i] == 1){

  }else{

  	$diff = $arr[$i+1] - $arr[$i];

  	for ($j=0; $j<$diff-1; $j++) { 

  		$missing[] = $arr[$i] + $j + 1;

  	}
  }

}
echo "Missing Array [".implode(',', $missing).']';
</pre>


<h4>12. WRITE THE PROGRAM TO FIND FACTORIAL OF NUMBER</h4>

<?php
$num = 6;
echo "Original Number ".$num."<br>";
$fact = 1;
for($i=1; $i<=$num  ; $i++) {
  $fact = $fact*$i;
}
echo "Factorial of $num = $fact <br>";
?>

<pre>
$num = 6;
echo "Original Number ".$num;
$fact = 1;
for($i=1; $i<=$num; $i++) {

  $fact = $fact*$i;

}
echo "Factorial of $num = $fact ";
</pre>


<h4>12. WRITE THE PROGRAM TO PRINT FABINOCCI SERIES</h4>

<?php
$num = 7;
echo "Original Number ".$num."<br>";
echo $first = 0;
echo ", ";
echo $second = 1;
echo ", ";
for($i=0; $i<=$num  ; $i++) {
  
  $third = $first + $second;
  echo $third.', ';
  
  $first = $second;
  $second = $third;
  
}

?>

<pre>
$num = 7;
echo "Original Number ".$num."<br>";
echo $first = 0;
echo ", ";
echo $second = 1;
echo ", ";
for($i=0; $i<=$num  ; $i++) {
  
  $third = $first + $second;
  echo $third.', ';
  
  $first = $second;
  $second = $third;
  
}
</pre>


<h4>
  WRITE THE CODE FOR GENERATING THIS ARRAY(LOOK LIKE MULTIPLICATION TABLE)
</h4>
<?php
$tmp = array( "0" => array(
  "2*1" => 2,
    "2*2" => 4, 
),

"1" => array(
  "3*1" => 3,
    "3*2" => 6, 
)

);


echo "<pre class='no_border'>";
print_r($tmp);
echo "</pre>";

for($i= 1; $i<=2; $i++){
  for($j=1; $j<=2; $j++){
      $ans[$i]["$i*$j"] = $i*$j;
  }
}
echo "ANSWER <br><pre class='no_border'>";
print_r($ans);
echo "</pre>";
?>
<pre>
for($i= 1; $i<=20; $i++){
   for($j=1; $j<=10; $j++){
      $ans[$i]["$i*$j"] = $i*$j;
   }
}
</pre>

<h4>
13. 
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
14. WRITE A PROGRAM TO SORT ARRAY BY VALUE LENGTH<br>
$array = ["hello", "hi", "water", "pop", "dgdfgdfgfgg"];
</h4>

<?php

$array = ["hello", "hi", "water", "pop", "dgdfgdfgfgg"];
/*
usort($array, function($a, $b) {
    return strlen($b) - strlen($a);
});
this is also solution 
*/

for ($i=0; $i < count($array); $i++) { 

    for($j=$i+1; $j<count($array); $j++){
        if(strlen($array[$i]) < strlen($array[$j])){
          $tem = $array[$i];
          $array[$i] = $array[$j];
          $array[$j] = $tem;

        }

    }

    
}
print_r($array);
?>

<pre>

$array = ["hello", "hi", "water", "pop", "dgdfgdfgfgg"];
/*
usort($array, function($a, $b) {
    return strlen($b) - strlen($a);
});
this is also solution 
*/

for ($i=0; $i < count($array); $i++) { 

    for($j=$i+1; $j < count($array); $j++){
        if(strlen($array[$i]) < strlen($array[$j])){
          $tem = $array[$i];
          $array[$i] = $array[$j];
          $array[$j] = $tem;

        }

    }

    
}
print_r($array);

</pre>


<h4>
    15. 
WRITE A PROGRAM THAT TAKES STRING AS AFRGUMENTS AND RETUEN ARRAY AS COUNT OF CHARACTER AND DIGIT<br>
INPUT: $string = 'omkum154ar'<br>
OUTPUT: ['digit'=>3, 'letter'=>7]
</h4>

<?php
$string = 'omkum154ar';
$digit = 0;
$letter = 0;


for ($i=0; $i < strlen($string); $i++) { 
    
   if(is_numeric($string[$i])){
        $digit++;
   }else{
        $letter++;
   }

}

$res = array('digit'=> $digit, 'letter'=>$letter);
print_r($res);


?>

<pre>
$string = 'omkum154ar';
$digit = 0;
$letter = 0;


for ($i=0; $i < strlen($string); $i++) { 
    
   if(is_numeric($string[$i])){
        $digit++;
   }else{
        $letter++;
   }

}

$res = array('digit'=> $digit, 'letter'=>$letter);
print_r($res);
    </pre>











<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>