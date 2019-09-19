module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://room1001:read@1234@customer-m4foc.mongodb.net/test?retryWrites=true&w=majority',
    MONGODB_LOCAL_URL: process.env.MONGODB_LOCAL_URL || 'mongodb://localhost:27017/customer',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1'
}