import notifications from "./../../../assets/JsonData/notification.json";

const handleMessage = (message, index) => {
  let newArray = [];
  const newMessage = message;
  newMessage.slice(newMessage.length - index, newMessage.length).map((item) => {
    let messageItem = notifications.find(
      (statusItem) => item.status === statusItem.status
    );
    const messageObject = {
      icon: messageItem.icon,
      title: item.title,
      content: messageItem.content,
      time: item.time,
    };
    newArray.push(messageObject);
    return newArray;
  });
  return newArray.reverse();
};
export default handleMessage;
