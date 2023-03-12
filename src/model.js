export const botData = [
  {
    id: 1,
    key: "hello",
    text: "Hi I'm sparco how may I help you ?",
    time: getTime(),
    isSender: false,
  },
  {
    id: 2,
    key: "good morning",
    text: "Hi I'm sparco how may I help you ?",
    time: getTime(),
    isSender: false,
  },
  {
    id: 3,
    key: "fee",
    text: "okay John the fee at cost: \n Children: 2000frs\n Adult: 5000frs\n Family: 10000frs\n",
    time: getTime(),
    isSender: false,
  },
  {
    id: 4,
    key: "location",
    text: "At flic en flac. Do you wish to have a map ?",
    time: getTime(),
    isSender: false,
  },
  {
    id: 5,
    key: "activities",
    text: "We have the following activities: \n Basketball \n50m swimming pool Lawn\n tennis pitch \nSoccer pitch standard \nand a 6 aside pitch",
    time: getTime(),
    isSender: false,
  },
  {
    id: 6,
    key: "default",
    text: "Please how can you help you ?",
    time: getTime(),
    isSender: false,
  },
];

function getTime() {
  return new Date().toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
}
