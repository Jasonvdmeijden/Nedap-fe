import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-result-form',
  templateUrl: './sign-up-result-form.component.html',
  styleUrls: ['./sign-up-result-form.component.scss']
})
export class SignUpResultFormComponent {

  result?: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);  
      this.result = params['result'] || 'failed';
    });
  }
  
}
