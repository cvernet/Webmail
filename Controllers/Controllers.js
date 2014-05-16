//
// Gestion des controlleurs
//

//
// Gestion de la navigation 
//
var webmail = angular.module("webmail", ['ui.tinymce']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/Inbox', {templateUrl: 'Views/Inbox.html',   controller: 'Inbox'}).
      when('/Mail', {templateUrl: 'Views/Mail.html', controller: 'Mail'}).      
      when('/NewMail', {templateUrl: 'Views/NewMail.html', controller: 'NewMail'}).      
      when('/Sent', {templateUrl: 'Views/Sent.html', controller: 'Sent'}).                  
      when('/Trash', {templateUrl: 'Views/Trash.html', controller: 'Trash'}).                  
      when('/Help', {templateUrl: 'Views/Help.html', controller: 'Help'}).                  
      when('/Settings', {templateUrl: 'Views/Settings.html',   controller: 'Settings'}).
      otherwise({templateUrl: 'Views/Inbox.html', controller: 'Inbox'});
}]);

//
//Inbox
//
webmail.controller('Inbox',
function ($scope, $http, $routeParams) {
  $scope.mails = [
  {"from": "Sandra","to": "Cyril","subject": "Tonight","date": "16/05/2014"},
  {"from": "Alex","to": "Cyril2","subject": "Webmail","date": "17/05/2014"},
  {"from": "Guillaume","to": "Cyril","subject": "News","date": "18/05/2014"}
  
  ];                                   
});

//
//Mail
//
webmail.controller('Mail',
function ($scope, $http, $routeParams) {
   $scope.from = "exped@gmail.com";
   $scope.to = "cvernet@gmail.com, matefia@gmail.com";
   $scope.subject = "The best idea !";
   $scope.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis.";
                        
});

//
//NewMail
//
webmail.controller('NewMail',
function ($scope, $http, $routeParams) {          
  		if (tinyMCE.activeEditor) {
			tinyMCE.activeEditor.setContent("");
		}
    
	$scope.optionsTinyMce = {
		language: "fr_FR",
		statusbar: false,
		menubar: false
	};
                                     
});

//
//Sent
//
webmail.controller('Sent',
function ($scope, $http, $routeParams) {
                                     
});

//
//Trash
//
webmail.controller('Trash',
function ($scope, $http, $routeParams) {
                                     
});

//
//Help
//
webmail.controller('Help',
function ($scope, $http, $routeParams) {
                                     
});

//
//Settings
//
webmail.controller('Settings',
function ($scope, $http, $routeParams) {
                                     
});