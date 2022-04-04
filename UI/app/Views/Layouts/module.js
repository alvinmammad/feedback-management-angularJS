var app;
app = angular.module("APIModule", ["ngRoute"])

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    $routeProvider
    .when("/feedbackdetail/:id", {
        templateUrl: "../Feedback/feedbackDetail.html",
        controller: "feedbackDetailController",
      })
    .when("/feedbacklist", {
        templateUrl: "../Feedback/feedbackList.html",
        controller: "feedbackListController",
      })
    
})