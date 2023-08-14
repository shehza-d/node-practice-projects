const friends = [
  "Okasha",
  "Sufiyan",
  "Saad",
  "Zain",
  "Rehan",
  "Anas Ali Abbasi",
  "Namat",
];

friends.sort();

const msgForFriends = [
  "Think before you trust",
  "lets help each other grow",
  "You help me more then i expect",
  "you have to work very very hard",
  "stay strong better day are comming",
  "You are like big brother to me",
  "don't give up",
];

for (let i = 0; i < friends.length; i++) {
  console.log(`${friends[i]} this message is for you "${msgForFriends[i]}"`);
}
