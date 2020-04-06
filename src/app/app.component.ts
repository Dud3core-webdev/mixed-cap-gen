import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mixedCapFormControl: FormControl;
  public mixedCaps: string;

  constructor() {
    this.mixedCapFormControl = new FormControl('', Validators.required);
  }

  public ngOnInit(): void {
    this.mixedCapFormControl.valueChanges
      .subscribe((value) => this.mixedCaps = this.convertToMixedCaps(value));
  }

  public convertToMixedCaps(value: string): string {
    const allUpperCase = value.toUpperCase();
    let mixedCaps = '';

    for (let i = 0; i < allUpperCase.length; i++) {
      if (i % 2 === 0) {
        mixedCaps = mixedCaps.concat(allUpperCase[i]);
      } else {
        mixedCaps = mixedCaps.concat(allUpperCase[i].toLowerCase())
      }
    }

    return mixedCaps;
  }

}
