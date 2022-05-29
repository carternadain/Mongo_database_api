const router = require('express').Router();


const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');


// route to get "all thoguhtd"
router.route("/").get(getAllThought).post(createThought);


// api/thought/ :id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


  router.route("/:thoughtId/reactions").post(addReaction);
  router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);


module.exports = router;
