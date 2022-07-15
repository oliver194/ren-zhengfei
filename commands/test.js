module.exports = {
  name: "test",
  description: "test",
  execute(client, message, args, config) {
    message.reply("test");
    message.react("🤩");
  },
};
