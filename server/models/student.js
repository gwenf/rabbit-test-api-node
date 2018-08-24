module.exports = function studentModel(sequelize, DataTypes) {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    honor_roll: DataTypes.BOOLEAN
  });

  return Student;
};

