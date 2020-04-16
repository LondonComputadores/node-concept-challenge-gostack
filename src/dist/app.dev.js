"use strict";

var express = require("express");

var cors = require("cors");

var _require = require("uuidv4"),
    uuid = _require.uuid;

var app = express();
app.use(express.json());
app.use(cors());
var repositories = [];
app.get("/repositories", function (request, response) {
  var title = request.query.title;
  var results = title ? repositories.filter(function (project) {
    return project.title.includes(title);
  }) : repositories;
  return response.json(results);
});
app.put("/repositories/:id", function (request, response) {
  var id = request.params.id;
  var _request$body = request.body,
      title = _request$body.title,
      url = _request$body.url,
      techs = _request$body.techs;
  var repositoryIndex = repositories.findIndex(function (repository) {
    return repository.id === id;
  });

  if (repository < 0) {
    return response.status(400).json({
      error: 'Repository Not Found!'
    });
  }

  var repository = {
    url: url,
    title: title,
    techs: techs
  };
});
app["delete"]("/repositories/:id", function (request, response) {
  var id = request.params.id;
  var repositoryIndex = repositories.findIndex(function (repositories) {
    return repositories.id === id;
  });

  if (repositoryIndex < 0) {
    return response.status(400).json({
      error: 'Repository Not Found!'
    });
  }

  repositories.splice(repositoryIndex, 1);
  return response.status(204).send();
});