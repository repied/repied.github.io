<?
 function erreur( $message )
 {
  echo "Une <B>erreur</B> s'est produite, en voici le message :<p>";
  echo $message ;
  exit ;
 }
 
 // emplacement des données de connexion
 require 'connexion.conf.php';
 
 // connexion au serveur de données
 @mysql_connect( $serveur , $login , $pass )
  or erreur( 'Connexion au serveur de données impossible<BR>' ) ;
 
 // Sélection de la base de données
 @mysql_select_db( $base )
  or erreur( 'Sélection de la base de donnée impossible<BR>' ) ;
 
 // fonction pour faire des requêtes
 function requete( $requete )
 {
  if($resultat = mysql_query( $requete )) return $resultat ;
  erreur( "<B>La requête : </B>$requete<br><B>a donné l'erreur :</B>" . mysql_error() ) ;
 }
?>