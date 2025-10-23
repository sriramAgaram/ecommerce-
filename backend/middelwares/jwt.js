const jwt = require('jsonwebtoken');
const {findById} = require('qeasy');
const env = require('dotenv').config()


const authenticateJWT = async (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication token required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify token and decode payload
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    // Fetch user from database to include additional user data in payload
    const user = await findById('auth','auth_id',`${decoded.userId}`);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user data to request object for use in routes
    req.user = {
      userId: decoded.userId,
      email: decoded.email,
    };

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: 'Token expired' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid token' });
    }
    console.error('JWT verification error:', error);
    return res.status(500).json({ message: 'Server error during authentication', error : error.message });
  }
};

module.exports = { authenticateJWT };