import { ToastrService } from 'ngx-toastr';
import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private toast: ToastrService) {}

  ngOnInit(): void {

      this.photoId = this.route.snapshot.params.photoId;
      // realiza busca da foto por ID
      this.photo$ = this.photoService.findById(this.photoId);
      this.photo$.subscribe(() => { }, err => {
        console.log(err);
          this.router.navigate(['not-found']);
      })

  }

  remove(){

    this.photoService.removePhoto(this.photoId)
      .subscribe(() => {
        this.router.navigate(['']);
        this.toast.success('Imagem removida com sucesso')
      })
  }

  like(photo: Photo){

    this.photoService.like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      })
  }

}
