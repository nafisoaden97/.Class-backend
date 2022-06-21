import express from "express";
import {getProfiles, getProfilesByRegion, getProfilesByName, getProfilesByBootcamp} from "../models/profiles.js"
const router = express.Router();

router.get("/", async function (req, res) {
    if (req.query.region !== undefined) {
        const result = await getProfilesByRegion(req.query.region);
        return res.json({ success: true, payload: result })
    } else if(req.query.name){
        const result = await getProfilesByName(req.query.name);
        return res.json({ success: true, payload: result })
    } else if(req.query.bootcampNumber){
        const result = await getProfilesByBootcamp(req.query.bootcampNumber);
        return res.json({ success: true, payload: result })
    } else {
        let response = await getProfiles();
        res.json({success: true, payload: response});
    }
});


export default router;


