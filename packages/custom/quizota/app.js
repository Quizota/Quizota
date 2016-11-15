'use strict'

/*
 * Defining the Package
 */
var Module = require('meanio').Module
var path = require('path')
var Quizota = new Module('quizota')

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Quizota.register(function (app, users, system) {

  Quizota.routes(app, users, system);

  // Set views path, template engine and default layout
  app.set('views', path.join(__dirname, '/server/views'))

  Quizota.angularDependencies(['mean.system', 'mean.users'])

  return Quizota
})
