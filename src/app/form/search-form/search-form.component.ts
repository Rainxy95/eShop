import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  term:any
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    this.term = '';
  }

  onSubmit(){
    if(!this.term.trim()) {console.log('olo')}
    else{
      this.router.navigate(['/search',{term:this.term}])
    }
  }

}
