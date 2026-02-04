import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { GetImagesService } from '../../services/get-images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images',
  imports: [],
  templateUrl: './images.html',
  styleUrl: './images.scss',
})
export class Images implements OnInit {
imageService = inject(GetImagesService)
route= inject(Router)
allImagesList:any[] = [];

constructor(private cdr:ChangeDetectorRef){}

ngOnInit(){
  this.imageService.getImagesList().subscribe((list)=>{
    this.allImagesList=list;
    this.cdr.detectChanges()
})
}

openImage(id:number){
  this.route.navigate([`/images/${id}`])  
}

}
