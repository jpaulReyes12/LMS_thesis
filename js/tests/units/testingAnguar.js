describe('Testing angularjs', function() {
  describe('Testing angular controller', function(){

    it('should initialize the title of the scope', function(){
      module('testing angular app');

      var scope= {};
      var ctrl;

        inject(function($controller){
          ctrl = $controller('testingAngularCtrl', {$scope: scope})
        });

        expect(scope.title).toBeDefind();
        expect(scope.title).toBe();
    })

  })
});
