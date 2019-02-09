import { authenticate } from '../middleware/passport'
import crypto from 'crypto';

export const auth = (req, res, next) => {
  authenticate()
  console.log("AUTHENTICATE", authenticate)

  const { username, password } = req.body
//   function (req, res) {
//     console.log('HERE ***************************************', req.body)
//     res.redirect('/')
//   }
    console.log('here **********************')


  const key = crypto.scryptSync(password, "bigbuddies", 64);
  const cipher = crypto.createCipheriv('aes192', key, null);
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  console.log("ENCRYPTED", encrypted)

  return res.status(200).json({ user: "Bob's Your Uncle" })
  // ).catch(next)
}