import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.css']
})
export class AcceptDialogComponent implements OnInit {
  acceptResult: string;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<AcceptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { this.acceptResult = data.acceptResult;}

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
    window.location.reload();
  }

}
