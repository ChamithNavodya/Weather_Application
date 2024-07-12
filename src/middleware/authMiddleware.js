import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
   console.log(req.headers["authorization"]);

   const authHeader = req.headers["authorization"];
   const token = authHeader && authHeader.split(" ")[1];
   if (!token) return res.status(401).send("Access denied");

   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).send("Invalid token");
      req.user = user;
      next();
   });
};

export default authenticateToken;
