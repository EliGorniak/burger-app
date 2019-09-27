module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("burgers", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Burgers;
};
