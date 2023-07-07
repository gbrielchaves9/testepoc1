import joi from "joi"

const foodSchema = joi.object({
    type: joi.string().required(),
    name:joi.string().required(),
    price:joi.number().required()

})
export default foodSchema;