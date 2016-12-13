angular.module('app.controllers', [])
  
.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.controller('tallySheetCtrl', function ($scope,$state, $stateParams,$ionicPopup, APIService,utilService) {

	$scope.showDelete = false;
	$scope.startTime = utilService.getTime();
	$scope.instruction = "Your list is empty. Start adding birds to count now!";
	$scope.chosenSpecies = [];

	if($stateParams.params!==null){
		var params = $stateParams.params;
		if(APIService.addChosenSpecies(params)===false){
			APIService.alreadyAdded(params.species,$ionicPopup);
		}
		$scope.chosenSpecies = APIService.getChosenSpecies();
	}
	else{
		$scope.chosenSpecies = [];
		APIService.setTotalCount(0);
		APIService.emptyChosenSpecies();
	}
	$scope.totalCount = APIService.getTotalCount();


	$scope.removeChosenSpecies = function(index){
		$scope.totalCount -= $scope.chosenSpecies[index].count;
		APIService.setTotalCount($scope.totalCount);
		$scope.chosenSpecies.splice(index, 1);
	};

	$scope.submit = function() {
		var endTime = utilService.getTime();
		APIService.confirm($state,$ionicPopup,$scope.startTime,endTime,$scope.totalCount);
	};
	/*
	$scope.quitReport = function() {
		APIService.quitReport($ionicPopup,$state);
	};*/
	$scope.increment = function(item){
			item.count++; APIService.setTotalCount(++$scope.totalCount);
	};
	$scope.decrement = function(item){
			if(item.count>0){ item.count--; APIService.setTotalCount(--$scope.totalCount); }
	};
})

.controller('addSpeciesCtrl', function ($scope,$state, $stateParams, APIService) {
	$scope.species = [];
	APIService.getSpecies().then(function(response){
		$scope.species = response.data;
	});
	$scope.goTally = function(item){
		$state.go('menu.tallySheet', {params: item});
	};

})
   
.controller('reportCtrl', function ($scope, $state,$stateParams,reportService) {
	
	if($stateParams.params!==null){
		var params = $stateParams.params;

		reportService.addReport(params);
	}

	$scope.reports = reportService.getReports();
	$scope.onSwipeRight = function () {
	 	$state.go('menu.tallySheet');
  	};

})


.controller('createAccountCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
	$scope.userInfo = {
		firstName : '',
		lastName : '',
		username : '' ,
		password : ''
	}
	// $scope.createAccount = function(userInfo){

	// 	AuthService.createAccount(userInfo).then(
	// 		function(){

	// 		},
	// 		function(){

	// 		}
	// 	)
	// }

})

.controller('ApplicationController', function ($scope, AuthService) {
	$scope.setCurrentUser = null;
	$scope.isAuthenticated = AuthService.isAuthenticated;

	$scope.setCurrentUser = function(user){
		$scope.currentUer = user;
	}
})

.controller('menuCtrl', function ($scope, AuthService) {

})

.controller('loginCtrl', function ($scope, $state, $rootScope, AUTH_EVENTS, $stateParams,AuthService) {
	$scope.credentials ={
		username: '',
		password: ''
	};
	$scope.loginFailed = false;

	$scope.login = function(credentials){
		AuthService.login(credentials).then(function(user){
			console.log('login success');
			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
			$scope.setCurrentUser(user);
			$scope.loginFailed = false;
			$state.go('menu.tallySheet');
		},function(){
			console.log('login failed');
			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			$scope.loginFailed = true;
		})
	};	
});
 