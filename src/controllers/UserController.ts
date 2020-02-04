import User from '../schemas/User';

class UserController {
  public async index(_, res): Promise<Response> {
    const users = User.find();
    return res.json(users);
  }

  public async store(req, res): Promise<Response> {
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
