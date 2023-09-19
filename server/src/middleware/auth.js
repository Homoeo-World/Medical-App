import jwt from 'jsonwebtoken'
import dotenv  from "dotenv"

dotenv.config()

const authenticateJWT = (req, res, next) =>  {

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        const tokenParts = token.split(' ');

        if(tokenParts.length!==2 || tokenParts[0]!=='Bearer'){
            return res.status(401).json({message:'Invalid Authorization header format'})
        }

        const jwtToken = tokenParts[1]; 
        console.log('jwtToken'); 
        console.log(jwtToken)

        const payload = jwt.verify(jwtToken, process.env.SECRET_KEY);
        req.user = payload.user; 
        console.log(req.username);
        next();

    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

export default authenticateJWT;