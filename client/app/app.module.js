(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
         'ui.router'
        ,'ngAnimate'
        ,'ngAria'
        ,'ngMessages'

        // 3rd Party Modules
        ,'oc.lazyLoad'
        ,'ngMaterial'
        ,'duScroll'

        ,'app.layout'
        ,'app.i18n'

        ,'app.chart'
        ,'app.api-affiliate'

        // App
        
    ]);

})();
