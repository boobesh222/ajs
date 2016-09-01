// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('msForm', ['ionic','msForm.controllers','ngStorage','ui.router','ngMessages','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
   .state('form',{
        url:'/',
        templateUrl:'templates/form.html'
        
      })
     
   .state('form.login',{
        url:'/login',
        templateUrl:'templates/loginDetails.html',
          controller: 'login',
      })

   .state('form.personal',{
        url:'/personal',
        templateUrl:'templates/personalDetails.html',
		 controller: 'personal',
       
      })
   .state('form.educational',{
        url:'/payment',
        templateUrl:'templates/educationalDetails.html',
        controller: 'educational',
      })

	.state('welcome',{
        url:'/welcome',
        templateUrl:'templates/welcomeForm.html',
		controller:'welcomectrl',
       
      })


    .state('signin',{
        url:'/signin',
        templateUrl:'templates/loginForm.html',
    controller:'signin',
       
      })
	  
	.state('contactspage',{
        url:'/contactslist',
        templateUrl:'templates/contactslist.html',
    controller:'contactslist',
       
      })
   $urlRouterProvider.otherwise('/contactslist');

});
