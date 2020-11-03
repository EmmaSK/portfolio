const Sequelize = require("sequelize");
const db = require("./database.js");

module.exports = db.define("entry", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "",
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { notEmpty: true },
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],

    get() {
      const arr = this.getDataValue("tags");

      return arr ? arr.join(", ") : [];
    },
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});
