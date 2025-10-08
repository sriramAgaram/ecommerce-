const qe = require('qeasy');

exports.connectsDb = () => {
    qe.connectDB({
        host: 'localhost',
        password: 'welcome123',
        user: 'root',
        database: 'ecommerce'
    })

    qe.checkConnection();
}

