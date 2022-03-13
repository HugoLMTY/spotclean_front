import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) { }

	public currentUser: any

	public selectedBin: any

	public bins: Array<any> = [
		{
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
		{
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
		}
	]

	ngOnInit(): void {
		console.log('beanz')
		console.log(this.bins)

		this.route.queryParams.subscribe(params => {
			console.log('params', params)
			if (params.bin) {
				const bin = this.bins.find(bin => bin._id === params.bin)
				if (!bin) this.selectedBin = null
				else {
					bin.address.fullAddress = `${bin.address.number} ${bin.address.street}, ${bin.address.city}`
					this.selectedBin = bin
				}
			}
			console.log('selectedBin', this.selectedBin)
		})

		this.initBinInfos()
	}

	initBinInfos() {
		this.bins.forEach(bin => {
			if (this.currentUser) 
				bin['userVisitsCount'] = bin.userVisits.filter((visit: any) => visit.userId === this.currentUser._id).length

			bin['sortedUserVisits'] = bin.userVisits.sort((a: any, b: any) => { return b.points - a.points }).slice(0, 3)
		})
	}

	seeMap(bin: any) {
		window.scrollTo(0, 0)
		this.router.navigate(['/map'], { 
			queryParams: { 
				bin: bin._id
			} 
		})
	}

}
