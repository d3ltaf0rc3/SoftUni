export default {
    create(data) {
        return firebase.firestore().collection('articles').add(data);
    },
    getAll(){
        return firebase.firestore().collection('articles').get();
    },
    get(id) {
        return firebase.firestore().collection('articles').doc(id).get();
    },
    delete(id){
        return firebase.firestore().collection('articles').doc(id).delete();
    },
    put(id, data) {
        return firebase.firestore().collection('articles').doc(id).update(data);
    }
};