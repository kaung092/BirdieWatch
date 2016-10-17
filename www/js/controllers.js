angular.module('app.controllers', [])
  
.controller('tallySheetCtrl', function ($scope,$state, $stateParams,$ionicPopup, APIService,utilService) {

	$scope.showDelete = false;
	$scope.startTime = utilService.getTime();
	$scope.totalCount = utilService.getTotalCount();
	$scope.instruction = "Your list is empty. Start adding birds to count now!";
	$scope.chosenSpecies = [];

	if($stateParams.params!=null){
		var params = $stateParams.params;
		if(APIService.addChosenSpecies(params)==false){
			APIService.alreadyAdded(params.species,$ionicPopup);
		}
		$scope.chosenSpecies = APIService.getChosenSpecies();
	}
	else{
		$scope.chosenSpecies = [];
	}
	$scope.removeChosenSpecies = function(index){
		$scope.totalCount -= $scope.chosenSpecies[index].count;
		utilService.setTotalCount($scope.totalCount);
		$scope.chosenSpecies.splice(index, 1);
	}

	$scope.submit = function() {
		var endTime = utilService.getTime();
		APIService.confirm($state,$ionicPopup,$scope.startTime,endTime,$scope.totalCount);
	};
	$scope.quitReport = function() {
		APIService.quitReport($ionicPopup,$state);
	};
	$scope.increment = function(item){
			item.count++; utilService.setTotalCount(++$scope.totalCount);
	}
	$scope.decrement = function(item){
			if(item.count>0){ item.count--; utilService.setTotalCount(--$scope.totalCount); }
	}
})

.controller('addSpeciesCtrl', function ($scope,$state, $stateParams, APIService) {
	$scope.species = [];
	APIService.getSpecies().then(function(response){
		$scope.species = response.data;
	});
	$scope.goTally = function(item){
		$state.go('menu.tallySheet', {params: item});
	}

})
   
.controller('reportCtrl', function ($scope, $state,$stateParams,reportService) {
	
	if($stateParams.params!=null){
		var params = $stateParams.params;
		console.log('have params: ' + params);
		reportService.addReport(params);
	}

	$scope.reports = reportService.getReports();
	$scope.onSwipeRight = function () {
	 	$state.go('menu.tallySheet');
  	}

})
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 