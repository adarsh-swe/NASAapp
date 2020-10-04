const firebase = require("firebase");
const algo = require("./algo").builder;

firebase.initializeApp({
  apiKey: "AIzaSyDV3uwm6YzCVit0Bn4FEfN5Ko0Z81XPF24",
  authDomain: "nasahack-18440.firebaseapp.com",
  databaseURL: "https://nasahack-18440.firebaseio.com",
  projectId: "nasahack-18440",
  storageBucket: "nasahack-18440.appspot.com",
  messagingSenderId: "730880143922",
  appId: "1:730880143922:web:7a6ad465a5a6d7da16822b",
  measurementId: "G-P4CS0BFPRG",
});

export const db = firebase.firestore();
export const auth = firebase.auth();

export const update = (events, food) => {
  const schedule = algo(events, food);
  const date = new Date();

  const arr = [];
  schedule.forEach((x) => {
    arr.push({
      day: x[0],
      startTime: x[1],
      endTime: x[2],
      taskName: x[3],
    });
  });
  db.collection("users")
    .doc(auth.currentUser.uid)
    .set({
      schedule: arr,
      date: date.toDateString(),
    })
    .then(() => {
      console.log("added successfully");
      console.log(arr);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const days_required_to_enter = () => {
  db.collection("users")
    .doc(auth.currentUser.uid)
    .get()
    .then((res) => {
      let { schedule, date } = res.data();
      const prev = new Date(date);
      const obj = new Date();
      const today = new Date(obj.toDateString());
      const diff = (today.getTime() - prev.getTime()) / 86400000;

      var i = 0;
      for (; i < schedule.length; i++) {
        if (schedule[i][0] == diff) {
          break;
        }
      }

      schedule = schedule.slice(i);
      schedule.forEach((x) => {
        x[0] -= 1;
      });

      return {
        next_n_days_to_ask: 3 - diff,
        events: schedule,
      };
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default days_required_to_enter;
