import Joi from "joi";

export const serviceSchema = Joi.object({
    nameService: Joi.string().required(),
    photo: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().precision(2).required()
})