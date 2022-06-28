import express from "express";
import {getProfiles, getProfilesByRegion, getProfilesByName, getProfilesByBootcampNumber} from "../models/profiles.js"
const router = express.Router();

router.get("/", async function (req, res) {
    if (req.query.region !== undefined) {
        const result = await getProfilesByRegion(req.query.region);
        return res.json({ success: true, payload: result })
    } else if(req.query.name){
        const result = await getProfilesByName(req.query.name);
        return res.json({ success: true, payload: result })
    } else if(req.query.Bootcampnumber){
        const setToNum = req.query.Bootcampnumber*1;
        const result = await getProfilesByBootcampNumber(setToNum);
        return res.json({ success: true, payload: result })
    } else {
        let response = await getProfiles();
        res.json({success: true, payload: response});
    }
});


export default router;


