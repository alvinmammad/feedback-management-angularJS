var loginService = function ($http,$localStorage) {
    var baseURL = "http://localhost:34860/api/auth/";
    //Get all feedbacks :
    this.signIn = function (username,password) {
      return $http.post(baseURL + "signin",{userName:username,password:password})
        .then(function (res) {
           if(res.data.token){
               $localStorage.currentUser = {userName:username,token:res.data.token};
               $http.defaults.headers.common.Authorization = "Bearer" +res.token;
               
           }
           
           else{
           
              
           }
           return res;
      });
    };
  };
  
  loginApp.service("LoginService", loginService);
  