module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define('Teacher', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'teachers',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    Teacher.associate = function (models) {
        Teacher.hasMany(models.Course, {
            foreignKey: {
                name: 'teacher_id',
                allowNull: false
            },
            as: 'courses'
        })
    }

    return Teacher
}
