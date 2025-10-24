<?php 
  $in  = array('|\\\|', '|%|', '|_|', '|\*|', '|\?|'); 
  $out = array('\\',    '\%',  '\_',  '%',    '_'   ); 
   
  $where = " champ like '".preg_replace($in,$out,$recherche)."'"; 
  $query = "SELECT ... FROM la_table WHERE " . $where." LIMIT 0,10"; 
   
  // ... 
?>

<?php 
function cvt_date($d_in, $type) 
{ 
  // Fonction permettant de traduire un timestamp 
  // mysql en différents formats. 
  $d = substr($d_in,6,2); // jour 
  $m = substr($d_in,4,2); // mois 
  $y = substr($d_in,0,4); // année 

  switch ($type) 
  { 
    case "UNIX": 
      // TIMESTAMP mysql >> TIMESTAMP UNIX 
      return mktime(0,0,0,$m, $d, $y); 
      break; 

    case "FR": 
      // TIMESTAMP mysql >> Date format FR 
      return $d."/".$m."/".$y; 
      break; 

    case "ENG": 
      // TIMESTAMP mysql >> Date format ENG 
      return $y."/".$m."/".$d; 
  } 
} 
?>
