import { Component, OnInit } from '@angular/core';
import { Demo } from '../shared/model/demo';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-db-form',
  templateUrl: './demo-db-form.component.html',
  styleUrls: ['./demo-db-form.component.css']
})
export class DemoDbFormComponent implements OnInit {

  _data: Demo = {
    code: ""
  }

  mode: string = "ADD"
  code: string = ""

  constructor(
    private _afdatabase: AngularFireDatabase,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { 
    activeRouter.params.subscribe( (param) => {
        this.mode = param.mode?param.mode:"ADD"
        this.code = param.code?param.code:""
    })
  }

  ngOnInit() {
    if(this.mode="EDIT"){
      this._afdatabase.object(`items/${this.code}`).valueChanges().subscribe( (data: Demo)=>{
        this._data = data;
      })
    }
  }

  onFormSubmit(demoForm){
    if(this.mode == "ADD"){
      this._afdatabase.object(`items/${this._data.code}`).set(this._data).then( (resp)=>{
        this.router.navigate(["admin", "demo-db-list"]);
      })
    }else if(this.mode == "EDIT"){
      this._afdatabase.object(`items/${this._data.code}`).update(this._data).then( (resp)=>{
        this.router.navigate(["admin", "demo-db-list"]);
      })
    }else {
      alert("INVALID MODE")
    }
    
  }

}
