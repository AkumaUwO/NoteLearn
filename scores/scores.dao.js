const mongoose = require('mongoose');
const scoresSchema = require('./scores.model');

scoresSchema.statics = {
    create: async function (data) {
            const Form = new this(data);
            const savedForm = await Form.save().then(function (models) {
            console.log(models);
            return models;
          }).catch(function (err) {
            console.log(err);
              return 'Error del servidor';
          });
            return savedForm;

    },

    edit: async function (FormId, updatedData) {
        try {
            const updatedForm  = await this.findByIdAndUpdate(FormId, updatedData, { new: true });
            if (!updatedForm ) {
                return 'Formulario no encontrado';
            }
            console.log(updatedForm);
            return updatedForm ;
        } catch (err) {
            console.log(err);
            return 'Error del servidor';
        }
    },

    delete: async function (FormId) {
        try {
            const deletedForm  = await this.findByIdAndDelete(FormId);
            if (!deletedForm) {
                return 'Formulario no encontrado';
            }
            console.log(deletedForm);
            return {message: 'Formulario eliminado exitosamente!' ,deletedForm};
        } catch (err) {
            console.log(err);
            return 'Error del servidor';
        }
    }
};

const scoresModel = mongoose.model('scores', scoresSchema);
module.exports = scoresModel;