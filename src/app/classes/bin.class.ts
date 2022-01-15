export class Bin {

	public _id: string

	public name: string
	public location: Array<number>
	public address: string
	public createdAt: Date

	public firstVisit: Date
	public lastVisit: Date

	public userVisits: Array<object>
	public userFavoritesCount: number

	public recycledTrash: Array<object>

	public _json: any

	public get toJSON() {
		return this._json
	}


	public constructor(bin: any, deep = true) {

		this._json 			= bin

		this._id 			= bin['_id']

		this.name 			= bin['name']
		this.location 		= bin['location']
		this.address		= bin['address']
		this.createdAt 		= bin['createdAt']

		this.firstVisit 	= bin['firstVisit']
		this.lastVisit 		= bin['lastVisit']

		this.userVisits 		= bin['userVisits']
		this.userFavoritesCount = bin['userFavoritesCount']

		this.recycledTrash 	= bin['recycledTrash']

		if (deep) {
		} else {

		}
	}
}