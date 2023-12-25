//**/{Practice Problame = 2.1} */

const nameIs = (a) => {
  let friendList = [];
  for (const name of a) {
    if (name.length % 2 == 0) {
      friendList.push(name);
    }
  }
  return friendList;
};

const friends = [
  "masud",
  "eshak",
  "jobair",
  "raqib",
  "sifat",
  "habib",
  "tahmid",
  "jamaluddin",
  "raisulIslam",
  "akib",
  "sajib",
  "sagorAhmed",
];
const resultFriendList = nameIs(friends);
console.log(resultFriendList);
