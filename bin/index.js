#!/usr/bin/env node

// package.json `main` field will change when electron build
const midk = require('../index')

midk.init()
midk.run()
