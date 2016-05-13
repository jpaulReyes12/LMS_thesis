describe('Testing angularjs suite', function() {

  beforeEach(module('lmsApp'));

  describe('Testing angularjs controller', function(){

    it('should initialize the title of the scope', function(){

      // module('lmsApp');

      var scope= {};
      var ctrl;

        inject(function($controller){
          ctrl = $controller('signupCtrl', {$scope: scope})
        });

        expect(scope.greeting).toBeDefined();
        expect(scope.greeting).toBe('Hola!');
    })

  })
});
