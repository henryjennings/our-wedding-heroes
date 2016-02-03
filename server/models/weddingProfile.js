const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestForDaySchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

const WeddingProfileSchema = new Schema({
    cover: {
        title: { type: String, required: true },
        imageUrl: { type: String, required: true },
    },
    aboutUs: { type: String, required: true },
    aboutOurDay: { type: String, required: true },
    aboutOurHoneymoon: { type: String, required: true },
    requestsForTheDay: [requestForDaySchema],
    honeymoonGiftList: {
        content: { type: String, required: true },
        showOfflinePaymentMessage: { type: Boolean, required: true },
        offlinePaymentMessage: { type: String },
        showDisclaimerMessage: { type: Boolean, required: true },
        disclaimerMessage: { type: String },
    },
});

module.exports = mongoose.model('WeddingProfile', WeddingProfileSchema);
