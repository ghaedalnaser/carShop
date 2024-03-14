import { Router } from "express";

import {
  postCar,
  getByCar,
  getCarsCount,
  getByCarP,
  filterCars,
} from "./function.car";

export const carRoute: Router = Router();

carRoute.route("/cars/count").get(getCarsCount);
carRoute.route("/car/:key?/:value?").get(getByCar);
carRoute.route("/care/:key?/:value?").get(getByCarP);
carRoute.route("/car/").post(postCar);
carRoute.route("/car/filter").post(filterCars);
