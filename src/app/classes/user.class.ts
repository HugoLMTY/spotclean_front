
export class User {

	public _id: string

	public firstName: string
	public lastName: string

	public sex: string
	public birthDate: Date

	public phone: number
	public email: string
	public password: string

	public profilePicture: string
	
	public favoritesBins: Array<string>

	public visitedBins: Array<object>

	private _json: any

	public get toJSON() {
		return this._json
	}

	public constructor(user: any, deep = true) {

		this._json 			= user

		this._id 			= user['_id']

		this.firstName 		= user['firstName']
		this.lastName 		= user['lastName']

		this.sex			= user['sex']
		this.birthDate 		= user['birthDate']

		this.phone 			= user['phone']
		this.email 			= user['email']
		this.password 		= user['password']

		this.profilePicture = user['profilePicture']
		
		this.visitedBins 	= user['visitedBins']
		this.favoritesBins 	= user['favoritesBins']

		this.visitedBins 	= user['visitedBins']

		if (deep) {
		} else {
		}


	}
}