var species = {
	cat    : "img/cat.jpg",
	bear   : "img/bear.jpg",
	fish   : "img/fish.jpg"
};
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	function main(){
		$(".ui.button").click(function() {
			var type = this.getAttribute("data-animal");

			if (type == "cat") {
				var chat = species['cat'];
				$("#holder").html('<img src="' + chat +'"/>');
			} else if (type == "bear") {
				var ours = species['bear'];
				$("#holder").html('<img src="' + ours +'"/>');
			} else {
				var poisson = species['fish'];
				$("#holder").html('<img src="' + poisson +'"/>');
			}
		});
	}

	$(document).ready(function(){
		main();
	});

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
