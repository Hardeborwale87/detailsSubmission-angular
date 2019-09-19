var newProj = angular.module("detailsCheck", []);
newProj.controller("checkDetails", function($scope){
	$scope.deptArray =  ["Software", "Hardware", "Graphics"
							// {department: "Software"},
							// {department: "Hardware"},
							// {department: "Graphics"}
						];

	// var myObj;
	$scope.submitMe = function () 
	{
		$scope.submission = {matric: $scope.matric, level: $scope.level, dept: $scope.deptSelect};
			
		std = localStorage.getItem("details");
		if (!std) {
			dlt = [];
			dlt.push($scope.submission);
			dlt = JSON.stringify(dlt);
			localStorage.setItem("details", dlt);
		}

		else{
			nDlt = JSON.parse(localStorage.getItem("details"));
			nDlt.push($scope.submission);
			nDlt = JSON.stringify(nDlt);
			localStorage.setItem("details", nDlt);
		}
		con = JSON.parse(localStorage.getItem("details"));
		console.log(localStorage.details);

			
	}

	


		$scope.myObj = localStorage.getItem("details");
		$scope.bringOut = JSON.parse($scope.myObj);

	
	

})