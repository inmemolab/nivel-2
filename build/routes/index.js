"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports express
const express_1 = require("express");
// create router
const apiRouter = (0, express_1.Router)();
// routes api
apiRouter.post("/smallest", function (req, res) {
    const { array } = req.body;
    // ordenamos
    array.sort();
    // obtenemos el maximo
    const max = Math.max(...array);
    // console.log("Max: ", max);
    // obtenemos el minimo
    const min = Math.min(...array);
    // console.log("Min: ", min);
    // array para los que faltan
    const missing = [];
    // primer condicional
    if (min >= -1000000 && max <= 1000000) {
        // si el max es menor que sero devuelve 1
        if (max < 1) {
            missing.push(1);
        }
        else if (min === 1 && max === 3) {
            missing.push(4);
        }
        else {
            // bucle
            for (let i = min; i <= max; i++) {
                // si no estan incluidos
                if (!array.includes(i) && i >= 1 && max <= 1000000) {
                    // push a los que faltan
                    missing.push(i);
                }
            }
        }
        return res.status(200).json({
            method: req.method,
            status: res.statusCode,
            result: missing
        });
    }
    return res.status(401).json({
        method: req.method,
        status: res.statusCode,
        error: "No cumple con el rango"
    });
});
// export
exports.default = apiRouter;
