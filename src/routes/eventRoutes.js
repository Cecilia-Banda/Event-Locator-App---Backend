const express = require("express");
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent, findEventsNearby, filterEventsByCategory } = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);
router.get("/search", findEventsNearby);
router.get("/filter", filterEventsByCategory);
router.get('/events/nearby', async (req, res) => {
  const { lat, lon, radius } = req.query;
  
  if (!lat || !lon || !radius) {
      return res.status(400).json({ error: "Missing required parameters" });
  }

  const query = `
      SELECT *, ST_Distance(location, ST_MakePoint(:lon, :lat)::geography) as distance
      FROM "Events"
      WHERE ST_DWithin(location, ST_MakePoint(:lon, :lat)::geography, :radius)
      ORDER BY distance;
  `;
  router.get('/events', async (req, res) => {
    const { category } = req.query;
    
    let query = {};
    if (category) {
        query.category = category;
    }

    const events = await Event.findAll({ where: query });
    res.json(events);
});


  const events = await sequelize.query(query, {
      replacements: { lat, lon, radius },
      type: QueryTypes.SELECT
  });

  res.json(events);
});


module.exports = router;
