var campaignApp = angular.module('campaignApp', []);

campaignApp.controller('campaignListCtrl', function ($scope) {
	$scope.campaigns = [
		{
			"campaignID": "01",
			"name": "Wendy Darling",
			"missingSince": "14 Jan 2014",
			"image": "/images/campaignImages/wendy.jpg"
		},
		{
			"campaignID": "02",
			"name": "Hansel and Gretel",
			"missingSince": "8 Feb 2014",
			"image": "/images/campaignImages/hanselandgretel.jpg"
		},
		{
			"campaignID": "03",
			"name": "Belle",
			"missingSince": "1 March 2014",
			"image": "/images/campaignImages/belle.jpg"
		}
	]
});

var messageApp = angular.module('messageApp', []);

messageApp.controller('messageCtrl', function ($scope) {
	$scope.message = {
		"enMessage":"",
		"spMessage":"",
		"alsoSpanish":false
	}
});