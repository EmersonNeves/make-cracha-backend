import { Request, Response } from "express";
import * as Yup from 'yup';
import { getRepository } from "typeorm";
import UsersViews from "../views/Users.view";
import User from "../models/User";


export default {
  async create(request: Request, response: Response) {
    const {
      code,
      firstName,
      lastName,
      occupation
    } = request.body;

    const usersRepository = getRepository(User);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      code,
      firstName,
      lastName,
      occupation,
      images,
    };

    const schema = Yup.object().shape({
      code: Yup.string().required(),
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      occupation: Yup.string().required(),
      images: Yup.array(Yup.object().shape({
        path: Yup.string().required()
      }))
    })

    await schema.validate(data, {
      abortEarly: false,
    })

    const user = usersRepository.create(data);

    await usersRepository.save(user);

    return response.status(201).json(user);
  },

  async index(request: Request, response: Response) {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find({
      relations: ["images"],
    });

    return response.json(UsersViews.renderMany(users));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(UsersViews.render(user));
  },
};
