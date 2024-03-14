import { Request, Response, NextFunction, RequestHandler } from 'express';
import { param, body } from 'express-validator';
import * as pg from '../../lib.pool';
import { getDefaultCar, Car } from '../../../../models/car.model';
import { StatusCodes } from 'http-status-codes';
import { generateDeleteQuery, generateInserteQuery, generateUpdateQuery } from '../../lib.sqlUtils';
import * as multer from 'multer';

//get Car
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/car/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }

});

export const getByCar: RequestHandler[] = [
    param('key').optional().isString(),
    param('value').optional(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result: Car[] = [];
            result = await getBy(req.params.key, req.params.value);
            res.status(StatusCodes.OK).json({ code: StatusCodes.OK, data: result, message: 'fetched successfuly' });

        } catch (error) {
            console.error(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ code: StatusCodes.INTERNAL_SERVER_ERROR, data: {}, message: '', error: 'faild' });

        }
    }
];

export const getByCarP: RequestHandler[] = [
    param('key').optional().isString(),
    param('value').optional(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result: Car[] = [];
            result = await getCarByPrice(req.params.key, req.params.value);
            res.status(StatusCodes.OK).json({ code: StatusCodes.OK, data: result, message: 'fetched successfuly' });

        } catch (error) {
            console.error(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ code: StatusCodes.INTERNAL_SERVER_ERROR, data: {}, message: '', error: 'faild' });

        }
    }
];
export const getCarsCount: RequestHandler[] = [

    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result;
            result = await getCount();
            res.status(StatusCodes.OK).json({ code: StatusCodes.OK, data: result, message: 'fetched successfuly' });

        } catch (error) {
            console.error(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ code: StatusCodes.INTERNAL_SERVER_ERROR, data: {}, message: '', error: 'faild' });

        }
    }
];
export const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 1024 } });
//    const uploadMultiple = upload.array('images',8);

export const postCar: RequestHandler[] = [
    body('color').exists().bail().isString(),
    body('doors').exists().bail().isString(),
    body('price').exists().bail().isString(),
    body('year').exists().bail().isString(),
    body('images').exists().bail().isArray(),
    upload.array('images', 8),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const fs = require('fs');
            const mime = require('mime');
            const images = req.body.images;
            const photosPaths: any[] = [];
            for (const image of images) {
                let matches = image.name.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
                let response;

                if (matches.length !== 3) {
                    return new Error('Invalid input string');
                }

                response.type = matches[1];
                response.data = new Buffer(matches[2], 'base64');
                let decodedImg = response;
                let imageBuffer = decodedImg.data;
                let type = decodedImg.type;
                let extension = mime.extension(type);
                let fileName = image.name + extension;
                fs.writeFileSync("./images/" + fileName, imageBuffer, 'utf8');
                photosPaths.push(`./upload/car/${fileName}`);
            }
            const newCar: Car = req.body;
            newCar.images = photosPaths;

            const result = await createCar(newCar);
            res.status(StatusCodes.OK).json({ code: StatusCodes.OK, data: result, message: 'successfuly' });



        } catch (error) {
            console.error(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ code: StatusCodes.INTERNAL_SERVER_ERROR, data: {}, message: '', error: 'failed' });
        }
    }
]

export const filterCars: RequestHandler[] = [
    body('color').exists().bail().isString(),
    body('doors').exists().bail().isString(),
    body('priceFrom').exists().bail().isString(),
    body('yearFrom').exists().bail().isString(),
    body('yearTo').exists().bail().isString(),
    body('priceTo').exists().bail().isString(),
    body('gear').exists().bail().isString(),
    body('type').exists().bail().isString(),
    body('name').exists().bail().isString(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {

            const cars = await getByFilter(req.body);

            console.log(cars);
            res.status(StatusCodes.OK).json({ code: StatusCodes.OK, data: cars, message: 'successfuly' });


        } catch (error) {
            console.log(error);
        }

    }];
export const createCar = async (car: Car) => {

    const query = generateInserteQuery(`public."car"`, getDefaultCar(), car, true, true);
    console.log(query, car);
    const result = (await pg.db.query<Car>(query.text, query.values)).rows[0];
    return result;
}


const getByFilter = async (filter) => {
    try {
        var whereQuery: any[] = [];
        console.log(filter);
        if (filter.name != -1) {
            whereQuery.push(`(m.make LIKE '%${filter.name}%' or m.model_name LIKE '%${filter.name}%')`);
        }
        if (filter.doors != -1) {
            whereQuery.push(`c.doors='${filter.doors}' `);

        }
        if (filter.color != -1) {
            whereQuery.push(`  c.color='${filter.color}' `)
        }
        if (filter.gear != -1) {
            whereQuery.push(`  m.transmission='${filter.gear}' `)
        }
        if (filter.type != -1) {
            whereQuery.push(`  m.type='${filter.type}' `)
        }

        if (filter.priceFrom != -1) {
            whereQuery.push(`c.price>='${filter.priceFrom}'`);
        }
        if (filter.priceTo != -1) {
            whereQuery.push(`c.price<='${filter.priceTo}'`);
        }
        if (filter.yearFrom != -1) {
            whereQuery.push(`c.year>='${filter.yearFrom}'`);
        }
        if (filter.yearTo != -1) {
            whereQuery.push(`c.year<='${filter.yearTo}'`);
        }

        var filterQuery = '';

        for (let it = 0; it < whereQuery.length; it++) {
            if (it == 0) {
                filterQuery = 'Where ' + whereQuery[it];
            } else {
                filterQuery += ' and ' + whereQuery[it];
            }
        }


        let query = `SELECT c.* ,m.make,m.type,m.transmission,m.fuel,m.model_name,a.name as agency_name FROM public."car" as c join public."model" as m on c.model_id=m.id join public."agency" as a on c.agency_id=a.id `;
        query += ' ' + filterQuery;

        console.log(query);
        let Cars: Car[];
        Cars = (await pg.db.query<Car>(query)).rows;
        return Cars;
    }
    catch (error) {
        console.log(error);
    }
}

export const getCarByPrice = async (key?: string, value?: string): Promise<Car[]> => {
    let Cars: Car[];
    if ((!key && value) || (key && !value)) throw new Error('Invalid Argumemts');
    let query = `SELECT c.* ,m.make,m.type,m.transmission,m.fuel,m.model_name,a.name as agency_name FROM public."car" as c join public."model" as m on c.model_id=m.id join public."agency" as a on c.agency_id=a.id`;
    const queryValues: any[] = [];
    if (key && value && Object.keys(getDefaultCar()).includes(key.trim())) {
        query += ` WHERE c.${key.trim()}<=$1`;
        queryValues.push(value);
    }
    query += ' ;';
    console.log(query);
    Cars = (await pg.db.query<Car>(query, queryValues)).rows;
    return Cars;
}


export const getBy = async (key?: string, value?: string): Promise<Car[]> => {
    let Cars: Car[];
    if ((!key && value) || (key && !value)) throw new Error('Invalid Argumemts');
    let query = `SELECT c.* ,m.make,m.type,m.transmission,m.fuel,m.model_name,a.name as agency_name ,u.phone_number as phone,a.email as agency_email,a.facebook as agency_facebook ,a.location as agency_location FROM public."car" as c join public."model" as m on c.model_id=m.id join public."agency" as a on c.agency_id=a.id join public."user" as u on a.user_id=u.id`;
    const queryValues: any[] = [];
    if (key && value && Object.keys(getDefaultCar()).includes(key.trim())) {
        query += ` WHERE c.${key.trim()}=$1`;
        queryValues.push(value);
    }
    query += ' ;';
    console.log(query);
    Cars = (await pg.db.query<Car>(query, queryValues)).rows;
    return Cars;
}



const getCount = async () => {
    let query = `SELECT count(*) FROM public."car" `;
    return (await pg.db.query<Car>(query)).rows;
}


export const updateCar = async (car: Car, hasImages: boolean) => {

    const query = generateUpdateQuery(`public."car"`, getDefaultCar(), car, true, hasImages);
    query.text += `WHERE id =$${++query.paramCounter}`;
    query.values.push(car.id);
    const result = (await pg.db.query<Car>(query.text, query.values)).rows[0];
    return result;
}

export const removeCar = async (car: Car) => {
    const query = generateDeleteQuery(`public."car"`, { id: car.id });
    const result = (await pg.db.query<Car>(query.text, query.values)).rows[0];
    return result;
}

export const deleteCars = async (key?: string, value?: string): Promise<Car[]> => {

    let modeuls: Car[];
    if ((key && !value) || (key && !value)) throw new Error('invalid arguments');
    let query = `delete FROM public."car"`;
    const queryValues: any[] = [];
    if (key && value && Object.keys(getDefaultCar()).includes(key.trim())) {
        query += ` WHERE "${key.trim()}"= $1`;
        queryValues.push(value);
    }
    query += ';';
    modeuls = (await pg.db.query<Car>(query, queryValues));
    return modeuls;
}
