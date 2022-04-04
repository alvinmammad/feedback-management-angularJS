loginApp.controller(
  "loginController",
  function ($scope, LoginService,toaster, $routeParams) {
    $scope.signIn = function () {
      LoginService.signIn($scope.userName, $scope.password).then(function (
        res
      ) {
        toaster.success("info")
        console.log(res)
        if (res === true) {
          alert('fff')
          console.log(res);
        } else {
          $scope.error = "Error";
        }
      });
    };
    // signIn();
  }
);
