module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || '',
    MONGODB_LOCAL_URL: process.env.MONGODB_LOCAL_URL || 'mongodb://localhost:27017/customer',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1'
}
