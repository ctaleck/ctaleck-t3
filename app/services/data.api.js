'use strict';

angular.module('myApp.data', [
])

.service('data', function() {
    var storage = [];
    var load = function() {
        if (this.storage.length !== 0) {
            return this.storage.pop();
        } else {
            throw 'No data to load.';
        }
    };
    var save = function(data) {
        console.log('storage',this.storage);
        this.storage.push(data);
    };
    return {
        storage: storage,
        load: load,
        save: save
    }
});