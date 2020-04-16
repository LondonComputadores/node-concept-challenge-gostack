"use strict";var express=require("express"),cors=require("cors"),_require=require("uuidv4"),uuid=_require.uuid,app=express();app.use(express.json()),app.use(cors());var repositories=[];app.get("/repositories",function(r,e){var s=r.query.title,i=s?repositories.filter(function(r){return r.title.includes(s)}):repositories;return e.json(i)}),app.put("/repositories/:id",function(r,e){var s=r.params.id,i=r.body,t=i.title,o=i.url,u=i.techs;repositories.findIndex(function(r){return r.id===s});if(p<0)return e.status(400).json({error:"Repository Not Found!"});var p={url:o,title:t,techs:u}}),app.delete("/repositories/:id",function(r,e){var s=r.params.id,i=repositories.findIndex(function(r){return r.id===s});return i<0?e.status(400).json({error:"Repository Not Found!"}):(repositories.splice(i,1),e.status(204).send())});