<html>
<head>
<title>PyrElève</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<!-- Logiciel développé par pierre.dangauthier@ensimag.imag.fr pour Pyramide Informatique -->
<script language="javascript">
	function script_aide(fich){	// ouvre une fenetre d'aide remplie par le texte contenu dans le fichier "fich"
		fen_aide=window.open(fich,"fen_aide","toolbar=no,location=no,status=no,scrollbars=auto,resizable=yes,width=500,height=500,left=100,top=20");
	}
</script>
</head>

<body bgcolor="#FFFFFF" link="#0000FF" vlink="#0000FF">
<table width="100%" border="0" height="100%">
  <tr>

<!-- Debut de la pseudo frame du menu -->
    <td valign="top" width="20%" bgcolor="#BFBFFF">
		<P>&nbsp;<P>
      <p align="center"><font color="#171186"><CENTER><H2><B>Menu</B></H2></CENTER></font></p>
	  <P>&nbsp;<P>
      <p align="center"><A HREF="index.php3?to=afficher">Toutes les fiches</A></p>
      <p align="center"><A HREF="index.php3?to=ajouter">Ajout</A></p>
      <p align="center"><A HREF="index.php3?to=chercher">Recherche</A></p>
      <p align="center"><A HREF="index.php3?to=aide">Aide</A></p>
	  <CENTER>
		<applet code="lake" width="80" height="140">
			<param name="image" value="petit_logo.jpg"> 
			<param name="href" value="http://pyrinfo.com"> 
		</applet>
	  </CENTER>
    </td>

<!-- Début du cadre principal en pseudo frame -->
    <td valign="top" width="83%">
	<?
	if ($to==afficher) {
		require 'afficher.php';		// Ces 7 cas sur le contenu de $to auraient pu etre mis en une seule ligne de code
	}								// if (to != "") { require $to.".php"; }
	elseif ($to==ajouter) {			// else { message d'accueil }
		require 'ajouter.php';		// mais c'est plus clair ainsi (bien qu'un peu moins performant)
	}
	elseif ($to==chercher) {
		require 'chercher.php';
	}
	elseif ($to==aide) {
		require 'aide.php';
	}
	elseif ($to==afficher_fiche) {
		require 'afficher_fiche.php';
	}
	elseif ($to==modifier_fiche) {
		require 'modifier_fiche.php';
	}
	elseif ($to==supprimer_fiche) {
		require 'supprimer_fiche.php';
	}
	else {	//message d'accueil ($to est vide)
		?>
			<P>&nbsp;<P>&nbsp;<P>
			<CENTER><H1><FONT COLOR="#4242FF"><B>Bienvenue sur PyrElève.</B></FONT></H1><BR>
			<H3>Gestion de base de donnée éditée pour <A HREF="http://pyrinfo.com">Pyramide Informatique</A></H3>
			<P>&nbsp;<P>
			<APPLET CODE="PoolMenu" WIDTH="230" HEIGHT="177">
					<param name=image value="grand_logo.jpg">
					<param name=href value="http://pyrinfo.com">
			</APPLET><P>
			<PRE>Faites votre choix dans le menu de gauche.</PRE></CENTER>
	<?
	}
	?>
	</td>
  </tr>
</table>
</body>
</html>
