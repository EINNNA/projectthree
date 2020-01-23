const router = require("express").Router();
const accountController = require("../../controllers/accountController");

router.route("/")
  .get(accountController.findAll);
  //.post(accountController.create);

router
  .route("/:id");
  //.get(accountController.findById)
  //.put(accountController.update)
  //.delete(accountController.remove);

module.exports = router;
