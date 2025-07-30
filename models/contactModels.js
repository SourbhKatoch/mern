import mongoose from 'mongoose';

const contactSchema =  mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please add a name']
    },
    email : {
        type: String,
        required: [true, 'Please add an email']
    },
    phone : {
        type: String,
        required: [true, 'Please add a phone number']
    }
}, {
    timestamps: true
}); 

export default mongoose.model('Contact', contactSchema);
