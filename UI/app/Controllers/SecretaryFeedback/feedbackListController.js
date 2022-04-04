app.controller(
  "feedbackListController",
  function ($scope, SecretaryFeedbackService, $routeParams) {
    
    var feedbackDatas = [
      {
        id: 0,
        feedbackStatus: "Gözləmədə",
        badgeColor : "badge-light",
        textColor: "#cdcdde"
      },
      {
        id: 1,
        feedbackStatus: "Ləğv edilib",
        badgeColor : "badge-light-danger",
        textColor: "#f64e60"
      },
      {
        id: 2,
        feedbackStatus: "Təsdiq edilib",
        badgeColor : "badge-light-success",
        textColor: "#0bb783"
      },
      {
        id: 3,
        feedbackStatus: "Yoxlanışdadır",
        badgeColor : "badge-light-warning",
        textColor: "#ffa800"
      },
    ];

    $scope.getFeedbackStatusDetails = function(id) {
      let item = feedbackDatas.find(x=>x.id==id);
      return item ;
    }

   $scope.getAll =  function () {
      SecretaryFeedbackService.getAll().then(
        function (res) {
          $scope.feedbacks = res;
          console.log(res);
          angular.forEach($scope.feedbacks, function (value,key) {

            var dataa = feedbackDatas.find(x=>x.id==value.feedbackStatus);
            console.log(dataa);
            $scope.statusAZ = dataa.feedbackStatus;
            $scope.textColor = dataa.textColor;
            $scope.color = dataa.badgeColor;
           
          });
        }
      )
      ;
    };
    $scope.getAll();
  }
);
