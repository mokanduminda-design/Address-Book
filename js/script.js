// Constructor
function PlaceManager() {
    this.places = {};  
    this.currentId = 0; 
};

// Id generator
PlaceManager.prototype.assignId = function() {
    this.currentId++;
    return this.currentId;
};

// Add the places to object
PlaceManager.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[id] = place;
};

// Remove task
PlaceManager.prototype.deletePlace = function(id) {
    if (this.places[id]) { 
        delete this.places[id];
        return true; 
    } 
    return false;
    };

