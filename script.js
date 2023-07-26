let enseignants =[
	{nom:'ALY',id:'100'},
	{nom:'BAILA',id:'101'},
	{nom:'Ndoye',id:'102'},
	{nom:'Mbaye',id:'103'},
	{nom:'Djiby',id:'104'},
	{nom:'Seckouba',id:'105'}
	]



let classes = [
{nom:'Dev_Data',nbre_eleve:20},
{nom:'Dev_Web',nbre_eleve:60},
{nom:'Ref_Dig',nbre_eleve:60},
{nom:'Hackeuse',nbre_eleve:40},
{nom:'AWS',nbre_eleve:30}
]



let modules = [
	{nom:'Python'},
	{nom:'Javascript'},
	{nom:'C'},
	{nom:'HTML'},
	{nom:'CSS'},
	{nom:'PHP'},
	{nom:'JAVA'},
	{nom:'photoshop'},
	{nom:'illustrator'}
]

let salles = [
	{nom:'hampaté Ba',capacite_salle:60},
	{nom:'Rose Dieng Kuntz',capacite_salle:20},
	{nom:'cheikh anta Diop',capacite_salle:30},
	{nom:'Amadou Matar Mbao',capacite_salle:60},
	]


let heure = [
{nom: '8H'},
{nom:'9H'},
{nom:'10H'},
{nom:'11H'},
{nom:'12H'},
{nom:'13H'},
{nom:'14H'},
{nom:'15H'},
{nom:'16H'},
{nom:'17H'},

]

let les_infos = [   
	
	{id_enseignant :enseignants[0].id,classe :classes[1].nom,module :modules[1].nom,salle :salles[0].nom,date_debut :10,date_fin :12,jour: "LUNDI"},
	{id_enseignant :enseignants[0].id,classe :classes[1].nom,module :modules[5].nom,salle :salles[0].nom,date_debut :13,date_fin :17,jour: "VENDREDI"},
	{id_enseignant :enseignants[3].id,classe :classes[0].nom,module :modules[0].nom,salle :salles[1].nom,date_debut :8,date_fin :10,jour: "MARDI"},
	{id_enseignant :enseignants[3].id,classe :classes[0].nom,module :modules[3].nom,salle :salles[1].nom,date_debut :10,date_fin :12,jour: "SAMEDI"},
	{id_enseignant :enseignants[4].id,classe :classes[2].nom,module :modules[7].nom,salle :salles[3].nom,date_debut :8,date_fin :12,jour: "LUNDI"},
	{id_enseignant :enseignants[4].id,classe :classes[2].nom,module :modules[8].nom,salle :salles[3].nom,date_debut :13,date_fin :15,jour: "MERCREDI"},
	
]



const ajouter_in_select_enseign =  function (liste_dicts){
	const input_select = document.getElementById("listes_element");
	input_select.innerHTML = ""
	liste_dicts.forEach(element =>{
		const option = document.createElement("option");
			option.text = element.nom;
			option.setAttribute('value',element.id)
				input_select.append(option);
	})
		
}

	
const ajouter_in_select =  function (liste_dicts){
	const input_select = document.getElementById("listes_element");
	input_select.innerHTML = ""
	liste_dicts.forEach(element =>{
		const option = document.createElement("option");
			option.text = element.nom;
			option.setAttribute('value',element.nom)
				input_select.append(option);
	})
		
}


const ajouter_in_select_jour =  function (liste_dicts,id_select){
	id_select.innerHTML = ""
	liste_dicts.forEach(element =>{
		const option = document.createElement("option");
			option.text = element.nom;
			option.setAttribute('value',element.nom)
				id_select.append(option);
	})
		
}


// je recupere les jours  
let jours = document.querySelectorAll("#div_noir span");
jours.forEach(elemnt =>{
	/*console.log("retard",elemnt.textContent)*/
	elemnt.addEventListener("clcolorier_moduleick",function(){
		
	})
})

	
// recuperer les heures
let les_heures = document.querySelectorAll("#les_heures div");
les_heures.forEach(elemnt =>{
	/*console.log(elemnt.textContent);*/
})



const vider_planning = function(){

	const liste_div = document.querySelectorAll("#div_gris");
	liste_div.forEach(element=>{

		element.innerHTML = ""	
	})

} 


const colorier_module = function(un_objet,div_duree_cours){


		if(un_objet.module === "Python")
		{
			div_duree_cours.style.backgroundColor ="Orange";
		}
		else if(un_objet.module === "Javascript"){

			div_duree_cours.style.backgroundColor ="Green";

		}
		else if(un_objet.module === "photoshop"){

			div_duree_cours.style.backgroundColor ="Gold";
			
		}
		else if(un_objet.module === "illustrator"){

			div_duree_cours.style.backgroundColor ="Lavender";
			
		}
		else if(un_objet.module === "C"){
			
			div_duree_cours.style.backgroundColor ="Bronze";
		}
		else if(un_objet.module === "JAVA"){
			
			div_duree_cours.style.backgroundColor ="Blue";
		}
		else if(un_objet.module === "HTML"){
			
			div_duree_cours.style.backgroundColor ="Yellow";
		}
		else if(un_objet.module === "CSS"){
			
			div_duree_cours.style.backgroundColor ="Brown";
		}
		else if(un_objet.module === "PHP"){
			
			div_duree_cours.style.backgroundColor ="Pink";
		}

}

const generer_duree_cours = function(){

	/*générer des cours  pour les enseignants*/

		const enseign = document.getElementById('enseignant');
		const les_jours = document.querySelectorAll("#div_gris");

		enseign.addEventListener('click',function(){
			const the_options = document.querySelectorAll("#listes_element");

			the_options.forEach(el =>{

						el.addEventListener('change',function(){
							vider_planning()

		/*const cours_enseign = les_infos.filter(un_objet => un_objet.id_enseignant === el.value)*/
						const cours_enseign = les_infos.filter(un_objet =>{

							if(un_objet.id_enseignant === el.value){

								let duree = un_objet.date_fin - un_objet.date_debut;
								let marg_left = un_objet.date_debut - 8;
								
								les_jours.forEach(elemnt =>{

								if(elemnt.className === un_objet.jour){
									
									const div_duree_cours = document.createElement("div");
									div_duree_cours.style.width = duree*92.2+"px";
									div_duree_cours.style.height = "100px";
									div_duree_cours.style.marginLeft = `${marg_left*92.2}px`;
									div_duree_cours.style.position = "absolute"
									div_duree_cours.style.borderRadius = "20px"
									const div_texte = document.createElement('div');
									
									div_texte.innerHTML = un_objet.classe+'<br>'+un_objet.module+'<br>'+un_objet.salle
									div_texte.style.marginLeft = '40px';
									div_texte.style.marginTop = '20px';

									div_duree_cours.append(div_texte);
									div_duree_cours.style.color ='white';
									
									colorier_module(un_objet,div_duree_cours);

									elemnt.append(div_duree_cours);
								}
							})

							return un_objet	
							}
							
							
						})
						

					})
			
			});

		})

	/*générer des cours  pour les salles*/	

	const salle = document.getElementById("salle");	
	salle.addEventListener('click',function(){
		const the_options = document.querySelectorAll("#listes_element");
		the_options.forEach(el =>{
			
				el.addEventListener('change',function(){

					vider_planning()

					const the_option_salles = les_infos.filter(un_objet =>{
						
						if(un_objet.salle === el.value){

							let duree = un_objet.date_fin - un_objet.date_debut;
							let marg_left = un_objet.date_debut - 8;
							
							les_jours.forEach(elemnt =>{

								if(elemnt.className === un_objet.jour){
									
									
									const div_duree_cours = document.createElement("div");
									div_duree_cours.style.width = duree*92.2+"px";
									div_duree_cours.style.height = "100px";
									div_duree_cours.style.marginLeft = `${marg_left*92.2}px`;
									div_duree_cours.style.position = "absolute"

									const div_texte = document.createElement('div');
									
									div_texte.innerHTML = un_objet.classe+'<br>'+un_objet.id_enseignant+'<br>'+un_objet.module
									div_texte.style.marginLeft = '40px';
									div_texte.style.marginTop = '20px';

									div_duree_cours.append(div_texte);
									div_duree_cours.style.color ='white';

									colorier_module(un_objet,div_duree_cours);
									div_duree_cours.style.borderRadius = "20px"
									elemnt.append(div_duree_cours);
								}
							})


							return un_objet
							
						}
						
					})
						
				})

		})
	})		

	/*générer des cours  pour les classes*/	
	const classe = document.getElementById("classe");
	classe.addEventListener('click',function(){
		const the_options = document.querySelectorAll("#listes_element");
		the_options.forEach(el =>{
			
				el.addEventListener('change',function(){

					vider_planning()

					const the_option_classes = les_infos.filter(un_objet =>{
						
						if(un_objet.classe === el.value){

							let duree = un_objet.date_fin - un_objet.date_debut;
							let marg_left = un_objet.date_debut - 8;
							
							les_jours.forEach(elemnt =>{

								if(elemnt.className === un_objet.jour){
									
									
									const div_duree_cours = document.createElement("div");
									div_duree_cours.style.width = duree*92.2+"px";
									div_duree_cours.style.height = "100px";
									div_duree_cours.style.marginLeft = `${marg_left*92.2}px`;
									div_duree_cours.style.position = "absolute"

									const div_texte = document.createElement('div');
									
									div_texte.innerHTML = un_objet.id_enseignant+'<br>'+un_objet.module+'<br>'+un_objet.salle
									div_texte.style.marginLeft = '40px';
									div_texte.style.marginTop = '20px';

									div_duree_cours.append(div_texte);
									div_duree_cours.style.color ='white'; 
									colorier_module(un_objet,div_duree_cours);
									div_duree_cours.style.borderRadius = "20px"
									elemnt.append(div_duree_cours);
								}
							})


							return un_objet
							
						}
						
					})
						
				})

		})
	})		

		/*générer des cours  pour les modules*/	
	const modul = document.getElementById("module");
	modul.addEventListener('click',function(){
		const the_options = document.querySelectorAll("#listes_element");
		the_options.forEach(el =>{
			
				el.addEventListener('change',function(){

					vider_planning()

					const the_option_salles = les_infos.filter(un_objet =>{
						
						if(un_objet.module === el.value){

							let duree = un_objet.date_fin - un_objet.date_debut;
							let marg_left = un_objet.date_debut - 8;
							
							les_jours.forEach(elemnt =>{

								if(elemnt.className === un_objet.jour){
									
									
									const div_duree_cours = document.createElement("div");
									div_duree_cours.style.width = duree*92.2+"px";
									div_duree_cours.style.height = "100px";
									div_duree_cours.style.marginLeft = `${marg_left*92.2}px`;
									div_duree_cours.style.position = "absolute";

									const div_texte = document.createElement('div');
									
									div_texte.innerHTML = un_objet.classe+'<br>'+un_objet.id_enseignant+'<br>'+un_objet.salle
									div_texte.style.marginLeft = '40px';
									div_texte.style.marginTop = '20px';

									div_duree_cours.append(div_texte);
									div_duree_cours.style.color ='white'; 


									colorier_module(un_objet,div_duree_cours);
									div_duree_cours.style.borderRadius = "20px"
									elemnt.append(div_duree_cours);
								}
							})


							return un_objet
							
						}
						
					})
						
				})

		})
	})		


}// fin de la fonction generer cours

const formulaire = document.querySelector(".contener_formulaire");
const ajouter_dans_lundi = document.getElementById("ajouter_dans_lundi");

const select_module = document.getElementById('select_module');
const select_enseignant = document.getElementById("select_enseignant");
const select_salle = document.getElementById('select_salle');
const select_heureDebut = document.getElementById("select_heureDebut");
const select_heureFin = document.getElementById("select_heureFin");





function charger_the_selecte(){

	ajouter_in_select_jour(modules,select_module);
			formulaire.style.display = 'block';
			ajouter_in_select_jour(enseignants,select_enseignant);
			ajouter_in_select_jour(salles,select_salle);
			ajouter_in_select_jour(heure,select_heureDebut);
			ajouter_in_select_jour(heure,select_heureFin);
}


let val_modulee = select_module.value;
let val_enseignant = select_enseignant.value;
let val_salle = select_salle.value;
let val_heure_debut = select_heureDebut.value;
let val_heure_fin = select_heureFin.value;

ajouter_dans_lundi.addEventListener('click',function(){
	
	charger_the_selecte();	
	

	select_module.addEventListener('change',function(){

		val_modulee = select_module.value;
		
	})	

	select_enseignant.addEventListener('change',function(){

		val_enseignant = select_enseignant.value;
		
	})

	select_salle.addEventListener('change',function(){

		val_salle = select_salle.value;
		
	})

	select_heureDebut.addEventListener('change',function(){

		val_heure_debut = select_heureDebut.value;
		
	})
	select_heureFin.addEventListener('change',function(){

		val_heure_fin = select_heureFin.value;
		
	})
	

		
})
const boutton_ajouter = document.getElementById('boutton_ajouter');
boutton_ajouter.addEventListener('click',function(){
	console.log("vous avez cliquer")
})


const liste_btn = document.querySelectorAll('#les_bouttons button');

    liste_btn.forEach (element =>{
    	element.addEventListener('click',function(){

    		if(element.id == 'enseignant'){
    			element.style.backgroundColor = "blue";
    			ajouter_in_select_enseign(enseignants);
    	
        	}
        	else if(element.id == 'salle'){
        		element.style.backgroundColor = "green";
    			ajouter_in_select(salles);	
	    	
        	}
        	else if(element.id == 'module'){
        		element.style.backgroundColor = "red";
    			ajouter_in_select(modules);	
	    	
        	}
        	else if(element.id == 'classe'){
        		element.style.backgroundColor = "orange";
    			ajouter_in_select(classes);	
	    	
        	}
    	})
    });

generer_duree_cours()
 