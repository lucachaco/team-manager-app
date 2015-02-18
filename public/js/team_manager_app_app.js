'use strict';
var teamManagerAppApp = angular.module('teamManagerAppApp',[]);
teamManagerAppApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/team_manager_app/index', {templateUrl: '/team_manager_app/views/index', activeTab: 'Team managerApp', controller: 'IndexCtrl'});
}]).run(['NavBarService', function(NavBarService) {
// Register the main nav item, if any
//    NavBarService.register({
//        label: 'Team managerApp',
//        url: '/team_manager_app/index',
//        order: 100,
//        showIf: function(CoreCompanyService, CoreUserService) {
//            return true;
//        },
//        subNav: [
//            {label: "Tab One", url: "/team_manager_app/tabone"},
//            {label: "Tab Two", url: "/team_manager_app/tabtwo"}
//        ]
//    });

}]);