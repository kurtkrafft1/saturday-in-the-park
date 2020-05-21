const remoteUrl = "http://localhost:8000/"

export default{
    getAllAttractions() {
        return fetch(`${remoteUrl}attractions`).then(r=> r.json())
    },
    getAllAttractionsByArea(param){
        return fetch(`${remoteUrl}attractions?area=${param}`).then(r=>r.json())
    },
    getAreas(){
        return fetch(`${remoteUrl}parkareas`).then(r=>r.json())
    },
    getItinerary(id){
        return fetch(`${remoteUrl}itineraries`).then(r=>r.json())
    },
    registerUser(obj){
        return fetch(`${remoteUrl}register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r=> r.json())
    },
    loginUser(obj){
        return fetch(`${remoteUrl}login/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r=> r.json())
    },
    logoutUser(){

        fetch(`${remoteUrl}logout/`).then(r=> {
            r.json()
        })
    }
}