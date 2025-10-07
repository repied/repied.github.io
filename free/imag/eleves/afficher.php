<BR>
<FONT COLOR="#4242FF">
	<CENTER>
		<H1>Toutes les fiches</H1>
	</CENTER>
</FONT>

<p>&nbsp;<P>

<CENTER>
	Voici un résumé de toutes les fiches des élèves de la base de données.
</CENTER>
<p>

<?php
require 'database.inc.php'; // ouverture de la connection avec la base

//Calcul de la requête en fonction du tri souhaité

if ($ordre !="") {			//pas d'ordre de tri
	$requete = "SELECT numero,nom,prenom FROM $table ORDER BY ".$ordre.$sens;
}else {						//un ordre de tri a été cliqué
	$requete = "SELECT numero,nom,prenom FROM $table";
}

$resultat = requete( $requete );		//calcul des résultats
$nb_res = mysql_num_rows($resultat);
echo "<P><CENTER>Il y a <B>$nb_res</B> fiche".($nb_res >1 ?"s":"")." dans la base.</CENTER><P>";
?>
<TABLE align="center">					<!-- Présentation des résultats -->
	<TR bgcolor="#0000BB" align="center">
		<TD bgcolor="#0000BB">
			<FONT COLOR="#FFFFFF">
				<A HREF='index.php3?to=afficher&ordre=numero&sens='><IMG SRC="fleche_haut_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE CROISSANT"></A>
				<B>N°</B>
				<A HREF='index.php3?to=afficher&ordre=numero&sens= DESC'><IMG SRC="fleche_bas_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE DÉCROISSANT"></A>
			</FONT>
		</TD>
		<TD>
			<FONT COLOR="#FFFFFF">
				<A HREF='index.php3?to=afficher&ordre=nom&sens='><IMG SRC="fleche_haut_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE CROISSANT"></A>
				<B>Nom</B>
				<A HREF='index.php3?to=afficher&ordre=nom&sens= DESC'><IMG SRC="fleche_bas_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE DÉCROISSANT"></A>
			</FONT>
		</TD>
		<TD>
			<FONT COLOR="#FFFFFF">
				<A HREF='index.php3?to=afficher&ordre=prenom&sens='><IMG SRC="fleche_haut_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE CROISSANT"></A>
				<B>Prénom</B>
				<A HREF='index.php3?to=afficher&ordre=prenom&sens= DESC'><IMG SRC="fleche_bas_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE DÉCROISSANT"></A>
			</FONT>
		</TD>
	</TR>
	<?
	while( $row = mysql_fetch_array( $resultat ) ) {
		?>
			<TR bgcolor="#CCCCFF" align="center">
				<TD> <? echo "$row[numero]";?> </TD>
				<TD> <? echo "$row[nom]";?> </TD>
				<TD> <? echo "$row[prenom]";?> </TD>
				<TD bgcolor='#FFFFFF'></TD>
				<TD bgcolor='#FFFFFF'>
					<A HREF="index.php3?to=afficher_fiche&from=afficher&fiche=<?echo "$row[numero]";?>">
						<IMG SRC="afficher_icone.gif" WIDTH="25" HEIGHT="21" BORDER=0 ALT="AFFICHER LA FICHE COMPLETE">
					</A>
				</TD>
				<TD bgcolor='#FFFFFF'>
					<A HREF="index.php3?to=modifier_fiche&from=afficher&fiche=<?echo "$row[numero]";?>">
						<IMG SRC="modifier_icone.gif" WIDTH="19" HEIGHT="17" BORDER=0 ALT="MODIFIER LA FICHE">
					</A>
				</TD>
				<TD bgcolor='#FFFFFF'>
					<A HREF="index.php3?to=supprimer_fiche&from=afficher&fiche=<?echo "$row[numero]";?>">
						<IMG SRC="supprimer_icone.gif" WIDTH="24" HEIGHT="22" BORDER=0 ALT="SUPPRIMER LA FICHE">
					</A>
				</TD>
			</TR>
	<? } ?>	<!-- fin du while -->
</TABLE>
<?
mysql_free_result($resultat);
mysql_close();
?>
<P>

<CENTER>
	Vous pouvez classer ces fiches en cliquant sur une des flèches.
</CENTER>
