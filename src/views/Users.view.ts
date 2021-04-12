import { Code } from "typeorm";
import User from "../models/User";
import ImagesView from "./Images.view";

export default {
  render(user: User) {
    return {
      id: user.id,
      code: user.code,
      firstName: user.firstName,
      lastName: user.lastName,
      occupation: user.occupation,
      images: ImagesView.renderMany(user.images),
    };
  },

  renderMany(users: User[]){
     return users.map(user => this.render(user))
  }
};
