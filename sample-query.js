const User = require("./models").user;
const ToDoItem = require("./models").todoItem;

// add this at the the top of your file - you'll need it for a query later on

// Select all rows where firstName === 'Dave', but only return the first one.
// Resolves with an object or undefined (if no matching rows exist)
// const getSpecificUser = async () => {
//   try {
//     const specificUSer = await User.findOne({ where: { name: "Maria" }, raw: true});
//     return specificUSer;
//   } catch (e) {
//     console.log(e);
//   }
// }

const getSpecificTask = async () => {
  try {
    const specificTask = await ToDoItem.findAll({raw: true});
    return specificTask;
  } catch (e) {
    console.log(e);
  }
};

getSpecificTask().then((task) => console.log(task));


// Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
// const userByPk = await User.findByPk(3);
// // A query using a numeric operator
// const tallUsers = await User.findAll({
//   // WHERE height >= 175
//   where: {
//     height: {
//       [Op.gte]: 175, // gte stands for 'greater than or equal'
//     },
//   },
// });

// getSpecificUser().then((user) => console.log(user));

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

// getAllUsers().then((users) => console.log(users));

// async function getAllTasks() {
//   try {
//     const allTasks = await ToDoItem.findAll({ tasks });
//     return allTasks;
//   } catch (e) {
//     console.log(e);
//   }

//   getAllTasks().then((tasks) => console.log(tasks));
// }
