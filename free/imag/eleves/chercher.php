<BR>
<FONT COLOR="#4242FF">
	<CENTER>
		<H1>Rechercher</H1>
	</CENTER>
</FONT>
<p>

<CENTER>
	Une plusieurs fiches selon <B>un ou plusieurs</B> critères.
</CENTER>
<BR>

<!-- Saisie du formulaire de requete dans des variables " *_form "-->
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
		<TR>
			<TD bgcolor="#0000BB"><FONT COLOR="white">Type de recherche :</FONT></TD>
			<TD bgcolor="#CCCCFF">
				<INPUT TYPE="radio" NAME="et_ou_form" value="AND">ET<BR>
				<INPUT TYPE="radio" NAME="et_ou_form" value="OR" checked>OU
			</TD>
			<TD>
				<A HREF="#" onClick="script_aide('aide_chercher.html');">
					<IMG SRC="aide_icone.gif" WIDTH="21" HEIGHT="21" BORDER=0 ALT="AIDE">
				</A>
			</TD>
		</TR>
		<TR align='center'>
			<TD align='left'><INPUT TYPE="reset" value="Effacer"></TD>
			<TD align='right'><INPUT TYPE="submit" value="Rechercher"></TD>
		</TR>
	</TABLE>
</FORM>

<!-- Transformation du formulaire en une vraie requete MYSQL -->

<?
if ( ($condition != "")||($nom_form !="")||($prenom_form !="")||($adresse_form !="")||($note_form !="") ){//un des champs est NON vide : la recherche est lancee
	require 'database.inc.php';

	if ($condition == "") {	// si oui ca veut dire que c'est la 1ere fois, cad  y a pas d'ordre définit

			// Maintenant on construit la variable $condition

		$condition = "";									// initialisation à la chaine vide

		$tab=array("nom","prenom","adresse","note");		//tous les champs
		$j=0;												//indice du tablo des chps non vides
			
		for ($i=0;$i<count($tab);$i++) {					//construction d'un tableau de champs non vides
			$nom_du_champ_du_formulaire=$tab[$i]."_form";	//construction du nom du champ du formulaire
			if ( $$nom_du_champ_du_formulaire!= "") {		// $$ = utilisation de variable dynamique (cf doc dans comte rendu stage)
				$tab_non_vide[$j]=$tab[$i];
				$j++;
			}
		}													//ici on a  tab_non_vide
		$nb_champ_non_vides=$j;								//$j est le nb_champ_non_vides apres la boucle ci dessus

		$i=0;												//indice de parcours du tablo $tab_non_vide
		while ($i < ($nb_champ_non_vides-1) ) {				// -1 pour s'arreter à l'avant dernier
			$nom_du_champ_du_formulaire=$tab_non_vide[$i]."_form";

			$condition = $condition.$tab_non_vide[$i]." LIKE '".$$nom_du_champ_du_formulaire."' ".$et_ou_form." ";		// ATTENTION : Utilisation de variables dynamiques cad "$$"
			$i++;
		}
		$nom_du_champ_du_formulaire=$tab_non_vide[$i]."_form";		//le dernier
		$condition = $condition.$tab_non_vide[$i]." LIKE '".$$nom_du_champ_du_formulaire."'"; //le dernier : pas de "OR" ou "AND"

			// Ici la  construction de $condition est finie

		$requete = "SELECT numero,nom,prenom FROM $table WHERE $condition ";

	} //fin du if ($condition=="") : cad que ce n'est pas la premiere fois qu'on vient sur cette page (2 cas possibles: un ordre défini ou bien on revient d'une suppression ou d'une modification)
	elseif ($ordre != "") {			//cad qu'un ordre est défini (on a cliqué sur une des flèches)
		$condition=preg_replace("|\\\|","",$condition);		//sert à enlever les \ ajoutés par le passage de paramètres
		$requete = "SELECT numero,nom,prenom FROM $table WHERE $condition ORDER BY ".$ordre.$sens;
	}
	else {							//cad qu'on revient d'une suppression ou d'une modification
		$condition=preg_replace("|\\\|","",$condition);
		$requete = "SELECT numero,nom,prenom FROM $table WHERE $condition" ;

	}

		// Maintenant que la requete à faire est déterminée , on a plus qu'à afficher les résultats

	$resultat = requete( $requete );	//questionnement de la base de données
	$nb_res = mysql_num_rows($resultat);
	if ($nb_res >0) {
		echo "<CENTER>Il y a <B>$nb_res</B> élève".($nb_res >1 ?"s":"")." dont le profil correspond à la recherche</CENTER>";
		?>
		<CENTER>
			<H4><FONT COLOR="4242FF">Résultat de la recherche :</FONT></H4>
		</CENTER>

		<TABLE align="center">
			<TR bgcolor="#0000BB" align="center">
				<TD>
					<FONT COLOR="white">
						<A HREF="index.php3?to=chercher&ordre=numero&sens=&condition=<?echo $condition;?>"><IMG SRC="fleche_haut_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE CROISSANT"></A>
						<B>N°</B>
						<A HREF="index.php3?to=chercher&ordre=numero&sens= DESC&condition=<?echo $condition;?>"><IMG SRC="fleche_bas_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE DÉCROISSANT"></A>
					</FONT>
				</TD>
				<TD>
					<FONT COLOR="white">
						<A HREF="index.php3?to=chercher&ordre=nom&sens=&condition=<?echo $condition;?>"><IMG SRC="fleche_haut_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE CROISSANT"></A>
						<B>Nom</B>
						<A HREF="index.php3?to=chercher&ordre=nom&sens= DESC&condition=<?echo $condition;?>"><IMG SRC="fleche_bas_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE DÉCROISSANT"></A>
					</FONT>
				</TD>
				<TD>
					<FONT COLOR="white">
						<A HREF="index.php3?to=chercher&ordre=prenom&sens=&condition=<?echo $condition?>"><IMG SRC="fleche_haut_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE CROISSANT"></A>
						<B>Prénom</B>
						<A HREF="index.php3?to=chercher&ordre=prenom&sens= DESC&condition=<?echo $condition?>"><IMG SRC="fleche_bas_icone.gif" WIDTH="12" HEIGHT="14" BORDER=0 ALT="TRIER PAR ORDRE DÉCROISSANT"></A>
					</FONT>
				</TD>
			</TR>
		<?
		while( $row = mysql_fetch_array( $resultat ) ) {
			?>
			<TR bgcolor="#CCCCFF" align="center">	<!-- une ligne de tableau par résultat trouvé -->
				<TD> <? echo "$row[numero]";?> </TD>
				<TD> <? echo "$row[nom]";?> </TD>
				<TD> <? echo "$row[prenom]";?> </TD>
				<TD bgcolor='#FFFFFF'></TD>
				<TD bgcolor='#FFFFFF'>
					<A HREF="index.php3?to=afficher_fiche&from=chercher&fiche=<?echo $row[numero];?>&condition=<?echo $condition;?>">
						<IMG SRC="afficher_icone.gif" WIDTH="25" HEIGHT="21" BORDER=0 ALT="AFFICHER LA FICHE COMPLÈTE">
					</A>
				</TD>
				<TD bgcolor='#FFFFFF'>
					<A HREF="index.php3?to=modifier_fiche&from=chercher&fiche=<?echo $row[numero];?>&condition=<?echo $condition;?>">
						<IMG SRC="modifier_icone.gif" WIDTH="19" HEIGHT="17" BORDER=0 ALT="MODIFIER LA FICHE">
					</A>
				</TD>
				
				<TD bgcolor='#FFFFFF'>
					<A HREF="index.php3?to=supprimer_fiche&from=chercher&fiche=<?echo $row[numero];?>&condition=<?echo $condition;?>">
						<IMG SRC="supprimer_icone.gif" WIDTH="24" HEIGHT="22" BORDER=0 ALT="SUPPRIMER LA FICHE">
					</A>
				</TD>
				<?
			echo '</TR>';
		}	// fin du while
		echo '</TABLE>';
	} else {
		echo "<CENTER><B>Aucun</B> profil ne correspond à votre recherche</CENTER>"; // zéro résultats
	}

	mysql_free_result($resultat);	//dans tous les cas on ferme la connexion MYSQL
	mysql_close();
} // fin du if (un champ n'est pas vide)

else {	//Message d'accueil
	echo "<CENTER>Remplissez au moins un champ de ce formulaire et validez.<BR><B>Consignes</B> : un seul champ suffit, <FONT COLOR='red'>_</FONT> remplace UN caractère et  &nbsp;<FONT COLOR='red'>%</FONT> en remplace plusieurs<BR>Cliquez sur le petit livre pour plus d'information.<BR><A HREF=\"#\" onClick=\"script_aide('aide_chercher.html');\"><IMG SRC=\"aide_icone.gif\" WIDTH=\"21\" HEIGHT=\"21\" BORDER=\"0\" ALT=\"AIDE\"></A></CENTER>";	//message d'accueil
}
?>
