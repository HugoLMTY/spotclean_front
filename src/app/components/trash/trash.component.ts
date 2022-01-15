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
		{ name: 'Step 0', points: 50 },
		{ name: 'Step 1', points: 150 },
		{ name: 'Step 2', points: 250 },
		{ name: 'Step 3', points: 350 },
		{ name: 'Step 4', points: 450 },
		{ name: 'Step 5', points: 550 },
		{ name: 'Step 6', points: 650 },
		{ name: 'Step 7', points: 750 },
		{ name: 'Step 8', points: 850 },
		{ name: 'Step 9', points: 950 },
		{ name: 'Step 10', points: 1050 },
		{ name: 'Step 11', points: 1150 },
		{ name: 'Step 12', points: 1250 },
	]
	public rewards = [
		{
			name: 'Reward 0', 
			desc: 'Super cool reward 0', 
			points: 250, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Reward 1', 
			desc: 'Super cool reward 1', 
			points: 500, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Reward 2', 
			desc: 'Super cool reward 2', 
			points: 750, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
		{
			name: 'Reward 3', 
			desc: 'Super cool reward 3', 
			points: 1000, 
			collect: function() { this.isCollecting = true }, 
			isCollecting: false,
		},
	] 


	ngOnInit() {
		this.totalPoints = this.user.recycledTrash.reduce((acc: any, val: any) => acc + val.points, 0)
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

			// Pick a random boolean value
			const isSuccess = Math.random() >= 0.5

			let modal = {
				title: '',
				text: '',
				icon: '',
				confirmButtonText: '',
				showCancelButton: false,
			}


			if (isSuccess) {
				modal.title = 'Success!'
				modal.text = 'You have claimed your reward!'
				modal.confirmButtonText = 'Great!'
			} else {
				modal.title = 'Oops!'
				modal.text = 'You have not claimed your reward!'
				modal.confirmButtonText = 'Ok'
			}

			Swal.fire({
				icon: isSuccess ? 'success' : 'error', 
				title: modal.title,
				text: modal.text,
				confirmButtonText: modal.confirmButtonText,
				showCancelButton: modal.showCancelButton,
			})


		}, 2000)
	}
}
