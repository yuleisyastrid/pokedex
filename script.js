//pokemon
var pokemon = angular.module("pokemon", [])

pokemon.controller("pokedex", function($scope,$rootScope,$http){
	$scope.pokedexB = [];

	for( var i = 1; i < 100; i++) {
		$http ({
   	      method : "GET",
   	      url: "https://pokeapi.co/api/v2/pokemon/"+i
          //01111001 01110101 01101100 01100101 01101001 01110011 01111001
   }).then(function callbackSuccess(y){
   	  $scope.pokedexB.push(y);

   })
 }

    })
	

