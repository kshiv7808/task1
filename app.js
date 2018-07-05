var app = angular.module("myApp",[]);

app.controller("myCtrl" , function($scope , $http)
{
    $http.get("app.json").then(function(item)
    {
        $scope.players = item.data;
    })
     $scope.addUsers = () =>{
        $scope.players.push({
           name: $scope.newName,
             id : $scope.newId,
             photo : $scope.newPhoto,
             runs : $scope.newRuns
         });
     }
     $scope.remove = (player) =>{
         let removeUser = $scope.players.indexOf(player);
         $scope.players.splice(removeUser,1); 
     }
});