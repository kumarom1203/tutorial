<?php

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

?>
