import { Component, OnInit } from '@angular/core';
import { Demo } from '../shared/model/demo';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  _data: Demo = {
    code: ""
  };

  mode: string = "ADD";
  code: string = "";

  constructor(
    private _fireStore: AngularFirestore,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe((param) => {
      this.mode = param.mode?param.mode:"ADD";
      this.code = param.code?param.code:"";
    });
    this._data.code = "00";
  }

  ngOnInit() {
    if (this.mode === "EDIT") {
      this._fireStore.collection("items").doc(this.code).valueChanges().subscribe((data: Demo) => {
        this._data = data;
      })
    }
  }

  onFormSubmit(demoForm) {
    // let data = JSON.parse( JSON.stringify(this._data) );
    // let data = {
    //   code : "009",
    //   name : "xx xx xx"
    // }
    // this._fireStore.collection("items").doc("").set(thi)

    if (this.mode == "ADD") {
      this._fireStore.collection("items").doc(this._data.code).set(
        this._data
      ).then((resp) => {
        this.router.navigate(["admin", "demo-list"]);
      }).catch((err) => {
        alert("Error")
      });
    } else if (this.mode == "EDIT") {
      this._fireStore.collection("items").doc(this._data.code).update(
        this._data
      ).then((resp) => {
        this.router.navigate(["admin", "demo-list"]);
      }).catch((err) => {
        alert("Error")
      });
    } else {
      alert("INVALID MODE");
    }
  }
}
