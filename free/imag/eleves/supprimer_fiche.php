<?php
if ($choix_suppression =='oui') {
	require 'database.inc.php';	
	$requete = "DELETE FROM $table WHERE numero='$fiche' ";
	$resultat = requete( $requete );
	?>
		<BR>
		<CENTER>
			<p>
			<H1><B>La fiche est effacée.</B></H1><BR>
			<p>&nbsp;<P>
			<A HREF="<?php echo "index.php3?to=".$from;?>&condition=<?php echo $condition;?>">
				<IMG SRC="retour.gif" WIDTH="70" HEIGHT="30" BORDER="0" ALT="RETOUR">
			</A>
		</CENTER>
	<?php
}
else {
	require 'database.inc.php';			// ouverture de la connection avec la base
	$requete = "SELECT numero,nom,prenom FROM $table WHERE numero='$fiche' ";
	$resultat = requete( $requete );
	$row = mysql_fetch_array( $resultat );
	?>
	
	<BR>
	<FONT COLOR="#4242FF">		<!-- titre de la page -->
		<CENTER>
			<H1>
				Suppression de la fiche de l'élève </FONT> 
				<FONT COLOR='black'>
					<B>
						<?php echo $row[nom]." ".$row[prenom];?>
					</B>
				</FONT>
			</H1>
		</CENTER>
	</FONT>

	<p>&nbsp;<P>

	<center>
		Etes-vous sûr de vouloir 
		<B><FONT COLOR='red'>supprimer</FONT></B> la fiche de l'élève <B><?php echo $row[nom]." ".$row[prenom];?></B> ?<P>

		<TABLE>
			<TR>
				<TD>
					<A HREF="index.php3?from=<?php echo $from;?>&to=supprimer_fiche&fiche=<?php echo $fiche;?>&choix_suppression=oui&condition=<?php echo $condition;?>">
						<IMG SRC='oui.gif' WIDTH='70' HEIGHT='30' BORDER=0 ALT='OUI'>
					</A>
				</TD>
				<TD>
					<A HREF="<?php echo "index.php3?to=".$from;?>&condition=<?php echo $condition;?>">
						<IMG SRC='non.gif' WIDTH='70' HEIGHT='30' BORDER='0' ALT='NON'>
					</A>
				</TD>
			</TR>
		</TABLE>		
	</center>

	<?php
}
mysql_close();
?>
