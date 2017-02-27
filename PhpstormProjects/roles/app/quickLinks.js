/**
 * Created by s on 20.02.17.
 */
(function(angular) {
    'use strict';
    angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', function($scope) {
        $scope.quicklinks = [
            {	"quicklink"	:	"	Ведомости	"	,	"id"	:	"	quicklinks_sheets	"	,	"url"	:	"	quicklinks/sheets	"	,	}	,
            {	"quicklink"	:	"	Коммуникация по проектам	"	,	"id"	:	"	quicklinks_responsibility	"	,	"url"	:	"	quicklinks/responsibility	"	,	}	,
            {	"quicklink"	:	"	Бот координации	"	,	"id"	:	"	quicklinks_bot	"	,	"url"	:	"	quicklinks/bot	"	,	}
        ];
    });
})(window.angular);

/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */

