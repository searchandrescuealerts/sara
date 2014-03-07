var campaignApp = angular.module('campaignApp', []);

campaignApp.controller('campaignListCtrl', function ($scope) {
	$scope.campaigns = [
		{
			"campaignID": "1",
			"name": "Wendy Darling",
			"missingSince": "14 Jan 2014",
			"image": "/images/campaignImages/wendy.jpg"
		},
		{
			"campaignID": "2",
			"name": "Hansel and Gretel",
			"missingSince": "8 Feb 2014",
			"image": "/images/campaignImages/hanselandgretel.jpg"
		},
		{
			"campaignID": "3",
			"name": "Belle",
			"missingSince": "1 March 2014",
			"image": "/images/campaignImages/belle.jpg"
		}
	]
})