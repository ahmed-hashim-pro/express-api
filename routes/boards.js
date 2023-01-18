const router = require('express').Router();
const controller = require('../controllers/boards');



/* Post . */
router.post('/', async function (req, res, next) {
    let body = req.body
    let id = await controller.count()+1 || 1
    let board = {
        "id": id,
        "stage": 1,
        "title": body.title
    }
    await controller.create(board)
    res.status(201)
    res.send(board);
});


/* Put . */
router.put('/:id', async function (req, res, next) {
    let id = req.id
    let body = req.body

    if (body.stage === 1 || body.stage === 2 || body.stage === 3){
        let board = {
            "id": id,
            "stage": body.stage,
            "title": body.title
        }
        await controller.update(board)
        res.status(200)
        res.send(board);
    }else{
        res.status(400).send()

    }


});




module.exports = router;
