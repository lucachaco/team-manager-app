'use strict';
teamManagerAppApp.controller('teamIndexCtrl', ['$scope', 'CoreCommon', 'CoreUserService', 'CoreGridDefinition', 'OutputViewModelService', 'OutputMgrService', function ($scope, CoreCommon, CoreUserService, CoreGridDefinition, OutputViewModelService, OutputMgrService) {
    /*$scope.name = 'World2';
     alert(JSON.stringify(CoreUserService.getCurrent()));*/

    $scope.viewModel = [];
    $scope.coreGridConfig = {};

    $scope.hasPermissions = false;

    var _hasPermissions = $scope.hasPermissions;
    var outputsCoreGridConfigData = {
        dataItemIdProperty: '_id',
        sortable: {
            enabled: true,
            field: 'name',
            descending: false
        },
        actionButtons: [
            {
                name: 'Delete',
                hasPermissions: _hasPermissions,
                isDisabled: $scope.isButtonDisabled,
                callback: $scope.showDeleteDialog
            },
            {
                name: 'Show Link',
                hasPermissions: true,
                isDisabled: $scope.isButtonDisabled,
                callback: $scope.showLinkDialog
            },
            {
                name: 'Edit',
                hasPermissions: _hasPermissions,
                isDisabled: $scope.isButtonDisabled,
                callback: $scope.showEditWizard
            },
            {
                name: 'Moderate',
                hasPermissions: true,
                isDisabled: $scope.isButtonDisabled,
                callback: $scope.showModerateWizard
            }
        ],
        columnDefinitions: [
            {
                name: 'TYPE',
                dataKey: 'type',
                options: {
                    class: 'collectionType',
                    sortable: true,
                    searchable: true
                }
            },
            {
                name: 'NAME',
                dataKey: 'name',
                options: {
                    class: 'collectionTitle',
                    sortable: true,
                    searchable: true,
                    clickable: true,
                    onClick: $scope.redirectToNameClickFlow
                }
            },
            {
                name: 'STATUS',
                dataKey: 'status',
                options: {
                    defaultValue: 'live',
                    class: 'collectionStatus',
                    sortable: true,
                    searchable: true
                }
            },
            {
                name: 'CREATED BY',
                dataKey: 'createdBy',
                options: {
                    class: 'collectionCreator',
                    sortable: true,
                    searchable: true
                }
            }
        ],
        selectable: {
            singleSelect: true,
            enabled: true,
            selected: []
        }
    };

    $scope.coreGridConfig = CoreGridDefinition.build(outputsCoreGridConfigData);

    OutputMgrService.getOutputs().then(function (outputs) {
        $scope.viewModel = OutputViewModelService.getViewModel(outputs);
    });

}])


