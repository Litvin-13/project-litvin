import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetImagesService } from '../../../services/get-images.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagesitem',
  imports: [CommonModule],
  templateUrl: './imagesitem.html',
  styleUrl: './imagesitem.scss',
})
export class ImagesItem {
route = inject(ActivatedRoute)
imageId = inject(GetImagesService)
id:number=0
image:any = null
src:string=''

constructor(private ctr:ChangeDetectorRef){}

ngOnInit(){
  this.id = Number(this.route.snapshot.params['id'])
  this.imageId.getImagesId(this.id).subscribe((date)=>{
    this.image = date
    this.src = `https://static.photos/nature/640x360/${this.id}`
    this.ctr.detectChanges()
  })
  
}

}
