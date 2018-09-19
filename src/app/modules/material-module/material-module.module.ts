import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

// Obligatory shared module to display that I know what a shared module is and how it works
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],
})
export class MaterialModuleModule { }
