const mongoose = require('mongoose');
const authSchema = require('./lessons.model');

authSchema.statics = {
    create: async function (data) {
            const Lesson = new this(data);
            const savedLesson = await Lesson.save().then(function (models) {
            console.log(models);
            return models;
          }).catch(function (err) {
            console.log(err);
              return 'Error del servidor';
          });
            return savedLesson;

    },

    edit: async function (LessonId, updatedData) {
        try {
            const updatedLesson  = await this.findByIdAndUpdate(LessonId, updatedData, { new: true });
            if (!updatedLesson ) {
                return 'Lección no encontrada';
            }
            console.log(updatedLesson );
            return updatedLesson ;
        } catch (err) {
            console.log(err);
            return 'Error del servidor';
        }
    },

    delete: async function (userId) {
        try {
            const deletedUser  = await this.findByIdAndDelete(userId);
            if (!deletedUser ) {
                return 'Lección no encontrada';
            }
            console.log(deletedUser );
            return {message: 'Lección eliminada exitosamente!' ,deletedUser};
        } catch (err) {
            console.log(err);
            return 'Error del servidor';
        }
    }
};

const LessonsModel = mongoose.model('Lessons', authSchema);
module.exports = LessonsModel;