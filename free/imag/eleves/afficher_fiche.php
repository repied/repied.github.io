<?php
	require 'database.inc.php';			// ouverture de la connection avec la base
	$requete = "SELECT * FROM $table WHERE numero='$fiche' ";
	$resultat = requete( $requete );
	$row = mysql_fetch_array( $resultat );
?>

<BR>
<FONT COLOR="#4242FF">
	<CENTER>
		<H1>Fiche complète de l'élève</FONT> <FONT COLOR='black'><B><?php echo $row['nom']." ".$row['prenom']; ?></FONT></B></H1>
	</CENTER>
</FONT>

<p>&nbsp;<P>


<TABLE align="center">
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Numéro de fiche:</FONT></TD>
		<TD bgcolor="#CCCCFF"><?php echo "$row[numero]" ?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Nom :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?php echo "$row[nom]" ?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Prénom :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?php echo "$row[prenom]" ?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Adresse :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?php echo "$row[adresse]" ?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Note :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?php echo "$row[note]" ?></TD>
	</TR>
</TABLE>
<P>

<TABLE width="100%">
	<TR align="center">
		<TD align="center">
			<A HREF="<?php echo "index.php3?to=".$from;?>&condition=<?php echo $condition;?>">
				<IMG SRC="retour.gif" WIDTH="70" HEIGHT="30" BORDER="0" ALT="RETOUR">
			</A>
		</TD>
	</TR>
</TABLE>
<?php
	mysql_free_result($resultat);
	mysql_close();
?>
