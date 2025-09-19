const qe = require('qeasy');

exports.connectsDb = () => {
    qe.connectDB({
        host: 'localhost',
        password: 'root',
        user: 'root',
        database: 'ecommerce'
    })

    qe.checkConnection();
}

