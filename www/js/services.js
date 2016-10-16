angular.module('app.services', [])

.factory('APIService', function($http){
	var species = [];
	var chosenSpecies = [];

	return{
		getChosenSpecies: function(){
			return chosenSpecies;
		},
		addChosenSpecies: function(newItem){
			if(!chosenSpecies.includes(newItem)){
				newItem.count = 0;
				chosenSpecies.push(newItem);
				return true;
			}
			return false;

		},
		getSpecies: function(){
			return $http.get("http://www.kaunghtet.net/species.php").then(function(response){
				species = response;
				return species;
			});
		}
	}
})


.service('BlankService', [function(){

}]);