var loginApp;
loginApp = angular.module("LoginModule", ["ngRoute","ngStorage","toaster"])

loginApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    // when("/login",{
    //   templateUrl:"../Login/login.html",
    //   controller:"loginController"
    // })  
})