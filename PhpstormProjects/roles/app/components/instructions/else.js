/**
 * Created by s on 20.02.17.
 */
(function(angular) {
    'use strict';
    angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', function($scope) {
        $scope.else = [
            {	"else"	:	"	Технические вопросы	"	,	"id"	:	"	else_tech	"	,	"url"	:	"	else/tech	"	,	}	,
            {	"else"	:	"	Механика проекта	"	,	"id"	:	"	else_HowToWork	"	,	"url"	:	"	else/HowToWork	"	,	}	,
            {	"else"	:	"	Проверка заданий	"	,	"id"	:	"	else_tasks	"	,	"url"	:	"	else/tasks	"	,	}	,
            {	"else"	:	"	Вопросы оплат	"	,	"id"	:	"	else_pay	"	,	"url"	:	"	else/pay	"	,	}	,
            {	"else"	:	"	Не проектные вопросы - вопросы не касающиеся работы приложения и программы WinClub Expert	"	,	"id"	:	"	else_nonProject	"	,	"url"	:	"	else/nonProject	"	,	}
        ];
    });
})(window.angular);

/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */

