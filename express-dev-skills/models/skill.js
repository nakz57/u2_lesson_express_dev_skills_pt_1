const { edit } = require('../controllers/skills')

const skills = [
  { id: 100, skill: 'Programming', done: true },
  { id: 200, skill: 'Boxing', done: true },
  { id: 300, skill: 'Professional Energy', done: true },
  { id: 400, skill: 'Millionaire', done: false }
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  let skill = skills.find((skill) => {
    //find todo where the id is equal to the id parameter
    return skill.id === parseInt(id)
  })
  return skill
}

const create = (skill) => {
  skill.id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
}

const deleteOne = (id) => {
  const index = skills.findIndex((skill) => {
    return skill.id === parseInt(id)
  })
  skills.splice(index, 1)
}

const updateOne = (id, updatedSkill) => {
  const skillToUpdate = skills.find((todo) => todo.id === parseInt(id))
  skillToUpdate.skill = updatedSkill
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
}
