import * as pg from "../../lib.pool";
import { Modeul } from "../../../../models/modeul.model";
import { Agency } from "../../../../models/agency.model";
import { Car } from "../../../../models/car.model";
import { Store } from "../../../../models/store.model";
import { Part } from "../../../../models/part.module";

export const getDashboardCounts = async (user) => {
  var stat = {
    models: 0,
    part: 0,
    car: 0,
    agency: 0,
    stores: 0,
  };
  var models = await getModelsCount();
  var parts = await getPartCount(user);
  var cars = await getCarsCount(user);

  stat.part = parts[0].count;
  stat.car = cars[0].count;
  stat.models = models[0].count;

  if (user.isAdmin) {
    var agency = await getAgencyCount();
    var stores = await getStoreCount();
    stat.agency = agency[0].count;
    stat.stores = stores[0].count;
  }

  return stat;
};

const getModelsCount = async () => {
  let query = `SELECT COUNT(*) FROM public."model"`;
  return (await pg.db.query<Modeul>(query)).rows;
};

const getCarsCount = async (user) => {
  if (user.hasStore) {
    return [{ count: 0 }];
  }
  var agencyId = false;
  if (user.hasAgency) {
    agencyId = user.agencyId;
  }

  var queryValues: any[] = [];
  var query = `SELECT COUNT(*) FROM public."car"`;
  if (agencyId) {
    query += " WHERE " + '"agency_id"=$1';
    queryValues.push(agencyId);
    query += ";";

    console.log(query);
    return (await pg.db.query<Car>(query, queryValues)).rows;
  }

  console.log(query);
  return (await pg.db.query<Car>(query)).rows;
};

const getAgencyCount = async () => {
  let query = `SELECT COUNT(*) FROM public."agency"`;
  return (await pg.db.query<Agency>(query)).rows;
};

const getStoreCount = async () => {
  let query = `SELECT COUNT(*) FROM public."store"`;
  return (await pg.db.query<Store>(query)).rows;
};

const getPartCount = async (user) => {
  if (user.hasAgency) {
    return [
      {
        count: "0",
      },
    ];
  }
  var storeId = false;
  if (user.hasStore) {
    storeId = user.storeId;
  }

  var queryValues: any[] = [];
  let query = `SELECT COUNT(*) FROM public."part"`;
  if (storeId) {
    query += " WHERE " + '"store_id"=$1';
    queryValues.push(storeId);
    query += ";";
    console.log(query);
    return (await pg.db.query<Part>(query, queryValues)).rows;
  }

  console.log(query);
  return (await pg.db.query<Part>(query)).rows;
};
