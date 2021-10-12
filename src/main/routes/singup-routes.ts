import { Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { adaptRoute } from '../adpters/express-route-adapter'

export default (router: Router): any => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
