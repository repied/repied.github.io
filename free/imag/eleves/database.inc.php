<?
 function erreur( $message )
 {
  echo "Une <B>erreur</B> s'est produite, en voici le message :<p>";
  echo $message ;
  exit ;
 }
 
 // emplacement des donn�es de connexion
 require 'connexion.conf.php';
 
 // connexion au serveur de donn�es
 @mysql_connect( $serveur , $login , $pass )
  or erreur( 'Connexion au serveur de donn�es impossible<BR>' ) ;
 
 // S�lection de la base de donn�es
 @mysql_select_db( $base )
  or erreur( 'S�lection de la base de donn�e impossible<BR>' ) ;
 
 // fonction pour faire des requ�tes
 function requete( $requete )
 {
  if($resultat = mysql_query( $requete )) return $resultat ;
  erreur( "<B>La requ�te : </B>$requete<br><B>a donn� l'erreur :</B>" . mysql_error() ) ;
 }
?>