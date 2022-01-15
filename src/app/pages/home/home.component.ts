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
		firstName: 'John Doe',
		lastName: 'Doe',
		email: '',
		password: '',

		recycledTrash: [
			{
				binId: '420',
				date: new Date(),
				type: 'plastic',
				count: 3,
				points: 343,
			},
			{
				binId: '69',
				date: new Date(),
				type: 'glass',
				count: 2,
				points: 213,
			}
		]
	}

	ngOnInit() {
	}

}
