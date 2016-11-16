# dgOnglets
Gestion basique d'onglets


Gestion d'onglets développée par Dany GUERINEAU
Github : https://github.com/danyboy85/dgOnglets

Usage :
- Prérequis : JQuery (projet dgOnglets développé sous la v1.9.1)
- Dans le fichier HTML, importer dgOnglets.js et dgOnglets.css
- Démo :
<!-- Un <div> conteneur pour gérer le menu, contenant des liens <a> avec un paramètre tabId faisant référence au <div> de contenu de l'onglet -->
<div class="dg_tab_menu">
	<a href="#" tabId="tab1" class="active">Menu de l'onglet 1</a>
	<a href="#" tabId="tab2">Menu de l'onglet 2</a>				
</div>
<!-- Un <div> conteneur pour chaque contenu d'onglet -->
<div class="dg_tab_container">			
    <div id="tab1">
        Contenu de l'onglet 1
    </div>
    <div id="tab2">
        Contenu de l'onglet 2
    </div>
</div>
