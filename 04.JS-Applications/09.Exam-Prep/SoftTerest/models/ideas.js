export default {
    create(data) {
        return firebase.firestore().collection('ideas').add(data);
    },
    getAll(){
        return firebase.firestore().collection('ideas').get();
    },
    get(id) {
        return firebase.firestore().collection('ideas').doc(id).get();
    },
    delete(id){
        return firebase.firestore().collection('ideas').doc(id).delete();
    },
    put(id, data) {
        return firebase.firestore().collection('ideas').doc(id).update(data);
    }
};