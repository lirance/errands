import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-dialog',
  templateUrl: './complete-dialog.component.html',
  styleUrls: ['./complete-dialog.component.css']
})
export class CompleteDialogComponent implements OnInit {
  completeResult: string;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<CompleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.completeResult = data.completeResult;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
    window.location.reload();
  }

}
