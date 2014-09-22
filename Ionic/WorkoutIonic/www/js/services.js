angular.module('services', [])
.factory('WorkoutData', function(){
  return window.WORKOUT;
})
.factory('Storage', function(){
    var _storage = window.localStorage;
    return {
        get: function(key){
            var _item = _storage.getItem(key);
            if (!_item) {
                return [];
            }
            return JSON.parse(_item);
        },
        set: function(key, value){
            _storage.removeItem(key);
            _storage.setItem(key, JSON.stringify(value));
        }
    };
})
.filter('escape', function() {
  return window.escape;
});
