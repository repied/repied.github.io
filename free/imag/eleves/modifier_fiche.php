<!-- ce code est difficile à lire -->

<?php
require 'database.inc.php';			// ouverture de la connection avec la base

	// si les champs du formulaire ne sont pas vides c'est parce qu'on vient de demander d'enregistrer un changement
	// le lignes suivantes permettent de mettre la base de donnée à jour avant de réafficher la page de modification
if ( $nom_form != '' ) {
	$requete="UPDATE $table SET nom='$nom_form' WHERE numero='$fiche'";
	requete( $requete );
	$fiche_mise_a_jour="oui";		//sert seulement pour afficher un message (cf en bas) de confirmation
}
if ( $prenom_form != '' ) {
	$requete="UPDATE $table SET prenom='$prenom_form' WHERE numero='$fiche'";
	requete( $requete );
	$fiche_mise_a_jour="oui";
}
if ( $adresse_form != '' ) {
	$requete="UPDATE $table SET adresse='$adresse_form' WHERE numero='$fiche'";
	requete( $requete );
	$fiche_mise_a_jour="oui";
}
if ( $note_form != '' ) {
	$requete="UPDATE $table SET note='$note_form' WHERE numero='$fiche'";
	requete( $requete );
	$fiche_mise_a_jour="oui";
}

$requete = "SELECT * FROM $table WHERE numero='$fiche' ";
$resultat = requete( $requete );		//on récupère la fiche (éventuellement modifiée)
$row = mysql_fetch_array( $resultat );	//puis on l'affiche
?>

<BR>
<FONT COLOR="#4242FF">		<!-- titre de la page -->
	<CENTER>
		<H1>
			Fiche complète <I>modifiable</I> de l'élève</FONT> 
			<FONT COLOR='black'>
				<B>
					<?php echo $row[nom]." ".$row[prenom];?>
				</B>
			</FONT>
		</H1>
	</CENTER>
</FONT>

<p>&nbsp;<P>


<FORM METHOD=POST>
	<TABLE align="center">
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Numero de fiche:</FONT></TD>
			<TD bgcolor="#CCCCFF"><?echo "$row[numero]"?></TD>
		</TR>
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Nom :</FONT></TD>
			<TD bgcolor="#CCCCFF"><INPUT TYPE="text" NAME="nom_form" value="<?echo "$row[nom]"?>"></TD>
		</TR>
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Prenom :</FONT></TD>
			<TD bgcolor="#CCCCFF"><INPUT TYPE="text" NAME="prenom_form" value="<?echo "$row[prenom]"?>"></TD>
		</TR>
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Adresse :</FONT></TD>
			<TD bgcolor="#CCCCFF"><TEXTAREA NAME="adresse_form" ROWS="3" COLS="20"><?echo "$row[adresse]"?></TEXTAREA></TD>
		</TR>
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Note :</FONT></TD>
			<TD bgcolor="#CCCCFF"><INPUT TYPE="text" NAME="note_form" value="<?echo "$row[note]"?>"></TD>
		</TR>
	</TABLE>
	<P>
	<TABLE align="center">
		<TR>
			<TD align="right">
				<INPUT TYPE="image" src="enregistrer.gif" alt="ENREGISTRER LES MODIFICATIONS" >
			</TD>
			<TD align="left">
				<A HREF="<? echo "index.php3?to=".$from;?>&condition=<?echo $condition;?>">
					<IMG SRC="retour.gif" WIDTH="70" HEIGHT="30" BORDER="0" ALT="RETOUR">
				</A>
			</TD>

		</TR>
	</TABLE>
</FORM>

<?

if ($fiche_mise_a_jour == "oui") {
	echo "<P><CENTER>La fiche a bien été enregistrée.</CENTER>"; // message de confirmation
	$fiche_mise_a_jour="";   //RAZ de cette variable
}

mysql_free_result($resultat);
mysql_close();
?>
