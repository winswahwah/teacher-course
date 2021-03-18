module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('courses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            course_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            course_description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            teacher_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('courses')
    }
}
