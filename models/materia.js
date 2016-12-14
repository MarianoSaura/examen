// Definicion del modelo de materia

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Materia',
		{
		nombre: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "-> Falta el nombre de la materia"}}
		},
	});
}
