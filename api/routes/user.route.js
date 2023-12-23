import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({
        "message":"Api is working"
    })
});

export default router