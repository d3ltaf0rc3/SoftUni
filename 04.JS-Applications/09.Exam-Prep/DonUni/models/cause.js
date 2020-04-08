export default {
    createCause(data) {
        return firebase.firestore().collection("causes").add({
            ...data,
            collectedFunds: 0,
            donors: [],
            uid: localStorage.getItem("uID")
        });
    },
    getAll() {
        return firebase.firestore().collection("causes").get();
    },
    get(id) {
        return firebase.firestore().collection("causes").doc(id).get();
    },
    delete(id) {
        return firebase.firestore().collection("causes").doc(id).delete();
    },
    donate(id, data) {
        return firebase.firestore().collection("causes").doc(id).set(data);
    }
};