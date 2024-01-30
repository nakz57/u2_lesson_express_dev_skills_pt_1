var express = require('express')
var router = express.Router()
const skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsCtrl.index)

//GET /skills/new
router.get('/new', skillsCtrl.newSkill)

//GET /skills/:id
router.get('/:id', skillsCtrl.show)

//POST /skills
router.post('/', skillsCtrl.create)

//DELETE /skills/:id
router.delete('/:id', skillsCtrl.deleteSkill)

//GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit)

//PUT /skills/:id
router.put('/:id', skillsCtrl.update)

module.exports = router
