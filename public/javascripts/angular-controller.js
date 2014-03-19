var campaignApp = angular.module('ngApp', []);

campaignApp.controller('ngController', function ($scope) {
	$scope.campaigns = [
		{
			"id":01,
			"start_date":"14 Feb 2014",
			"end_date":"14 Feb 2014",
			"hotline_number":"8014222222",
			"lat":40.461776,
			"lng":-111.786565,
			"campaign_name": "Wendy",
			"missing_people": [
				{
					"first_name":"Wendy",
					"middle_name":"",
					"last_name":"Darling",
					"nickname":"Wendy",
					"missing_date":"14 Feb 2014",
					"found_date":"14 Feb 2014",
					"notes":"abducted in the middle of the night through a window."
				}
			],
			"200thumbnail": "/images/campaignImages/wendy.jpg"
		},
		{
			"id":02,
			"start_date":"8 Feb 2014",
			"end_date":"",
			"hotline_number":"8014222222",
			"lat":40.350706, 
			"lng":-111.743806,
			"campaign_name": "Hansel and Gretel",
			"missing_people": [
				{
					"first_name":"Hansel",
					"middle_name":"",
					"last_name":"",
					"nickname":"",
					"missing_date":"8 Feb 2014",
					"found_date":"",
					"notes":"lost in the woods with her sister"
				},
				{
					"first_name":"Gretel",
					"middle_name":"",
					"last_name":"",
					"nickname":"",
					"missing_date":"8 Feb 2014",
					"found_date":"",
					"notes":"lost in the woods with her brother"
				}
			],
			"200thumbnail": "/images/campaignImages/hanselandgretel.jpg"
		},
		{
			"id":03,
			"start_date":"1 March 2014",
			"end_date":"",
			"hotline_number":"8014222222",
			"lat":40.223344, 
			"lng":-111.668832,
			"campaign_name": "Belle",
			"missing_people": [
				{
					"first_name":"Belle",
					"middle_name":"",
					"last_name":"",
					"nickname":"",
					"missing_date":"8 Feb 2014",
					"found_date":"",
					"notes":"potentially being held captive by a beast"
				}
			],
			"200thumbnail": "/images/campaignImages/belle.jpg"
		}
	]

	$scope.message = {
		"enMessage":"",
		"esMessage":"",
		"alsoSpanish":false
	}

	$scope.campaign = {
		"id":01,
		"start_date":"14 Feb 2014",
		"end_date":"14 Feb 2014",
		"hotline_number":"8014222222",
		"lat":40.461776,
		"lng":-111.786565,
		"missing_people": [
			{
				"first_name":"Wendy",
				"middle_name":"",
				"last_name":"Darling",
				"nickname":"Wendy",
				"missing_date":"14 Feb 2014",
				"found_date":"14 Feb 2014",
				"notes":"abducted in the middle of the night through a window."
			}
		],
		"images": [
			{
				"image": "/images/campaignImages/wendy.jpg",
				"width": 200,
				"height": 200,
				"200thumbnail": "/images/campaignImages/wendy.jpg"
			}
		]
	}
});