import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user.class';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { }

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

	ngOnInit() {
	}

}
