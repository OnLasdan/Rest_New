import jwt from 'jsonwebtoken'
const authenticateToken = async (req, res, next) => {
  const token = req.cookies.Authorization

  if (!token) {
    return res
      .status(401)
      .json({ error: 'Unauthorized: Missing access token.' })
  }

  try {
    const decoded = jwt.verify(token, 'Konbanwa')
    req.user = decoded
    next()
  } catch (error) {
    res.status(403).json({ error: 'Forbidden: Invalid access token.' })
  }
}

export default authenticateToken
