angular.module("msForm.controllers", ['ngCordova'])

.factory('Authorization', function() {

    authorization = {};
    authorization.firstname = '';
    authorization.lastname = '';
    authorization.password = '';
    authorization.phone = '';
    authorization.email = '';

    authorization.degree = '';
    authorization.dob = '';
    authorization.sex = '';
    authorization.address = '';
    return authorization;
})

.factory("LS", function($localStorage) {
    return {
        setFormData: function(val) {
            alert()
        },
        setData: function(val) {
            alert(" ls set data");
            $localStorage.values = val;
            console.log("values" + $localStorage.values.firstname + $localStorage.values.lastname);
            return this;
        },
        getData: function() {
            alert("get adata called");
            return $localStorage.values;
        }
    }
})

.controller('login', function($scope, $state, $localStorage, Authorization) {
    $scope.formdetails = {};
    // $scope.formdetails = Authorization; 
    $scope.formdetails = Authorization;

    $scope.loginSubmit = function() {
        $localStorage.name = $scope.formdetails.firstname;
        $localStorage.password = $scope.formdetails.password;
        alert("first name " + $scope.formdetails.firstname + "password" + $scope.formdetails.password);
    }
})

.controller('personal', function($scope, $state, Authorization, $localStorage) {
    $scope.personalDetails = Authorization;
    console.log($localStorage.name + "localstorage name");
    console.log($localStorage.password + "localstorage name");

    $scope.personalFormSubmit = function() {
        //$localStorage.localmessage="hai";  
    }
})

.controller('educational', function($scope, $state, Authorization, LS) {
    var taskdata = 'tasks';
    $scope.eduDetails = Authorization;
    $scope.formSubmit = function() {
        //$scope.localStorage= Authorization;
        //console.log("task variable",taskdata);
        //localStorageService.set(taskdata,$scope.formSubmit);
        $scope.formdata = Authorization;

        LS.setData($scope.formdata);

        alert("submit button pressed" + $scope.eduDetails.degree);
        $state.go('signin');
    }
})




.controller('welcomectrl', function($scope, $localStorage, Authorization, $sessionStorage) {
    $scope.formdetails = Authorization;

})

.controller('signin', function($scope, LS, $state, $ionicPopup) {

    $scope.details = LS.getData();
    $scope.data = {};
    console.log($scope.details.firstname + $scope.details.lastname);
    console.log($scope.details.password);
    $scope.login = function() {
        console.log($scope.data.username);


        if ($scope.details.firstname == $scope.data.username && $scope.details.password == $scope.data.password) {
            //alert("value matches");

            var alert = $ionicPopup.alert({



                template: 'Login success'

            });

            alert.then(function(res) {


            });

            $state.go('contactspage');
        } else
            var erroralert = $ionicPopup.alert({



                template: 'invalid username or password'

            });

       
    }


})

.controller('contactslist', function($scope,$cordovaContacts,$ionicPlatform) {
     alert("contacts list controllers");
	$scope.getAllContacts = function() {
		
		var options={};
		options.multiple=true,
    $cordovaContacts.find(options).then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
      $scope.contacts = allContacts;
    });
  };

	

});

