# guest-management

## API Endpoints

**Guest check In**

**`Post`** `/api/guest`

	Params
		First Name
		Last Name
		Company
		photo_url
		DL_url

**Check In Guest Lookup**

**`Get`** `/api/guest/:first_name/:last_name`

**Guest Checkout**

**`PATCH`** `/api/guest`
	params
		id
