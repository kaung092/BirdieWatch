angular.module('app.controllers', [])
  
.controller('tallySheetCtrl', function ($scope, $stateParams,$ionicPopup, APIService) {
	
	if($stateParams.params!=null){
		var params = $stateParams.params;

		if(APIService.addChosenSpecies(params)==false){
			   	var alertPopup = $ionicPopup.alert({
			    	title: 'Oops!',
			    	template: params.species+' is already added'
			   	});
		}
		$scope.chosenSpecies = APIService.getChosenSpecies();
	}

	$scope.shouldShowDelete = false;




})

.controller('addSpeciesCtrl', function ($scope, $stateParams, APIService) {
	$scope.species = [];

	APIService.getSpecies().then(function(response){
		$scope.species = response.data;
	});


})
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 