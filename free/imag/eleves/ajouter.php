<BR>
<FONT COLOR="#4242FF">
	<CENTER>
		<H1>Ajouter une fiche</H1>
	</CENTER>
</FONT>
<p>&nbsp;<P>

<FORM METHOD=POST>
	<TABLE align="center">
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Nom :</FONT></TD>
			<TD bgcolor="#CCCCFF"><INPUT TYPE="text" NAME="nom_form" ></TD>
		</TR>
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Prénom :</FONT></TD>
			<TD bgcolor="#CCCCFF"><INPUT TYPE="text" NAME="prenom_form" ></TD>
		</TR>
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Adresse :</FONT></TD>
			<TD bgcolor="#CCCCFF"><TEXTAREA NAME="adresse_form" ROWS="3" COLS="20"></TEXTAREA></TD>
		</TR>
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Note :</FONT></TD>
			<TD bgcolor="#CCCCFF"><INPUT TYPE="text" NAME="note_form" ></TD>
		</TR>
		<TR align="center">
			<TD align="left"><INPUT TYPE="reset" value="Annuler"></TD>
			<TD align="right"><INPUT TYPE="submit" value="Ajouter"></TD>
		</TR>
	</TABLE>
</FORM>
<?php
if (($nom_form !="") && ($prenom_form !="")) {	//nom et prénom sont obligatoires

	require 'database.inc.php';					// ouverture de la connection avec la base
	$requete="INSERT INTO $table VALUES('0','$nom_form','$prenom_form','$adresse_form','$note_form')";
	$resultat = requete( $requete );

	if ($resultat=='1')	{
		echo "<CENTER>L'ajout de la fiche de <B>$nom_form $prenom_form</B> s'est bien effectué<BR></CENTER>";
	} else {
		erreur("<CENTER>L'ajout de la fiche de <B>$nom_form $prenom_form</B> a échoué !</CENTER>");
	}
	mysql_close();
} else {							//Message d'accueil
	echo "<CENTER>Remplissez les champs et validez<BR> (<B>Nom et Prénom sont obligatoires</B>)</CENTER>";
}
?>
