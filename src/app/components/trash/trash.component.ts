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
		{ name: 'Step 0', points: 5 },
		{ name: 'Step 1', points: 15 },
		{ name: 'Step 2', points: 25 },
		{ name: 'Step 3', points: 35 },
		{ name: 'Step 4', points: 45 },
		{ name: 'Step 5', points: 55 },
		{ name: 'Step 6', points: 65 },
		{ name: 'Step 7', points: 75 },
		{ name: 'Step 8', points: 85 },
		{ name: 'Step 9', points: 95 },
		{ name: 'Step 10', points: 105 },
		{ name: 'Step 11', points: 115 },
		{ name: 'Step 12', points: 125 },
	]
	public rewards = [
		{
			name: 'Reward 0', 
			desc: 'Super cool reward 0', 
			points: 25, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Reward 1', 
			desc: 'Super cool reward 1', 
			points: 50, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Reward 2', 
			desc: 'Super cool reward 2', 
			points: 75, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Reward 3', 
			desc: 'Super cool reward 3', 
			points: 100, 
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

			const isSuccess = Math.random() >= 0.5
			Swal.fire({
				icon: 				isSuccess ? 'success' : 'error', 
				title: 				isSuccess ? 'Success!' : 'Oops!',
				text: 				isSuccess ? 'You have claimed your reward!' : 'You have not claimed your reward!',
				confirmButtonText: 	isSuccess ? 'Great!' : 'Ok',
				showCancelButton: false,
			})
			
		}, 2000)
	}
}
