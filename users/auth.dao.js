const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    create: async function (data) {
            const user = new this(data);
            const savedUser = await user.save().then(function (models) {
            console.log(models);
            return models;
          }).catch(function (err) {
            console.log(err);
            if(err.code === 11000){
              return 'El usuario ya existe';
            } else {
              return 'Error del servidor';
            }
          });
            return savedUser;

    },
    login: function (query){
        this.find(query).then(function (models) {
            console.log(models);
          })
          .catch(function (err) {
            console.log(err);
          });
    },

    edit: async function (userId, updatedData) {
        try {
            const updatedUser  = await this.findByIdAndUpdate(userId, updatedData, { new: true });
            if (!updatedUser ) {
                return 'Usuario no encontrado';
            }
            console.log(updatedUser );
            return updatedUser ;
        } catch (err) {
            console.log(err);
            return 'Error del servidor';
        }
    },

    delete: async function (userId) {
        try {
            const deletedUser  = await this.findByIdAndDelete(userId);
            if (!deletedUser ) {
                return 'Usuario no encontrado';
            }
            console.log(deletedUser );
            return {message: 'Usuario eliminado exitosamente!' ,deletedUser};
        } catch (err) {
            console.log(err);
            return 'Error del servidor';
        }
    }
};

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;