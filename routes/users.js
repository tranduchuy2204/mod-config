import { Router } from 'express';
var router = Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// add user
router.put('/', (req, res, next) => {
    next();
});
export default router;
