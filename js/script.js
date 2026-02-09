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

PlaceManager.prototype.addPlace = function(place) {
    const id = this.assignId();   
    place.id = id;                
    this.places[id] = place;      
};

PlaceManager.prototype.getPlace = function(id) {
    return this.places[id];
};


// Remove task
PlaceManager.prototype.deletePlace = function(id) {
    if (this.places[id]) { 
        delete this.places[id];
        return true; 
    } 
    return false;
    };

  function Place(location, timeOfYear, landmarks, notes) {
    this.location = location;
    this.timeOfYear = timeOfYear;
    this.landmarks = landmarks.split(",")
    this.notes = notes;
    this.id = null   // Given by generator
}

// UI & DOM manipulationm
const myPlaces = new PlaceManager();

// DOM Elements
const listEl = document.getElementById(`placesList`)

// HANDLER: Add Button Click
   function handleAddPlace() {

    const locIn = document.getElementById("location");
    const timeIn = document.getElementById("timeOfYear");
    const landIn = document.getElementById("landmarks");
    const notesIn = document.getElementById("notes");

    // 1. Create Object
    const newPlace = new Place(
        locIn.value,
        timeIn.value,
        landIn.value,
        notesIn.value
    );

    // 2. Store Data
    myPlaces.addPlace(newPlace);

    // 3. Update UI
    renderPlaces();

    // 4. Reset Inputs
    locIn.value = "";
    timeIn.value = "";
    landIn.value = "";
    notesIn.value = "";
}

function handleDeletePlace(id) {

    if (confirm("Delete this place?")) {
        myPlaces.deletePlace(id);
        renderPlaces();
    }
}