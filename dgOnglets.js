/** 
 * Gestion d'onglets développée par Dany GUERINEAU
 * Github : https://github.com/danyboy85/dgOnglets
 * 
 * Usage :
 * - Prérequis : JQuery (projet dgOnglets développé sous la v1.9.1)
 * - Dans le fichier HTML, importer dgOnglets.js et dgOnglets.css
 * - Démo :
 * <!-- Un <div> conteneur pour gérer le menu, contenant des liens <a> avec un paramètre tabId faisant référence au <div> de contenu de l'onglet -->
 * <div class="dg_tab_menu">
 * 	   <a href="#" tabId="tab1" class="active">Menu de l'onglet 1</a>
	   <a href="#" tabId="tab2">Menu de l'onglet 2</a>				
 * </div>
 * <!-- Un <div> conteneur pour chaque contenu d'onglet -->
 * <div class="dg_tab_container">			
 *     <div id="tab1">
 *         Contenu de l'onglet 1
 *     </div>
 *     <div id="tab2">
 *         Contenu de l'onglet 2
 *     </div>
 * </div>
 */

/**
 * Initialisation des onglets lorsque JQuery est "prêt"
 */
$().ready(function() {
	dg_setLinksEvents();
	dg_addFictifDivWithMargin();
});

/**
 * Initialisation des événements du menu
 * Initialisation du style de l'onglet actif
 */
function dg_setLinksEvents() {
	
	$("div.dg_tab_menu > a:not(.active)").off("click").on("click", function() {
		dg_switchTabMenu($(this));
		dg_switchTab($(this).tabId);
		dg_setLinksEvents();
	});

	var idTabActive = $("div.dg_tab_menu > a.active").attr("tabId");
	$("#"+idTabActive).addClass("active");
	
}

/**
 * Fonction permettant de désactiver le menu d'onglet actif, et de rendre actif le menu d'onglet passé en paramètre
 * @param elmt onglet à activer
 */
function dg_switchTabMenu(elmt) {
	
	$("div.dg_tab_menu > a.active").removeClass("active");					
	elmt.addClass("active");
	
}

/**
 * Fonction permettant de désactiver (masquer) le contenu d'onglet actif, et de rendre actif (afficher) le contenu d'onglet passé en paramètre
 * @param tabId
 */
function dg_switchTab(tabId) {
	
	$("div.dg_tab_container > div.active").removeClass("active");
	$("#"+tabId).addClass("active");
	
}

/**
 * Fonction permettant d'ajouter un div "fictif" à la suite des menus d'onglets de manière à ce que la bordure (border-bottom) soit prolongée jusqu'à la fin du conteneur
 */
function dg_addFictifDivWithMargin() {
	
	var marginLastDiv = $("div.dg_tab_menu > a").length * 250 + 1; 	
	$("div.dg_tab_menu").append("<div style='margin-left:" + marginLastDiv + "px'>&nbsp;</div>");
	
}
