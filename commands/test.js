module.exports = {
  name: "test",
  description: "test",
  execute(message, args, config) {
    message.reply("test");
    message.react("🤩");
  },
};
