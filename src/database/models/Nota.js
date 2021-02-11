const { DataTypes } = require("sequelize");
module.exports = (sequelize, dataTypes) => {
    let alias = "Nota";
    let cols = {
                    id: {
                        autoIncrement: true,
                        primaryKey: true,
                        type: DataTypes.INTEGER 
                    },
                    titulo: {
                        allowNull: false,
                        type: DataTypes.STRING
                    },
                    texto: {
                        allowNull: false,
                        type: DataTypes.STRING
                    }
                };
    let config = {
        tableName: "notas",
        timestamps: true,  
        underscored: true,
        paranoid: true
    }

    let Nota = sequelize.define(alias, cols, config);
    
    return Nota;

}

  