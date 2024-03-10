
const dbConfigRef  = require("../../dblogic/dbconfig")
const Sequelize = require("sequelize")

//vuepersodb et vuepersotableref
const VueTableObject = new dbConfigRef.define("vuepersotableref", {
    reservationTimer: {
        type: Sequelize.TIME
    }
});

module.exports = VueTableObject





