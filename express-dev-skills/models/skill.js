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

module.exports = {
  getAll,
  getOne
}
