# API Routes

## User

### /api/user/[id]

* GET
	* Returns information about the user
	* On success, returns 200
* POST
	* Not Used
	* Returns 405 failure

### /api/user/add

* GET
	* Not Used
	* Returns 405 failure
* POST
	* Adds a user to OrgManagement
	* On success, returns 200

### /api/user/organizations

* GET
	* Returns the organizations that a user is in
	* On success, returns 200
* POST
	* Not Used
	* Returns 405 failure

## Organization

### /api/organization/[id]

* GET
	* Returns information about the organization
	* On success, returns 200
* POST
	* Not Used
	* Returns 405 failure

### /api/organization/add

* GET
	* Not Used
	* Returns 405 failure
* POST
	* Adds an organization to OrgManagement
	* On success, returns 200

### /api/organization/addmember

* GET
	* Not Used
	* Returns 405 failure
* POST
	* Adds a member to an organization
	* On success, returns 200

## Event

### /api/event/[id]

* GET
	* Returns information about the event
	* On success, returns 200
* POST
	* Not Used
	* Returns 405 failure

### /api/event/add

* GET
	* Not Used
	* Returns 405 failure
* POST
	* Adds an event to OrgManagement
	* On success, returns 200

### /api/event/edit

* GET
	* Not Used
	* Returns 405 failure
* POST
	* Edits an existing event
	* On success, returns 200