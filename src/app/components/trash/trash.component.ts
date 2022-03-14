import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user.class';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-trash',
	templateUrl: './trash.component.html',
	styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

	@Input() user: any

	constructor() { }

	public totalPoints: number = 0

	public steps = [
		{ name: 'Step 0', 	points: 0 		},
		{ name: 'Step 1', 	points: 5 		},
		{ name: 'Step 2', 	points: 10 		},
		{ name: 'Step 3', 	points: 15 		},
		{ name: 'Step 4', 	points: 20 		},
		{ name: 'Step 5', 	points: 25 		},
		{ name: 'Step 6', 	points: 30 		},	
		{ name: 'Step 7', 	points: 35 		},
		{ name: 'Step 8', 	points: 40 		},
	]
	public rewards = [
		{
			name: 'Propre', 
			desc: '', 
			points: 10, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Super propre', 
			desc: '', 
			points: 20, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Super super propre', 
			desc: '', 
			points: 30, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Mega propre', 
			desc: '', 
			points: 40, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
	] 


	ngOnInit() {
		this.totalPoints = this.user.visitedBins.reduce((acc: any, val: any) => acc + val.points, 0)
		this.initProgressBar()
	}
	initProgressBar() {
		const progressBar = document.createElement('div')
		progressBar.classList.add('progress-bar', 'bg-success', 'progress-bar-striped', 'progress-bar-animated')
		progressBar.style.width = `${this.percentage}%`
		document.getElementsByClassName('progress')[0].appendChild(progressBar)
	}

	get percentage(): number {
		return Math.round((this.totalPoints / this.steps[this.steps.length - 1].points) * 100)
	}

	claimReward(reward: any) {
		reward.collect()

		setTimeout(() => {
			reward.isCollecting = false

			const isSuccess = true
			Swal.fire({
				icon: 				isSuccess ? 'success' 						: 'error', 
				title: 				isSuccess ? 'Spot Cleared' 					: 'Oops!',
				text: 				isSuccess ? 'You have cleared the reward!' 	: 'You have not claimed your reward!',
				confirmButtonText: 	isSuccess ? 'Great!' 						: 'Ok',
				confirmButtonColor: '#006e27',
				showCancelButton: false,
			})
			
		}, 2000)
	}
}
