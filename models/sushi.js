module.exports = function(sequelize, DataTypes) {
  var Eatsushi = sequelize.define("Eatsushi", {
    sushi_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    } 
  });
  return Eatsushi;
};