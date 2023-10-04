import Joi from "joi";

export const signUpShecma = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    city: Joi.string().required(),
    phone: Joi.string().trim().min(10).max(11).pattern(/^\d+$/).required()
})

export const loginShecma = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})