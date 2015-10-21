(function() {
    var app = angular.module('store', [ ]);
    app.controller('StoreController', function(){
        this.poduct = gem;
    });

    var gem= {
        name: 'Dodecahedron',
        price: 2.95,
        description: '...',
    }
})();