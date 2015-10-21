(function() {
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){
        this.product = gems;
    });

    var gems= [
    {
        name: 'Dodecahedron',
        price: 2,
        description: 'Lorem ipsum bacon eatum',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Lorem ipsum bacon eatum',
        canPurchase: true,
        soldOut: false,
    }
];
})();
