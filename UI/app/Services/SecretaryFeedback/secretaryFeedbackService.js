var secretaryFeedbackService = function ($http) {
  var baseURL = "http://localhost:34860/api/secretary/";
  //Get all feedbacks :
  this.getAll = function () {
    return $http.get(baseURL + "feedbacklist").then(function (res) {
      return res.data;
    });
  };
//   Get feedback by ID :
  this.getByID = function (id) {
    return $http.get(baseURL + "feedbacks/" + id).then(function (res) {
      return res;
    });
  };
};

app.service("SecretaryFeedbackService", secretaryFeedbackService);
