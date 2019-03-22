var nom = new Vue({
	el: '.name',
	data : {
		database,
		idd : database[0].Prenom + " " + database[0].Nom 
	}
});
var nom = new Vue({
	el: '.name2',
	data : {
		database,
		idd : database[0].Prenom + " " + database[0].Nom 
	}
});
var nom = new Vue({
	el: '.name3',
	data : {
		database,
		idd : database[0].Prenom + " " + database[0].Nom 
	}
});
var age = new Vue({
	el: '.age',
	data : {
		database,
		ddn : database[0].Ddn
	}
});
var adresse = new Vue({
	el: '.adresse',
	data : {
		database,
		adresse : database[0].Adresse
	}
});
var presentation = new Vue({
	el: '#presentation',
	data : {
		database,
		infos : database[0].infos
	}
});
var Telephone = new Vue({
	el: '.Telephone',
	data : {
		database,
		tel : database[0].Telephone
	}
});
var Telephone = new Vue({
	el: '.TelephoneF',
	data : {
		database,
		telF : database[0].TelephoneFixe
	}
});
var Mail = new Vue({
	el: '.Mail',
	data : {
		database,
		mail : database[0].Mail
	}
});

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
