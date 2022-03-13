import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profil',
	templateUrl: './profil.component.html',
	styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

	constructor() { }

	public isLoaded: boolean = false

	public currentUser: any
	public user: any = {
		firstName: 'John',
		lastName: 'Doe',

		favoritesBins: [],
		visitedBins: [
			{
				binId: {
					_id: '421',
					name: 'Bin 2',
					location: [0, 0],
					address: {
						city: 'Paris',
						street: 'rue des champs élysées',
						number: '23'
					},
					createdAt: new Date(),
					firstVisit: new Date(),
					lastVisit: new Date(),
					userVisits: [],
					userFavoritesCount: 0,
					recycledTrash: [],
				},
				date: new Date(),
				type: 'plastic',
				count: 10,
				points: 10
			},
			{
				binId: {
					_id: '420',
					name: 'Bin 1',
					location: [0, 0],
					address: {
						city: 'Paris',
						street: 'rue de la paix',
						number: '1'
					},
					createdAt: new Date(),
					firstVisit: new Date(),
					lastVisit: new Date(),
					userVisits: [
						{
							date: new Date(),
							userId: '123',
							count: 4,
							points: 23
						},
						{
							date: new Date(),
							userId: '243',
							count: 2,
							points: 42
						},
						{
							date: new Date(),
							userId: '543',
							count: 1,
							points: 12
						},
						{
							date: new Date(),
							userId: '359',
							count: 34,
							points: 543
						}
					],
					userFavoritesCount: 0,
					recycledTrash: [],
				},
				date: new Date(),
				type: 'metal',
				count: 2,
				points: 4
			},
			{
				binId: {
					_id: '421',
					name: 'Bin 2',
					location: [0, 0],
					address: {
						city: 'Paris',
						street: 'rue des champs élysées',
						number: '23'
					},
					createdAt: new Date(),
					firstVisit: new Date(),
					lastVisit: new Date(),
					userVisits: [],
					userFavoritesCount: 0,
					recycledTrash: [],
				},
				date: new Date(),
				type: 'paper',
				count: 5,
				points: 15
			}
		],
	}

	public userPoints: number = 0
	public userCollectedTrash: number = 0

	public sortedFavorites: any = []

	public isEditing: boolean = false

	ngOnInit(): void {

		if (this.user.visitedBins.length > 0)
			this.userPoints = this.user.visitedBins.reduce((acc: any, cur: any) => {
				return acc + cur.points
			}, 0)
		else this.userPoints = 0


		if (this.user.visitedBins.length > 0)
			this.userCollectedTrash = this.user.visitedBins.reduce((acc: any, cur: any) => {
				return acc + cur.count
			}, 0)
		else this.userCollectedTrash = 0


		this.initFavorites()
		this.isLoaded = true
	}

	initFavorites() {
		const favList = this.user.visitedBins
			.sort((a: any, b: any) => {
				return b.points - a.points
			})
			.slice(0, 3)
			.forEach((bin: any) => {
				if (this.sortedFavorites.findIndex((b: any) => bin.binId._id == b.binId._id) === -1)
					this.sortedFavorites.push(bin)
			})
	}

	getUserVisitCount(binId: any) {
		return this.user.visitedBins.filter((bin: any) => bin.binId._id === binId).length
	}

	getUserPointsCount(binId: any) {
		return this.user.visitedBins.filter((bin: any) => bin.binId._id === binId).reduce((acc: any, cur: any) => {
			return acc + cur.points
		}, 0)
	}

	getUserCount(binId: any) {
		return this.user.visitedBins.filter((bin: any) => bin.binId._id === binId).reduce((acc: any, cur: any) => {
			return acc + cur.count
		}, 0)
	}


	edit() {

	}
}
