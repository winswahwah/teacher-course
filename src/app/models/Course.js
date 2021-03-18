module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        course_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course_description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'courses',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    Course.associate = function (models) {
        Course.belongsTo(models.Teacher, {
            foreignKey: {
                name: 'teacher_id',
                allowNull: false
            },
            as: 'teacher'
        })
    }

    return Course
}
