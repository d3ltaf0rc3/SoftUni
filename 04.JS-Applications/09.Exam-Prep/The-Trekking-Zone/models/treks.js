export default {
    create(data) {
        return firebase.firestore().collection('treks').add(data);
    },
    getAll(){
        return firebase.firestore().collection('treks').get();
    },
    get(id) {
        return firebase.firestore().collection('treks').doc(id).get();
    },
    delete(id){
        return firebase.firestore().collection('treks').doc(id).delete();
    },
    put(id, data) {
        return firebase.firestore().collection('treks').doc(id).update(data);
    }
};