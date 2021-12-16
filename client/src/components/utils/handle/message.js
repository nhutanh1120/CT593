import notifications from "./../../../assets/JsonData/notification.json";

const handleMessage = (message, index) => {
  let newArray = [];
  const newMessage = message;
  let start = 0;
  let end = newMessage.length;
  if (newMessage.length > index) {
    start = newMessage.length - index;
  }
  newMessage.slice(start, end).map((item) => {
    let messageItem = notifications.find(
      (statusItem) => item.status === statusItem.status
    );
    const messageObject = {
      icon: messageItem?.icon || "",
      title: item.title,
      content: messageItem?.content || "",
      time: item.time,
    };
    newArray.push(messageObject);
    return newArray;
  });
  return newArray.reverse();
};
export default handleMessage;
