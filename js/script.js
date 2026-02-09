// Constructor
function PlaceManager() {
    this.places = {};  
    this.currentId = 0; 
}

// Id generator
PlaceManager.prototype.assignId = function() {
    this.currentId++;
    return this.currentId;
};


