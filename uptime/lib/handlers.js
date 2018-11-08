/*
* Request handlers
*
*/

// Dependencies
const _data = require('./data');
const helpers = require('./helpers');
const config = require('./config');

// Define the handlers
const handlers = {};

/*
* HTML handlers
*
*/

// Index handler
handlers.index = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Uptime Monitoring - Made Simple',
      'head.description': 'We offer free, simple uptime monitoring for HTTP and HTTPS sites of all kinds. When your site goes down, we\'ll send you a text to let you know.',
      'body.title': 'Hello Templated World',
      'body.class': 'index'
    };

    // Read in a template as a string
    helpers.getTemplate('index', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Create account
handlers.accountCreate = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Create an account',
      'head.description': 'Signup is easy and only takes a few seconds',
      'body.class': 'index'
    };

    // Read in a template as a string
    helpers.getTemplate('accountCreate', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Create session
handlers.sessionCreate = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Log in to your account',
      'head.description': 'Please enter your phone number and password to access your account',
      'body.class': 'sessionCreate'
    };

    // Read in a template as a string
    helpers.getTemplate('sessionCreate', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Delete session
handlers.sessionDeleted = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Log out',
      'head.description': 'You have been logged our of your account',
      'body.class': 'sessionDeleted'
    };

    // Read in a template as a string
    helpers.getTemplate('sessionDeleted', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Edit your account
handlers.accountEdit = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Account Settings',
      'body.class': 'accountEdit'
    };

    // Read in a template as a string
    helpers.getTemplate('accountEdit', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Account has been deleted
handlers.accountDeleted = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Account Deleted',
      'head.description': 'Your account has been deleted',
      'body.class': 'accountDeleted'
    };

    // Read in a template as a string
    helpers.getTemplate('accountDeleted', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Create a new check
handlers.checksCreate = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Create a new check',
      'body.class': 'checksCreate'
    };

    // Read in a template as a string
    helpers.getTemplate('checksCreate', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Dashboard (view all checks)
handlers.checksList = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Dashboard',
      'body.class': 'checksList'
    };

    // Read in a template as a string
    helpers.getTemplate('checksList', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Checks edit
handlers.checksEdit = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for the interpolation
    const templateData = {
      'head.title': 'Check Details',
      'body.class': 'checksEdit'
    };

    // Read in a template as a string
    helpers.getTemplate('checksEdit', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            callback(200, str, 'html')
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    })
  } else {
    callback(405, undefined, 'html');
  }
};

// Favicon
handlers.favicon = function(data, callback) {
    // Reject any request that isn't a GET
    if (data.method == 'get') {
      // Read in the favicons data
      helpers.getStaticAsset('favicon.ico', function(err, data) {
        if (!err && data) {
          // Callback
          callback(200, data, 'favicon');
        } else {
          callback(500);
        }
      });
    } else {
      callback(405);
    }
};

// Public assets
handlers.public = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Get the filename being requested
    const trimmedAssetName = data.trimmedPath.replace('public/', '').trim();
    if (trimmedAssetName.length > 0) {
      // Read in the asset's data
      helpers.getStaticAsset(trimmedAssetName, function(err, data) {
        if (!err && data) {
          // Determine the content type (Default to plain text);
          let contentType = 'plain';

          if (trimmedAssetName.indexOf('.css') > -1) {
            contentType = 'css'
          }
          if (trimmedAssetName.indexOf('.png') > -1) {
            contentType = 'png'
          }
          if (trimmedAssetName.indexOf('.jpg') > -1) {
            contentType = 'jpg'
          }
          if (trimmedAssetName.indexOf('.ico') > -1) {
            contentType = 'favicon'
          }

          // Callback the data
          callback(200, data, contentType);
        } else {
          callback(404)
        }
      });
    } else {
      callback(404);
    }
  } else {
    callback(405);
  }
};

/*
* JSON API Handlers
*
*/

// Example error
handlers.exampleError = function(data, callback) {
  const err = new Error('This is an example error');
  throw(err);
};

handlers.users = function(data, callback) {
  const acceptaleMethpds = ['post', 'get', 'put', 'delete'];
  if (acceptaleMethpds.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
handlers._users = {};

// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none
handlers._users.post = function(data, callback) {
  // Check that all required fields are filled out
  const firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  const lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  const phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;
  const password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  const tosAgreement = typeof(data.payload.tosAgreement) == 'boolean' && data.payload.tosAgreement == true ? true : false;

  if (firstName && lastName && phone && password && tosAgreement) {
    // Make sure that the user doesn't already exist
    _data.read('users', phone, function(err, data) {
      if (err) {
        // Hash the password
        const hashedPassword = helpers.hash(password);

        // Create the user object
        if (hashedPassword) {
          const userObject = {
            'firstName': firstName,
            'lastName': lastName,
            'phone': phone,
            'hashedPassword': hashedPassword,
            'tosAgreement': true
          };

          // Store the user
          _data.create('users', phone, userObject, function(err) {
            if (!err) {
              callback(200);
            } else {
              console.log(err);
              callback(500, { 'Error': 'Could not create the new user'});
            }
          });
        } else {
          callback(500, { 'Error': 'Could not hash the user\'s password' });
        }
      } else {
        // User already exists
        callback(400, { 'Error': 'A user with that phone number already exists' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required fields' });
  }
};

// Users - get
// Required data: phone
// Optional data: none
handlers._users.get = function(data, callback) {
  // Check that the phone number is valid
  const phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 10 ? data.queryStringObject.phone.trim() : false;
  if (phone) {

    // Get the token from the headers
    const token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
    // Verify that the token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, function(tokenIsValid) {
      if (tokenIsValid) {
        // Lookup the user
        _data.read('users', phone, function(err, data) {
          if (!err && data) {
            // Remove hashed password before returning to requester
            delete data.hashedPassword;
            callback(200, data);
          } else {
            callback(404)
          }
        });
      } else {
        callback(403, { 'Error': 'Missing required token in header, or token is invalid' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' });
  }
};

// Users - put
// Required data: phone
// Optional data: firstName, lastName, password (at least one must be specified)
// @TODO Only let authenticated user updated object. Don't let them update anyone else's
handlers._users.put = function(data, callback) {
  // Check for the required field - phone
  const phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;

  // Check for optional fields
  const firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  const lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  const password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  // Error if the phone is invalid
  if (phone) {
    // Error if nothign is sent to update
    if (firstName || lastName || password) {
      // Get the token from the headers
      const token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

      // Verify the given token is valid for the phone number
      handlers._tokens.verifyToken(token, phone, function(tokenIsValid) {
        if (tokenIsValid) {
          _data.read('users', phone, function(err, userData) {
            if (!err && userData) {
              // Update the fields necessary
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.hashedPassword = helpers.hash(password);
              }

              // Store the new updates
              _data.update('users', phone, userData, function(err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, { 'Error': 'Could not update the user' });
                }
              })
            } else {
              callback(400, { 'Error': 'The specified user does not exist' });
            }
          });
        } else {
          callback(403, { 'Error' : 'Missing required token in header, or token is invalid' });
        }
      });
    } else {
      callback(400, { 'Error': 'Missing fields to update' });
    }
  } else {
    callback(404, { 'Error': 'Missing required field' });
  }
};

// Users - delete
// Required field: phone
handlers._users.delete = function(data, callback) {
  // Check that the phone number is valid
  const phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 10 ? data.queryStringObject.phone.trim() : false;
  if (phone) {
    const token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

    // Verify the given token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, function(tokenIsValid) {
      if (tokenIsValid) {
        _data.read('users', phone, function(err, userData) {
          if (!err && userData) {
            _data.delete('users', phone, function(err) {
              if (!err) {
                // Delete each of the checks associated with the user
                const userChecks = typeof(userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : [];
                const checksToDelete = userChecks.length;
                if (checksToDelete > 0) {
                  let checksDeleted = 0;
                  let deletionErrors = false;
                  // Loop through the checks
                  userChecks.forEach(function(checkId) {
                    _data.delete('checks', checkId, function(err) {
                      if (err) {
                        deletionErrors = true;
                      }
                      checksDeleted++
                      if (checksDeleted == checksToDelete) {
                        if (!deletionErrors) {
                          callback(200);
                        } else {
                          callback(500, { 'Error': 'Errors encountered while attempting to delete all the user\'s checks. All checks may not have been deleted from the system successfully.' });
                        }
                      }
                    });
                  });
                } else {
                  callback(200);
                }
              } else {
                callback(500, { 'Error': 'Could not delete the specified user' });
              }
            });
          } else {
            callback(400, { 'Error': 'Could not find the specified user' });
          }
        });
      } else {
        callback(403, { 'Error' : 'Missing required token in header, or token is invalid' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' });
  }
};

// Tokens
handlers.tokens = function(data, callback) {
  const acceptaleMethpds = ['post', 'get', 'put', 'delete'];
  if (acceptaleMethpds.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the token methods
handlers._tokens = {};

// Tokens - post
// Required data: phone, password
// Optional dta: none
handlers._tokens.post = function(data, callback) {
  const phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;
  const password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  if (phone && password) {
    // Lookup user who matches that phone number
    _data.read('users', phone, function(err, userData) {
      if (!err && userData) {
        // Hash the sent password, and compare it to the user's password
        const hashedPassword = helpers.hash(password);
        if (hashedPassword == userData.hashedPassword) {
          // If valid create a new token with random name, set expiration one hour in the future
          const tokenId = helpers.createRandomString(20);
          const expires = Date.now() * 1000 * 60 * 60;
          const tokenObject = {
            'phone': phone,
            'id': tokenId,
            'expires': expires
          };

          // Store the token
          _data.create('tokens', tokenId, tokenObject, function(err) {
            if (!err) {
              callback(200, tokenObject);
            } else {
              callback(500, { 'Error': 'Could not create the new token' });
            }
          });
        } else {
          callback(400, { 'Error': 'Password did not match the user\'s stored password.' });
        }
      } else {
        callback(400, { 'Error': 'Could not find the specified user' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required fields' });
  }
};

// Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = function(data, callback) {
  // Check that the ID is valid
  const id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    _data.read('tokens', id, function(err, tokenData) {
      if (!err && tokenData) {
        callback(200, tokenData);
      } else {
        callback(404)
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' });
  }
};

// Tokens - put
// Required data: id, extend
// Optional data: none
handlers._tokens.put = function(data, callback) {
  const id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;
  const extend = typeof(data.payload.extend) == 'boolean' && data.payload.extend == true ? true : false;
  if (id && extend) {
    _data.read('tokens', id, function(err, tokenData) {
      if (!err && tokenData) {
        // Check to make sure the token isn't already expired
        if (tokenData.expires > Date.now()) {
          // Set the expiration one hour from now
          tokenData.expires = Date.now() * 1000 * 60 * 60;

          // Store the new updates
          _data.update('tokens', id, tokenData, function(err) {
            if (!err) {
              callback(200);
            } else {
              callback(500, { 'Error': 'Could not update the token\'s expiration' });
            }
          });
        } else {
          callback(400, { 'Error': 'The token has already expired' });
        }
      } else {
        callback(400, { 'Error': 'Specified token does not exist' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required fields or fields are invalid' });
  }
};

// Tokens - delete
// Required data: id
// Optional data: none
handlers._tokens.delete = function(data, callback) {
  // Check that the id is valid
  const id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    _data.read('tokens', id, function(err, data) {
      if (!err && data) {
        _data.delete('tokens', id, function(err) {
          if (!err) {
            callback(200);
          } else {
            callback(500, { 'Error': 'Could not delete the specified token' });
          }
        });
      } else {
        callback(400, { 'Error': 'Could not find the specified token' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' });
  }
};

// Verify if a given token id is currently valid for a given user
handlers._tokens.verifyToken = function(id, phone, callback) {
  // Lookup the token
  _data.read('tokens', id, function(err, tokenData) {
    if (!err && tokenData) {
      // Check that the token is for the given user and has not expired
      if (tokenData.phone == phone && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// Checks
handlers.checks = function(data, callback) {
  const acceptaleMethpds = ['post', 'get', 'put', 'delete'];
  if (acceptaleMethpds.indexOf(data.method) > -1) {
    handlers._checks[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the checks methods

handlers._checks = {};

// Checks - post
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none
handlers._checks.post = function(data, callback) {
  // Validate inputs
  const protocol = typeof(data.payload.protocol) == 'string' && ['http', 'https'].indexOf(data.payload.protocol) > -1 ? data.payload.protocol : false;
  const url = typeof(data.payload.url) == 'string' && data.payload.url.length > 0 ? data.payload.url : false;
  const method = typeof(data.payload.method) == 'string' && ['get', 'post', 'put', 'delete'].indexOf(data.payload.method) > -1 ? data.payload.method : false;
  const successCodes = typeof(data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array && data.payload.successCodes.length > 0 ? data.payload.successCodes : false;
  const timeoutSeconds = typeof(data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 === 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false;

  if (protocol && url && method && successCodes && timeoutSeconds) {
    // Get the token from the headers
    const token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

    // Lookup the user by reading the token
    _data.read('tokens', token, function(err, tokenData){
      if (!(err && tokenData)) {
        const userPhone = tokenData.phone;

        // Lookup the user data
        _data.read('users', userPhone, function(err, userData){
          if (!err && userData) {
            const userChecks = typeof(userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : [];
            // Verify that the user has less than the number of max checks per user
            if (userChecks.length < config.maxChecks) {
              // Create a random id for the check
              const checkId = helpers.createRandomString(20);

              // Create the check object, and include the user's phone
              const checkObject = {
                'id': checkId,
                'userPhone': userPhone,
                'protocol': protocol,
                'url': url,
                'method': method,
                'successCodes': successCodes,
                'timeoutSeconds': timeoutSeconds
              };

              // Save the object
              _data.create('checks', checkId, checkObject, function(err) {
                if (!err) {
                  // Add the check id to the user object
                  userData.checks = userChecks;
                  userData.checks.push(checkId);

                  // Save the new user data
                  _data.update('users', userPhone, userData, function(err) {
                    if (!err) {
                      callback(200, checkObject);
                    } else {
                      callback(500, { 'Error': 'Could not update the user with the new check' });
                    }
                  })
                } else {
                  callback(500, { 'Error': 'Could not create the new check' });
                }
              })
            } else {
              callback(400, { 'Error' : 'The user already has the maximum number of checks (' + config.maxChecks + ')' });
            }
          } else {
            callback(403);
          }
        })
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required inputs or inputs are invalid' });
  }
};

// Checks - get
// Required data: id
// Optional data: none
handlers._checks.get = function(data, callback) {
  // Check that the phone number is valid
  const id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {

    // Lookup the check
    _data.read('checks', id, function(err, checkData) {
      if (!err && checkData) {
        // Get the token from the headers
        const token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the token is valid and belongs to the user who created the check
        handlers._tokens.verifyToken(token, checkData.userPhone, function(tokenIsValid) {
          if (tokenIsValid) {
            // Return the check data
            callback(200, checkData);
          } else {
            callback(403);
          }
        });
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' });
  }
};

// Checks - put
// Required data: id
// Options data: protocol, method, successCodes, timeoutSeconds - one must be sent
handlers._checks.put = function(data, callback) {
  // Check for the required field - phone
  const id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;

  // Check for optional fields
  const protocol = typeof(data.payload.protocol) == 'string' && ['http', 'https'].indexOf(data.payload.protocol) > -1 ? data.payload.protocol : false;
  const url = typeof(data.payload.url) == 'string' && data.payload.url.length > 0 ? data.payload.url : false;
  const method = typeof(data.payload.method) == 'string' && ['get', 'post', 'put', 'delete'].indexOf(data.payload.method) > -1 ? data.payload.method : false;
  const successCodes = typeof(data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array && data.payload.successCodes.length > 0 ? data.payload.successCodes : false;
  const timeoutSeconds = typeof(data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 === 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false;

  // Check to make sure id is valid
  if (id) {
    // Check to make sure one or more fields has been sent
    if (protocol || url || method || successCodes || timeoutSeconds) {
      // Lookup the check
      _data.read('checks', id, function(err, checkData) {
        if (!err && checkData) {
          // Get the token from the headers
          const token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
          // Verify that the token is valid and belongs to the user who created the check
          handlers._tokens.verifyToken(token, checkData.userPhone, function(tokenIsValid) {
            if (tokenIsValid) {
              // Update the check where necessary
              if (protocol) {
                checkData.protocol = protocol;
              }
              if (url) {
                checkData.url = url;
              }
              if (method) {
                checkData.method = method;
              }
              if (successCodes) {
                checkData.successCodes = successCodes;
              }
              if (timeoutSeconds) {
                checkData.timeoutSeconds = timeoutSeconds;
              }

              _data.update('checks', id, checkData, function(err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, { 'Error': 'Could not update the check' });
                }
              });
            } else {
              callback(403);
            }
          });
        } else {
          callback(400, { 'Error': 'Check ID did not exist' });
        }
      });
    } else {
      callback(400, { 'Error': 'Missing fields to update' });
    }
  } else {
    callback(400, { 'Error': 'Missing required fields' });
  }
};

// Checks - delete
// Required data: id
// Optional data: none
handlers._checks.delete = function(data, callback) {
  // Check that the id is valid
  const id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    // Lookup the check
    _data.read('checks', id, function(err, checkData) {
      if (!err && checkData) {
        // Get the token from the headers
        const token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
        // Verify the given token is valid for the phone number
        handlers._tokens.verifyToken(token, checkData.userPhone, function(tokenIsValid) {
          if (tokenIsValid) {
            // Delete the check data
            _data.delete('checks', id, function(err) {
              if (!err) {
                // Lookup the user
                _data.read('users', checkData.userPhone, function(err, userData) {
                  if (!err && userData) {
                    const userChecks = typeof(userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : [];
                    // Remove the deleted check from the list of checks
                    const checkPosition = userChecks.indexOf(id);
                    if (checkPosition > -1) {
                      userChecks.splice(checkPosition, 1);
                      // Resave the user's data
                      _data.update('users', checkData.userPhone, userData, function(err) {
                        if (!err) {
                          callback(200);
                        } else {
                          callback(500, { 'Error': 'Could not update the user' });
                        }
                      });
                    } else {
                      callback(500, { 'Error': 'Could not find the check on the user object, so could not remove it' });
                    }
                  } else {
                    callback(500, { 'Error': 'Could not find the user who created the check, so could not remove the check from the list of checks from the user object' });
                  }
                });
              } else {
                callback(500, { 'Error': 'Could not delete the check data' });
              }
            });
          } else {
            callback(403);
          }
        });
      } else {
        callback(400, { 'Error': 'The specified check ID does not exist' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' });
  }
};

// Ping handler
handlers.ping = function(data, callback) {
  callback(200);
};

// Not found handler
handlers.notFound = function(data, callback) {
  callback(404);
};

// Export the module
module.exports = handlers