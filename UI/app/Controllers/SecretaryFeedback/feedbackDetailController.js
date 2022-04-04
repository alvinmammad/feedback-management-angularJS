app.controller(
  "feedbackDetailController",
  function ($scope, SecretaryFeedbackService, $routeParams) {
   
    getByID($routeParams.id);

    function getByID(id) {
        var a = 14;
        console.log(a);
      var servCall = SecretaryFeedbackService.getByID(id);
      servCall.then(function (res) {
        $scope.feedback = res.data;
        console.log(res.data);
        angular.forEach(res, function (response) {
            console.log(response);
          if (response.feedback == null) {
            if (response.userFeedback.feedback.feedbackStatus == 0) {
              $scope.statusAZ = "Gözləmədə";
              $scope.color = "badge-light";
            }
            if (response.userFeedback.feedback.feedbackStatus == 1) {
              $scope.statusAZ = "Ləğv edilib";
              $scope.color = "badge-light-danger";
            }
            if (response.userFeedback.feedback.feedbackStatus == 2) {
              $scope.statusAZ = "Təsdiq edilib";
              $scope.color = "badge-light-success";
            }
            if (response.userFeedback.feedback.feedbackStatus == 3) {
              $scope.statusAZ = "Yoxlanışdadır";
              $scope.color = "badge-light-warning";
            }
          } else if (response.userFeedback == null) {
            if (response.feedback.feedbackStatus == 0) {
              $scope.statusAZ = "Gözləmədə";
              $scope.color = "badge-light";
            }
            if (response.feedback.feedbackStatus == 1) {
              $scope.statusAZ = "Ləğv edilib";
              $scope.color = "badge-light-danger";
            }
            if (response.feedback.feedbackStatus == 2) {
              $scope.statusAZ = "Təsdiq edilib";
              $scope.color = "badge-light-success";
            }
            if (response.feedback.feedbackStatus == 3) {
              $scope.statusAZ = "Yoxlanışdadır";
              $scope.color = "badge-light-warning";
            }
          }

          if (response.feedback == null) {
            $scope.dataID = response.userFeedback.feedback.id;
            $scope.fullName =
              response.userFeedback.feedback.customerName +
              " " +
              response.userFeedback.feedback.customerSurname;
            $scope.email = response.userFeedback.feedback.customerEmail;
            $scope.creationDate = response.userFeedback.feedback.createdDate;
            $scope.desc = response.userFeedback.feedback.feedbackDesc;
            // if (response.userFeedback.secretaryNote != null) {
            //   $scope.departmentName =
            //     response.userFeedback.feedback.feedbackCategory.department.depName;
            //   $scope.text = "HR feedbacki";
            //   $scope.note = response.userFeedback.hrNote;
            // }
            // if (response.userFeedback.hrNote != null) {
            //   $scope.note = response.userFeedback.secretaryNote;
            //   $scope.text = "Geri feedback-iniz";
            // }
          } else if (response.userFeedback == null) {
            $scope.dataID = response.feedback.id;
            $scope.fullName =
              response.feedback.customerName +
              " " +
              response.feedback.customerSurname;
            $scope.email = response.feedback.customerEmail;
            $scope.creationDate = response.feedback.createdDate;
            $scope.desc = response.feedback.feedbackDesc;
          }
        });
      })
      .catch(function (err){
          console.log(err);
          throw err;
      })
    }
  }
);
