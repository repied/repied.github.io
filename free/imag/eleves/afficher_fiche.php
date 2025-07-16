<?
	require 'database.inc.php';			// ouverture de la connection avec la base
	$requete = "SELECT * FROM $table WHERE numero='$fiche' ";
	$resultat = requete( $requete );
	$row = mysql_fetch_array( $resultat );
?>

<BR>
<FONT COLOR="#4242FF">
	<CENTER>
		<H1>Fiche complète de l'élève</FONT> <FONT COLOR='black'><B><? echo $row[nom]." ".$row[prenom]; ?></FONT></B></H1>
	</CENTER>
</FONT>

<p>&nbsp;<P>


<TABLE align="center">
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Numero de fiche:</FONT></TD>
		<TD bgcolor="#CCCCFF"><?echo "$row[numero]"?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Nom :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?echo "$row[nom]"?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Prenom :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?echo "$row[prenom]"?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Adresse :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?echo "$row[adresse]"?></TD>
	</TR>
	<TR>
		<TD bgcolor="#0000BB"><FONT COLOR="white">Note :</FONT></TD>
		<TD bgcolor="#CCCCFF"><?echo "$row[note]"?></TD>
	</TR>
</TABLE>
<P>

<TABLE width="100%">
	<TR align="center">
		<TD align="center">
			<A HREF="<? echo "index.php3?to=".$from;?>&condition=<?echo $condition;?>">
				<IMG SRC="retour.gif" WIDTH="70" HEIGHT="30" BORDER="0" ALT="RETOUR">
			</A>
		</TD>
	</TR>
</TABLE>
<?
	mysql_free_result($resultat);
	mysql_close();
?>

