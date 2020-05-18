const remoteUrl = "http://localhost:5000/"

export default{
    getAllAttractions() {
        return fetch(`${remoteUrl}attractions?_expand=area`).then(r=> r.json())
    },
    getItinerary(id){
        return fetch(`${remoteUrl}itinerary?customerId=${id}&_expand=attraction`).then(r=>r.json())
    }
}